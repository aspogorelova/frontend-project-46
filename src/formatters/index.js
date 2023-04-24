import makeStylish from './stylish.js';
import makePlain from './plain.js';
import makeJson from './json.js';

const makeFormatting = (treeDiff, format) => {
  switch (format) {
    case 'stylish': return makeStylish(treeDiff);

    case 'plain': return makePlain(treeDiff);

    case 'json': return makeJson(treeDiff);

    default: return 'Unknown format';
  }
};

export default makeFormatting;
