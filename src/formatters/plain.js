import readFile from '../parsers.js';
import compareObject from '../compare.js';

const getPath = (node, acc) => {
  acc.push(node.key);
  return acc.join('.');
};
  
const getValue = (value) => {
  if (value === null || value === true || value === false) {
    return value;
  } else if (typeof value === 'string' || typeof value === 'number') {
    return `'${value}'`;
  } else {
    return String('[complex value]');
  }
};

const makePlain = (data) => {
  const iter = (node, path) => {
    // console.log('node in iter  ', node);
    const name = node.key;
    path.push(name);
    if (node.type === 'object') {
      // console.log('OBJECT');
      return node.children.map((item) => iter(item, path));
    }

      switch (node.type) {
        case 'added':
          return `Property '${path.join('.')}' was added with value: ${getValue(node.value)}`;

        case 'deleted':
          return `Property '${path.join('.')}' was removed`;

        case 'changed':
          return `Property '${path.join('.')}' was updated. From ${getValue(node.oldValue)} to ${getValue(node.newValue)}`;

        case 'unchanged':
          return 'unchanged';

        default:
          return 'Error';
      }
  };

  const result = data
    .flatMap((item) => iter(item, []))
    .filter((item) => item !== 'unchanged');
  return result.join('\n');
};

export default makePlain;

const data1 = readFile('file1.json');
const data2 = readFile('file2.json');
const data = compareObject(data1, data2);
console.log(makePlain(data));