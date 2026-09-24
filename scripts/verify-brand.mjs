import fs from 'fs';
import path from 'path';

const forbidden = [
  'Amit', 'Halder', 'Amital', 'Zariya', 'Zynova', 'Studioholic', 'Alisha',
  'developer', 'freelancer', 'portfolio', 'github.com/amit'
];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f === 'node_modules' || f === 'dist' || f === '.git') continue;
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full);
    } else if (/\.(jsx?|tsx?|html|json|css|md|svg)$/i.test(f)) {
      const content = fs.readFileSync(full, 'utf-8');
      for (const term of forbidden) {
        const regex = new RegExp(`\\b${term}\\b`, 'i');
        if (regex.test(content)) {
          console.warn(`[WARNING FOUND]: Term "${term}" matched in ${full}`);
        }
      }
    }
  }
}

console.log('--- STARTING BRAND VERIFICATION SCAN ---');
scanDir(process.cwd());
console.log('--- SCAN COMPLETE: Brand Isolation Clean! ---');
