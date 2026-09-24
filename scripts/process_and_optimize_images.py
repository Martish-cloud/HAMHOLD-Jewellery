import os
import re
import shutil
from PIL import Image

# Output directories
BASE_OUT = "public/images"
MEN_OUT = os.path.join(BASE_OUT, "jewellery", "men")
WOMEN_OUT = os.path.join(BASE_OUT, "jewellery", "women")
THUMBS_OUT = os.path.join(BASE_OUT, "jewellery", "thumbs")
AMBASSADOR_OUT = os.path.join(BASE_OUT, "brand", "ambassador")

os.makedirs(MEN_OUT, exist_ok=True)
os.makedirs(WOMEN_OUT, exist_ok=True)
os.makedirs(THUMBS_OUT, exist_ok=True)
os.makedirs(AMBASSADOR_OUT, exist_ok=True)

# 1. PROCESS BRAND AMBASSADOR
print("=== 1. PROCESSING BRAND AMBASSADOR IMAGES ===")
amb_src_dir = "C:/Users/hp/Downloads/HM/Brand Ambassador"
if os.path.exists(amb_src_dir):
    for f in sorted(os.listdir(amb_src_dir)):
        if f.endswith('.png'):
            src_p = os.path.join(amb_src_dir, f)
            num = os.path.splitext(f)[0]
            with Image.open(src_p) as im:
                # Desktop high-res WebP
                im_rgb = im.convert('RGB')
                dest_desktop = os.path.join(AMBASSADOR_OUT, f"ambassador-{num}.webp")
                im_rgb.save(dest_desktop, 'WEBP', quality=88, method=6)
                print(f"Saved: {dest_desktop} ({os.path.getsize(dest_desktop) // 1024} KB)")

                # If this is 1.png, also save as ambassador-hero.webp and mobile version
                if num == '1':
                    dest_hero = os.path.join(AMBASSADOR_OUT, "ambassador-hero.webp")
                    im_rgb.save(dest_hero, 'WEBP', quality=88, method=6)
                    # Mobile 800px width
                    w, h = im.size
                    mobile_w = 800
                    mobile_h = int(h * (mobile_w / w))
                    im_mobile = im_rgb.resize((mobile_w, mobile_h), Image.Resampling.LANCZOS)
                    dest_mobile = os.path.join(AMBASSADOR_OUT, "ambassador-hero-mobile.webp")
                    im_mobile.save(dest_mobile, 'WEBP', quality=85, method=6)
                    print(f"Saved Hero: {dest_hero} and Mobile: {dest_mobile}")

# Also process vertical portrait
ref_portrait = "src/HamHold/For Women/remember her face should not be changed. create a deferent image with a deferent attractive pose..jpg"
if os.path.exists(ref_portrait):
    with Image.open(ref_portrait) as im:
        im_rgb = im.convert('RGB')
        dest_portrait = os.path.join(AMBASSADOR_OUT, "ambassador-portrait.webp")
        im_rgb.save(dest_portrait, 'WEBP', quality=88, method=6)
        print(f"Saved: {dest_portrait} ({os.path.getsize(dest_portrait) // 1024} KB)")


# 2. MATCH AND PROCESS PRODUCT IMAGES
print("\n=== 2. PROCESSING JEWELLERY PRODUCT IMAGES ===")

# Products list from our data
PRODUCTS_META = [
  # Rings (Women)
  {'id': 'aurelia-solitaire-ring', 'name': 'Aurelia Solitaire Diamond Ring', 'gender': 'women'},
  {'id': 'elysian-emerald-ring', 'name': 'Elysian Emerald Cut Solitaire', 'gender': 'women'},
  {'id': 'seraphina-eternity-band', 'name': 'Seraphina Diamond Eternity Band', 'gender': 'women'},
  {'id': 'lyra-halo-ring', 'name': 'Lyra Champagne Diamond Halo Ring', 'gender': 'women'},
  {'id': 'vesper-sapphire-ring', 'name': 'Vesper Royal Sapphire & Diamond Ring', 'gender': 'women'},
  {'id': 'solstice-fluted-band', 'name': 'Solstice Fluted 18K Gold Band', 'gender': 'unisex'},

  # Earrings (Women)
  {'id': 'astra-drop-earrings', 'name': 'Astra Celestial Diamond Drop Earrings', 'gender': 'women'},
  {'id': 'celeste-pearl-drops', 'name': 'Celeste South Sea Pearl & Diamond Drops', 'gender': 'women'},
  {'id': 'lumina-diamond-studs', 'name': 'Lumina Brilliant Diamond Studs', 'gender': 'women'},
  {'id': 'zephyr-sculpted-hoops', 'name': 'Zephyr Sculpted 18K Gold Hoops', 'gender': 'women'},
  {'id': 'bellatrix-emerald-chandeliers', 'name': 'Bellatrix Emerald Chandelier Earrings', 'gender': 'women'},
  {'id': 'mirage-diamond-climbers', 'name': 'Mirage Diamond Climber Earrings', 'gender': 'women'},

  # Necklaces (Women)
  {'id': 'harmonia-tennis-necklace', 'name': 'Harmonia Diamond Tennis Necklace', 'gender': 'women'},
  {'id': 'valentina-pearl-strand', 'name': 'Valentina Cascading Pearl Strand', 'gender': 'women'},
  {'id': 'kismet-station-necklace', 'name': 'Kismet Delicate Diamond Station Necklace', 'gender': 'women'},
  {'id': 'solaria-gold-collar', 'name': 'Solaria Herringbone Fluid Gold Collar', 'gender': 'women'},
  {'id': 'elysium-pave-choker', 'name': 'Elysium Pavé Chevron Choker', 'gender': 'women'},

  # Bracelets (Women)
  {'id': 'nocturne-diamond-bracelet', 'name': 'Nocturne Pavé Diamond Tennis Bracelet', 'gender': 'women'},
  {'id': 'aureole-gold-bangle', 'name': 'Aureole 18K Gold Twisted Bangle', 'gender': 'women'},
  {'id': 'serena-pearl-bracelet', 'name': 'Serena Pearl & Diamond Charm Bracelet', 'gender': 'women'},
  {'id': 'calypso-emerald-bracelet', 'name': 'Calypso Emerald & Diamond Tennis Bracelet', 'gender': 'women'},
  {'id': 'eclipse-noir-bangle', 'name': 'Eclipse Noir Diamond Flexible Bangle', 'gender': 'women'},

  # Pendants (Women)
  {'id': 'velora-emerald-pendant', 'name': 'Velora Cushion-Cut Emerald Pendant', 'gender': 'women'},
  {'id': 'orion-diamond-pendant', 'name': 'Orion Solitaire Diamond Floating Pendant', 'gender': 'women'},
  {'id': 'selene-tahitian-pendant', 'name': 'Selene Tahitian Black Pearl Pendant', 'gender': 'women'},
  {'id': 'astraea-constellation-locket', 'name': 'Astraea Constellation Diamond Locket', 'gender': 'women'},

  # Bangles (Women)
  {'id': 'maharani-pave-bangle', 'name': 'Maharani Pavé Diamond Broad Bangle', 'gender': 'women'},
  {'id': 'samara-ribbed-bangle', 'name': 'Samara Ribbed 18K Gold Open Bangle', 'gender': 'women'},
  {'id': 'nirvana-polki-kada', 'name': 'Nirvana Emerald & Uncut Polki Open Kada', 'gender': 'women'},

  # Nose Rings (Women)
  {'id': 'serein-diamond-nose-pin', 'name': 'Serein Diamond Floral Nose Pin', 'gender': 'women'},
  {'id': 'zara-diamond-nose-ring', 'name': 'Zara Crescent Diamond Wire Nose Ring', 'gender': 'women'},

  # Men's Jewellery
  {'id': 'monarch-mens-kada', 'name': "Monarch Imperial Gold & Diamond Kada", 'gender': 'men'},
  {'id': 'elan-mens-cuff', 'name': "Élan Sculpted Platinum & Gold Cuff", 'gender': 'men'},
  {'id': 'sovereign-onyx-ring', 'name': "Sovereign Black Onyx & Diamond Signet Ring", 'gender': 'men'},
  {'id': 'atlas-cuban-chain', 'name': "Atlas Heavy 18K Yellow Gold Cuban Chain", 'gender': 'men'},
  {'id': 'titan-platinum-band', 'name': "Titan Brushed Platinum & Diamond Band", 'gender': 'men'},
  {'id': 'vulcan-compass-pendant', 'name': "Vulcan Obsidian & Gold Compass Pendant", 'gender': 'men'},
]

def clean_key(s):
    return re.sub(r'[^a-z0-9]', '', s.lower())

def make_transparent_if_white(im):
    """If corners are pure white / near-white, convert white background to transparent alpha."""
    im = im.convert('RGBA')
    w, h = im.size
    pix = im.load()
    corners = [pix[0,0], pix[w-1,0], pix[0,h-1], pix[w-1,h-1]]
    avg_corner = [sum(c[i] for c in corners) // 4 for i in range(3)]
    
    # If all corner RGB channels are > 240, this is a white-isolated studio shot
    if avg_corner[0] >= 238 and avg_corner[1] >= 238 and avg_corner[2] >= 238:
        # Create alpha channel where pure white becomes transparent
        new_data = []
        for item in im.getdata():
            r, g, b, a = item
            # White tolerance
            if r >= 242 and g >= 242 and b >= 242:
                new_data.append((r, g, b, 0))
            elif r >= 225 and g >= 225 and b >= 225:
                # Soft transition
                dist = max(r, g, b) - 225
                alpha = int(255 * (1 - dist / 17))
                new_data.append((r, g, b, alpha))
            else:
                new_data.append((r, g, b, 255))
        im.putdata(new_data)
        return im, True
    return im, False

# Collect source files
men_files = [(os.path.join("src/HamHold/For Men", f), f) for f in os.listdir("src/HamHold/For Men") if not os.path.isdir(os.path.join("src/HamHold/For Men", f))]
women_files = [(os.path.join("src/HamHold/For Women", f), f) for f in os.listdir("src/HamHold/For Women") if not os.path.isdir(os.path.join("src/HamHold/For Women", f))]

matched_images = {}
unmatched_products = []

for prod in PRODUCTS_META:
    p_key = clean_key(prod['name'])
    found_path = None
    
    # Determine candidate file pool based on gender
    if prod['gender'] == 'men':
        candidates = men_files + women_files
    else:
        candidates = women_files + men_files
        
    for full_p, fname in candidates:
        # Skip ambassador reference file
        if 'remember her face' in fname.lower():
            continue
        base_name = os.path.splitext(fname)[0]
        base_clean = clean_key(re.sub(r'^images', '', base_name))
        
        # Special alias check for Maharani
        if prod['id'] == 'maharani-pave-bangle' and 'maharani' in base_clean:
            found_path = full_p
            break
            
        if p_key in base_clean or base_clean in p_key:
            found_path = full_p
            break
            
    if found_path:
        # Process and save
        gender_dir = MEN_OUT if prod['gender'] == 'men' else WOMEN_OUT
        web_folder = 'men' if prod['gender'] == 'men' else 'women'
        
        dest_filename = f"{prod['id']}.webp"
        dest_full = os.path.join(gender_dir, dest_filename)
        dest_thumb = os.path.join(THUMBS_OUT, dest_filename)
        
        try:
            with Image.open(found_path) as im:
                # Handle transparency
                im_processed, was_keyed = make_transparent_if_white(im)
                
                # Resize if larger than 1200px
                max_dim = 1200
                w, h = im_processed.size
                if max(w, h) > max_dim:
                    scale = max_dim / max(w, h)
                    im_processed = im_processed.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
                
                # Save main image WebP
                im_processed.save(dest_full, 'WEBP', quality=90, method=6)
                
                # Create Thumbnail (500px max)
                thumb_dim = 500
                tw, th = im_processed.size
                tscale = thumb_dim / max(tw, th)
                thumb_im = im_processed.resize((int(tw * tscale), int(th * tscale)), Image.Resampling.LANCZOS)
                thumb_im.save(dest_thumb, 'WEBP', quality=85, method=6)
                
                web_path = f"/images/jewellery/{web_folder}/{dest_filename}"
                thumb_path = f"/images/jewellery/thumbs/{dest_filename}"
                
                matched_images[prod['id']] = {
                    'primaryImage': web_path,
                    'thumbImage': thumb_path,
                    'sourceFile': os.path.basename(found_path),
                    'was_keyed': was_keyed,
                    'sizeKB': os.path.getsize(dest_full) // 1024
                }
                print(f"[SUCCESS] {prod['name']} -> {web_path} (from {os.path.basename(found_path)}) [{os.path.getsize(dest_full) // 1024} KB]")
        except Exception as e:
            print(f"[ERROR] Failed to process {found_path}: {e}")
            unmatched_products.append(prod)
    else:
        unmatched_products.append(prod)
        print(f"[UNMATCHED] {prod['name']} (ID: {prod['id']})")

print(f"\nTotal Products Processed: {len(matched_images)} of {len(PRODUCTS_META)}")
print(f"Total Unmatched (falling back to pristine vector SVG): {len(unmatched_products)}")
for u in unmatched_products:
    print(f" - {u['name']} ({u['gender']})")
