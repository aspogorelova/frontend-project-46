import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathFile = (filename) => path.join(__dirname, '..', '__tests__', '__fixtures__', filename);

const readFile = (file) => {
  const path = getPathFile(file);
  const data = readFileSync(path, 'utf-8');
  return JSON.parse(data);
}

export default readFile;
console.log(readFile('file1.json'));