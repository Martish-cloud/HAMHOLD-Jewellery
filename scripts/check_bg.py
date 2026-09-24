import os
from PIL import Image

def check_bg_samples(folder):
    print(f"\n--- Checking backgrounds in {folder} ---")
    for f in sorted(os.listdir(folder)):
        p = os.path.join(folder, f)
        if os.path.isdir(p): continue
        try:
            with Image.open(p) as img:
                img_rgb = img.convert('RGB')
                w, h = img_rgb.size
                corners = [
                    img_rgb.getpixel((0, 0)),
                    img_rgb.getpixel((w - 1, 0)),
                    img_rgb.getpixel((0, h - 1)),
                    img_rgb.getpixel((w - 1, h - 1)),
                ]
                print(f"{f[:35]:35} | Corners: {corners}")
        except Exception as e:
            print(f"{f[:35]:35} | Error: {e}")

check_bg_samples("src/HamHold/For Men")
check_bg_samples("src/HamHold/For Women")
