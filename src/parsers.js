import path from 'path';
import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPathFile = (filename) => path.join(__dirname, '..', '__tests__', '__fixtures__', filename);

const readFile = (file) => {
  const pathOfFile = getPathFile(file);
  const data = readFileSync(pathOfFile, 'utf-8');
  const getExtension = path.extname(pathOfFile).replace('.', '');
  if (getExtension === 'json') {
    return JSON.parse(data);
  }
  if (getExtension === 'yaml' || getExtension === 'yml') {
    return yaml.load(data);
  }
};

export default readFile;
