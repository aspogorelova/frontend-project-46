import makeStylish from "./stylish.js";
import makePlain from "./plain.js";

const makeFormatting = (treeDiff, format) => {
  switch (format) {
    case 'stylish': return makeStylish(treeDiff);
      break;
    
    case 'plain': return makePlain(treeDiff);
      break;
    
    default: return "Unknown format";
  }
};

export default makeFormatting;