import makeStylish from './stylish.js';
import makePlain from './plain.js';

const makeFormatting = (treeDiff, format) => {
  switch (format) {
    case 'stylish': return makeStylish(treeDiff);
      break;

    case 'plain': return makePlain(treeDiff);
      break;

    case 'json': return JSON.stringify(treeDiff);
      break;

    default:
      throw new Error(`False format ${format}`);
  }

  return format;
};

export default makeFormatting;
