import os
import shutil
from PIL import Image, ImageEnhance, ImageFilter

BASE_DIR = 'public/images/jewellery'
THUMBS_DIR = os.path.join(BASE_DIR, 'thumbs')
WOMEN_DIR = os.path.join(BASE_DIR, 'women')
MEN_DIR = os.path.join(BASE_DIR, 'men')

# List all products
files = sorted(os.listdir(THUMBS_DIR))
print(f"Total product images to enhance: {len(files)}")

report = []

for filename in files:
    if not filename.endswith('.webp'):
        continue
        
    thumb_path = os.path.join(THUMBS_DIR, filename)
    women_path = os.path.join(WOMEN_DIR, filename)
    men_path = os.path.join(MEN_DIR, filename)
    
    primary_dir = WOMEN_DIR if os.path.exists(women_path) else MEN_DIR
    primary_path = os.path.join(primary_dir, filename)
    
    # 1. Determine best existing source version
    t_im = Image.open(thumb_path)
    p_im = Image.open(primary_path) if os.path.exists(primary_path) else None
    
    t_pixels = t_im.size[0] * t_im.size[1]
    p_pixels = (p_im.size[0] * p_im.size[1]) if p_im else 0
    
    # Choose whichever has higher pixel resolution as source
    if p_pixels >= t_pixels and p_im:
        chosen_im = p_im.copy()
        chosen_from = 'PRIMARY'
    else:
        chosen_im = t_im.copy()
        chosen_from = 'THUMB'
        
    chosen_im = chosen_im.convert('RGB')
    orig_w, orig_h = chosen_im.size
    orig_long = max(orig_w, orig_h)
    
    # 2. Target high-res dimension (at least 1100px, max 1400px, or keep if already larger)
    if orig_long < 1100:
        target_long = 1100
        scale = target_long / orig_long
        new_w, new_h = int(orig_w * scale), int(orig_h * scale)
        master = chosen_im.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Subtle de-haze micro-contrast
        enh_c = ImageEnhance.Contrast(master)
        master = enh_c.enhance(1.04)
        
        # Fine-detail sharpening (brings out facets and edges without halos)
        master = master.filter(ImageFilter.UnsharpMask(radius=1.2, percent=95, threshold=2))
        
        # Color vibrancy
        enh_col = ImageEnhance.Color(master)
        master = enh_col.enhance(1.03)
    else:
        # Already high-res: preserve native resolution, apply gentle luxury polish
        new_w, new_h = orig_w, orig_h
        master = chosen_im
        
        enh_c = ImageEnhance.Contrast(master)
        master = enh_c.enhance(1.03)
        master = master.filter(ImageFilter.UnsharpMask(radius=1.0, percent=80, threshold=2))
        enh_col = ImageEnhance.Color(master)
        master = enh_col.enhance(1.02)
        
    # Save High-Res Master WebP
    master.save(primary_path, 'WEBP', quality=94, method=6)
    high_sz = os.path.getsize(primary_path) // 1024
    
    # 3. Generate razor-sharp 2x Retina Card Thumbnail (min 700px long edge)
    thumb_long = 720
    t_scale = thumb_long / max(new_w, new_h)
    tw, th = int(new_w * t_scale), int(new_h * t_scale)
    thumb = master.resize((tw, th), Image.Resampling.LANCZOS)
    thumb = thumb.filter(ImageFilter.UnsharpMask(radius=0.8, percent=60, threshold=2))
    thumb.save(thumb_path, 'WEBP', quality=92, method=6)
    thumb_sz = os.path.getsize(thumb_path) // 1024
    
    report.append(f"{filename:32} | Source: {chosen_from:7} ({orig_w}x{orig_h}) -> HighRes: {new_w}x{new_h} ({high_sz}KB) | RetinaThumb: {tw}x{th} ({thumb_sz}KB)")

print("\n".join(report))
