import fs from 'fs';
import path from 'path';
import { PRODUCTS, COLLECTIONS, CATEGORIES } from '../src/data/products.js';

let missing = 0;

function checkAsset(assetPath, context) {
  if (!assetPath) return;
  if (assetPath.startsWith('http://') || assetPath.startsWith('https://')) return;
  
  // Public assets
  let localPath = path.join('public', assetPath);
  if (!fs.existsSync(localPath)) {
    console.error(`Missing asset [${context}]: ${assetPath} (resolved to: ${localPath})`);
    missing++;
  }
}

for (const p of PRODUCTS) {
  checkAsset(p.primaryImage, `Product primaryImage: ${p.id}`);
  checkAsset(p.thumbImage, `Product thumbImage: ${p.id}`);
}

for (const c of COLLECTIONS) {
  checkAsset(c.image, `Collection image: ${c.id}`);
}

for (const cat of CATEGORIES) {
  checkAsset(cat.image, `Category image: ${cat.id}`);
}

if (missing === 0) {
  console.log("ALL PRODUCT, COLLECTION, AND CATEGORY IMAGES EXIST IN PUBLIC/!");
} else {
  console.error(`Found ${missing} missing asset(s)!`);
  process.exit(1);
}
