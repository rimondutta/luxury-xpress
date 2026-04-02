import fs from 'fs';
import path from 'path';

/**
 * replace-color.mjs
 * Usage: node scripts/replace-color.mjs <old-hex> <new-hex>
 * Example: node scripts/replace-color.mjs #D3AF37 #722F37
 */

const oldHex = process.argv[2];
const newHex = process.argv[3];

if (!oldHex || !newHex) {
  console.log('Usage: node scripts/replace-color.mjs <old-hex> <new-hex>');
  process.exit(1);
}

const searchDirs = ['./app', './components', './data', './public'];
const excludeDirs = ['node_modules', '.next', '.git'];
const fileExtensions = ['.tsx', '.ts', '.css', '.svg', '.json'];

const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!excludeDirs.some(exclude => filePath.includes(exclude))) {
        walkDir(filePath, callback);
      }
    } else {
      if (fileExtensions.includes(path.extname(filePath))) {
        callback(filePath);
      }
    }
  });
};

const replaceInFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = new RegExp(oldHex, 'gi');
    if (regex.test(content)) {
      const newContent = content.replace(regex, newHex);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated colors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

console.log(`Searching for ${oldHex} and replacing with ${newHex}...`);
searchDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir, replaceInFile);
  }
});

console.log('Done.');
