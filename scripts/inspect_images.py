import os
import glob
from PIL import Image

def inspect_folder(folder_path):
    print(f"\n=================== INSPECTING: {folder_path} ===================")
    if not os.path.exists(folder_path):
        print(f"Directory does not exist: {folder_path}")
        return
    
    files = os.listdir(folder_path)
    for f in sorted(files):
        p = os.path.join(folder_path, f)
        if os.path.isdir(p):
            continue
        try:
            with Image.open(p) as img:
                has_alpha = img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info)
                print(f"File: {f} | Format: {img.format} | Size: {img.size} | Mode: {img.mode} | Has Alpha: {has_alpha}")
        except Exception as e:
            print(f"File: {f} | ERROR: {e}")

inspect_folder("src/HamHold/For Men")
inspect_folder("src/HamHold/For Women")
inspect_folder("C:/Users/hp/Downloads/HM/Brand Ambassador")
