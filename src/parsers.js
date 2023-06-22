import path from 'path';
import yaml from 'js-yaml';

export const getFormat = (pathofFile) => path.extname(pathofFile).replace('.', '');

export const parsers = (format, data) => {
  switch (format) {
    case 'json': return JSON.parse(data);
    case 'yaml': case 'yml': return yaml.load(data);
    default: return `Unknown format: ${format}`;
  }
};
