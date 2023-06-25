import yaml from 'js-yaml';

const parsers = (format, data) => {
  switch (format) {
    case 'json': return JSON.parse(data);
    case 'yaml': case 'yml': return yaml.load(data);
    default: return `Unknown format: ${format}`;
  }
};

export default parsers;
