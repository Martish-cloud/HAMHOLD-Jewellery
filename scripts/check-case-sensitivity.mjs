import fs from 'fs';
import path from 'path';

let hasError = false;

function checkCase(filePath) {
  const dir = path.dirname(filePath);
  const base = path.basename(filePath);
  if (dir === filePath || dir === '.' || dir === '') return true;
  
  if (!fs.existsSync(dir)) {
    console.error(`Directory does not exist: ${dir}`);
    hasError = true;
    return false;
  }
  
  const entries = fs.readdirSync(dir);
  if (!entries.includes(base)) {
    console.error(`Case mismatch or missing file! Wanted: "${base}", in dir: "${dir}". Actual files: ${entries.filter(e => e.toLowerCase() === base.toLowerCase()).join(', ')}`);
    hasError = true;
    return false;
  }
  return checkCase(dir);
}

function scanFile(srcPath) {
  const content = fs.readFileSync(srcPath, 'utf8');
  // Match import ... from '...' or import('...')
  const regex = /from\s+['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1] || match[2];
    if (importPath.startsWith('.')) {
      // Relative import
      const dir = path.dirname(srcPath);
      let target = path.resolve(dir, importPath);
      
      // Try with extensions if not present
      if (!fs.existsSync(target)) {
        for (const ext of ['.js', '.jsx', '.json', '.ts', '.tsx', '/index.js', '/index.jsx']) {
          if (fs.existsSync(target + ext)) {
            target = target + ext;
            break;
          }
        }
      }
      
      checkCase(target);
    }
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith('.js') || entry.name.endsWith('.jsx')) {
      scanFile(full);
    }
  }
}

walk('src');

if (hasError) {
  console.error("CASE SENSITIVITY CHECK FAILED!");
  process.exit(1);
} else {
  console.log("ALL IMPORTS MATCH EXACT CASE ON DISK!");
}
