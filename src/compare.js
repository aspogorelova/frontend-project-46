import _ from 'lodash';
// import { getPathFile } from './parsers.js';
// import { readFileSync } from 'fs';
// import { getFormat } from './parsers.js';

const compareObject = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(keys);

  const treeOfDiff = sortedKeys.map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, type: 'nested', children: compareObject(data1[key], data2[key]) };
    }
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    }
    if (data1[key] !== data2[key]) {
      return { key, type: 'changed', value1: data1[key], value2: data2[key] };
    }
    return { key, type: 'unchanged', value: data2[key] };
  });
  return treeOfDiff;
};

export default compareObject;

// const pathOfFile1 = getPathFile('file1.json');
// const pathOfFile2 = getPathFile('file2.json');
// const contentData1 = readFileSync(pathOfFile1, 'utf-8');
// const contentData2 = readFileSync(pathOfFile2, 'utf-8');
// const data1 = getFormat(pathOfFile1, contentData1);
// const data2 = getFormat(pathOfFile2, contentData2);
// console.log('result  ', compareObject(data1, data2));