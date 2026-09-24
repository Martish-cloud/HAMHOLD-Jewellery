import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Function to encode raw RGBA buffer into a PNG file
function createPng(width, height, rgbaBuffer) {
  // PNG signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // 8-bit depth
  ihdrData.writeUInt8(6, 9); // Color type 6: RGBA
  ihdrData.writeUInt8(0, 10); // Compression
  ihdrData.writeUInt8(0, 11); // Filter
  ihdrData.writeUInt8(0, 12); // Interlace
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // Scanlines with filter byte 0
  const scanlineLength = width * 4 + 1;
  const rawScanlines = Buffer.alloc(height * scanlineLength);
  for (let y = 0; y < height; y++) {
    rawScanlines[y * scanlineLength] = 0; // Filter: None
    rgbaBuffer.copy(rawScanlines, y * scanlineLength + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressedData = zlib.deflateSync(rawScanlines, { level: 9 });
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(8 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const typeAndData = buf.subarray(4, 8 + len);
  const crc = crc32(typeAndData);
  buf.writeUInt32BE(crc, 8 + len);
  return buf;
}

// Draw HM Monogram directly onto RGBA buffer
function drawHMMonogram(size) {
  const buf = Buffer.alloc(size * size * 4);
  const goldR = 214, goldG = 194, goldB = 154; // #D6C29A
  const bgR = 11, bgG = 11, bgB = 12; // #0B0B0C
  const borderR = 168, borderG = 135, borderB = 91; // #A8875B

  const cornerRadius = size * 0.18;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;

      // Rounded rectangle mask
      let inside = true;
      const dx = Math.min(x, size - 1 - x);
      const dy = Math.min(y, size - 1 - y);
      if (dx < cornerRadius && dy < cornerRadius) {
        const dist = Math.hypot(cornerRadius - dx, cornerRadius - dy);
        if (dist > cornerRadius) inside = false;
      }

      if (!inside) {
        buf[idx + 3] = 0; // Transparent
        continue;
      }

      // Background color with soft radial highlight
      const cx = size / 2, cy = size / 2;
      const distCenter = Math.hypot(x - cx, y - cy) / (size * 0.7);
      const vignette = Math.max(0, 1 - distCenter * 0.4);
      buf[idx] = Math.round(bgR * vignette + 8 * (1 - distCenter));
      buf[idx + 1] = Math.round(bgG * vignette + 6 * (1 - distCenter));
      buf[idx + 2] = Math.round(bgB * vignette + 5 * (1 - distCenter));
      buf[idx + 3] = 255;

      // Subtle border
      const isBorder = (x < 2 || x >= size - 2 || y < 2 || y >= size - 2);
      if (isBorder && size >= 32) {
        buf[idx] = borderR;
        buf[idx + 1] = borderG;
        buf[idx + 2] = borderB;
        buf[idx + 3] = 180;
      }
    }
  }

  // Draw HM letters
  // H: left vertical, right vertical, crossbar
  // M: left vertical, right vertical, two diagonal center strokes
  const strokeW = Math.max(1, Math.round(size * 0.08));
  const topY = Math.round(size * 0.28);
  const botY = Math.round(size * 0.72);
  const midY = Math.round((topY + botY) / 2);

  // Layout: H occupies x from 0.16 to 0.44; M occupies x from 0.50 to 0.84
  const hX1 = Math.round(size * 0.18);
  const hX2 = Math.round(size * 0.42);
  const mX1 = Math.round(size * 0.52);
  const mX2 = Math.round(size * 0.82);
  const mMidX = Math.round((mX1 + mX2) / 2);

  function drawPixel(px, py, r, g, b, a = 255) {
    if (px < 0 || px >= size || py < 0 || py >= size) return;
    const i = (py * size + px) * 4;
    // Blend with existing
    const alpha = a / 255;
    buf[i] = Math.round(buf[i] * (1 - alpha) + r * alpha);
    buf[i + 1] = Math.round(buf[i + 1] * (1 - alpha) + g * alpha);
    buf[i + 2] = Math.round(buf[i + 2] * (1 - alpha) + b * alpha);
    buf[i + 3] = 255;
  }

  function drawRect(rx, ry, rw, rh) {
    for (let y = ry; y < ry + rh; y++) {
      for (let x = rx; x < rx + rw; x++) {
        drawPixel(x, y, goldR, goldG, goldB);
      }
    }
  }

  // Draw H
  drawRect(hX1, topY, strokeW, botY - topY); // Left stem
  drawRect(hX2 - strokeW, topY, strokeW, botY - topY); // Right stem
  drawRect(hX1, midY - Math.floor(strokeW / 2), hX2 - hX1, strokeW); // Crossbar

  // Serifs for H
  if (size >= 32) {
    const serifW = Math.round(strokeW * 2.2);
    const serifH = Math.max(1, Math.round(size * 0.03));
    drawRect(hX1 - Math.floor(serifW / 3), topY, serifW, serifH);
    drawRect(hX1 - Math.floor(serifW / 3), botY - serifH, serifW, serifH);
    drawRect(hX2 - strokeW - Math.floor(serifW / 3), topY, serifW, serifH);
    drawRect(hX2 - strokeW - Math.floor(serifW / 3), botY - serifH, serifW, serifH);
  }

  // Draw M
  drawRect(mX1, topY, strokeW, botY - topY); // Left stem
  drawRect(mX2 - strokeW, topY, strokeW, botY - topY); // Right stem

  // Diagonal lines for M
  const mSteps = (botY - topY);
  for (let s = 0; s < mSteps; s++) {
    const y = topY + s;
    const progress = s / mSteps;
    // Left diagonal down to center
    const xLeft = Math.round(mX1 + progress * (mMidX - mX1));
    for (let w = 0; w < strokeW; w++) {
      drawPixel(xLeft + w, y, goldR, goldG, goldB);
    }
    // Right diagonal down to center
    const xRight = Math.round(mX2 - strokeW - progress * (mX2 - strokeW - mMidX));
    for (let w = 0; w < strokeW; w++) {
      drawPixel(xRight + w, y, goldR, goldG, goldB);
    }
  }

  // Serifs for M
  if (size >= 32) {
    const serifW = Math.round(strokeW * 2.2);
    const serifH = Math.max(1, Math.round(size * 0.03));
    drawRect(mX1 - Math.floor(serifW / 3), topY, serifW, serifH);
    drawRect(mX1 - Math.floor(serifW / 3), botY - serifH, serifW, serifH);
    drawRect(mX2 - strokeW - Math.floor(serifW / 3), topY, serifW, serifH);
    drawRect(mX2 - strokeW - Math.floor(serifW / 3), botY - serifH, serifW, serifH);
  }

  return createPng(size, size, buf);
}

const sizes = [16, 32, 48, 180, 192, 512];
const outDir = path.resolve('public');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

sizes.forEach(size => {
  const png = drawHMMonogram(size);
  let filename = `favicon-${size}x${size}.png`;
  if (size === 180) filename = 'apple-touch-icon.png';
  if (size === 192) filename = 'icon-192.png';
  if (size === 512) filename = 'icon-512.png';
  if (size === 32) {
    fs.writeFileSync(path.join(outDir, 'favicon.ico'), png);
  }
  fs.writeFileSync(path.join(outDir, filename), png);
  console.log(`Generated ${filename} (${size}x${size})`);
});
