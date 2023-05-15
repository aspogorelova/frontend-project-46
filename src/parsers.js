import path from 'path';
import yaml from 'js-yaml';

export default (pathOfFile, data) => {
  const format = path.extname(pathOfFile).replace('.', '');
  switch (format) {
    case 'json': return JSON.parse(data);
    case 'yaml': return yaml.load(data);
    case 'yml': return yaml.load(data);
    default: return null;
  }
};
