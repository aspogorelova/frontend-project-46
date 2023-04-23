import makeStylish from './stylish.js';
import makePlain from './plain.js';

const makeFormatting = (treeDiff, format) => {
  switch (format) {
    case 'stylish': return makeStylish(treeDiff);

    case 'plain': return makePlain(treeDiff);

    default: return 'Unknown format';
  }
};

export default makeFormatting;
