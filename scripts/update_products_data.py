import os
import json
import re

# Read current products.js
with open("src/data/products.js", "r", encoding="utf-8") as f:
    content = f.read()

# Check all available webp files in public/images/jewellery/men and public/images/jewellery/women
men_files = set(os.listdir("public/images/jewellery/men"))
women_files = set(os.listdir("public/images/jewellery/women"))

print("Men WebP files:", men_files)
print("Women WebP files:", women_files)

# For each product id, if a webp exists, update primaryImage
def update_product_image(match):
    full_block = match.group(0)
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", full_block)
    if not id_match:
        return full_block
    
    prod_id = id_match.group(1)
    webp_name = f"{prod_id}.webp"
    
    new_img_path = None
    if webp_name in men_files:
        new_img_path = f"/images/jewellery/men/{webp_name}"
    elif webp_name in women_files:
        new_img_path = f"/images/jewellery/women/{webp_name}"
        
    if new_img_path:
        thumb_path = f"/images/jewellery/thumbs/{webp_name}"
        # Replace primaryImage
        full_block = re.sub(
            r"primaryImage:\s*['\"][^'\"]+['\"]",
            f"primaryImage: '{new_img_path}',\n    thumbImage: '{thumb_path}'",
            full_block
        )
        print(f"Updated {prod_id} -> {new_img_path}")
    else:
        print(f"Keeping fallback for {prod_id}")
        
    return full_block

# Match each product object inside PRODUCTS array
updated_content = re.sub(r"\{\s*id:\s*['\"][^}]+?\}", update_product_image, content, flags=re.DOTALL)

with open("src/data/products.js", "w", encoding="utf-8") as f:
    f.write(updated_content)

print("\nSuccessfully updated src/data/products.js with new optimized image paths!")
