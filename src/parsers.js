import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getPathFile = (filename) => path.join(__dirname, '..', '__tests__', '__fixtures__', filename);

export const getFormat = (pathOfFile, data) => {
  const format = path.extname(pathOfFile).replace('.', '');
  switch (format) {
    case 'json': return JSON.parse(data);
    case 'yaml': return yaml.load(data);
    case 'yml': return yaml.load(data);
    case 'txt': return data;
    default: return null;
  }
};
