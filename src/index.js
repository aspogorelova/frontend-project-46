import readFile from './parsers.js';
import compareObject from './compare.js';
import makeStylish from './formaters/stylish.js';

export default (file1, file2) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  const diff = compareObject(data1, data2);
  return makeStylish(diff);
};
