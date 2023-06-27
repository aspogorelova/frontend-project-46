import _ from 'lodash';

const getIndent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);

const getValue = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }

  const entries = Object.entries(value);
  const lines = entries.map(([key, val]) => {
    const line = `${getIndent(depth + 1)}  ${key}: ${getValue(val, depth + 1)}`;
    return line;
  });
  return ['{', ...lines, `${getIndent(depth)}  }`].join('\n');
};

const makeStylish = (data) => {
  const iter = (dataDiff, depth) => {
    const formatedData = dataDiff.flatMap((item) => {
      switch (item.type) {
        case 'nested':
          return `${getIndent(depth)}  ${item.key}: {\n${iter(item.children, depth + 1)}\n${getIndent(depth)}  }`;

        case 'unchanged':
          return `${getIndent(depth)}  ${item.key}: ${getValue(item.value, depth)}`;

        case 'changed':
          return [
            `${getIndent(depth)}- ${item.key}: ${getValue(item.value1, depth)}`,
            `${getIndent(depth)}+ ${item.key}: ${getValue(item.value2, depth)}`,
          ];

        case 'added':
          return `${getIndent(depth)}+ ${item.key}: ${getValue(item.value, depth)}`;

        case 'deleted':
          return `${getIndent(depth)}- ${item.key}: ${getValue(item.value, depth)}`;

        default:
          return 'Error';
      }
    });
    return formatedData.join('\n');
  };

  return ['{', iter(data, 1), '}'].join('\n');
};

export default makeStylish;
