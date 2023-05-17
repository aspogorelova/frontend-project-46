import makeStylish from './stylish.js';
import makePlain from './plain.js';

const makeFormatting = (treeDiff, format) => {
  let result;
  switch (format) {
    case 'stylish': result = makeStylish(treeDiff);
      break;

    case 'plain': result = makePlain(treeDiff);
      break;

    case 'json': result = JSON.stringify(treeDiff);
      break;

    default:
      throw new Error(`False format ${format}`);
  }

  return result;
};

export default makeFormatting;
