import readFile from './parsers.js';
import compareObject from './compare.js';
import makeFormatting from './formatters/index.js';

 const gendiff = (file1, file2, format) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  const diff = compareObject(data1, data2);
  return makeFormatting(diff, format);
};

export default gendiff;

const file1 = 'file1.json';
const file2 = 'file2.json';
// console.log('result  ', gendiff(file1, file2, 'plain'));