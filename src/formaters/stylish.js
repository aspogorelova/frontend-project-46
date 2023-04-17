import _ from 'lodash';

const replacer = ' ';
const spacesCount = 4;
const spacesLeft = 2;

const spaceUnchangedKey = (depth) => replacer.repeat(depth * spacesCount);
const spaceChangedKey = (depth) => replacer.repeat(depth * spacesCount - spacesLeft);
const spaceForClosedBracket = (depth) => replacer.repeat(depth * spacesCount - spacesCount);

const getValue = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }

  const entries = Object.entries(value);
  const lines = entries.map(([key, val]) => {
    const line = `${spaceUnchangedKey(depth)}${key}: ${getValue(val, depth + 1)}`;
    return line;
  });
  return ['{', ...lines, `${spaceForClosedBracket(depth)}}`].join('\n');
};

const makeStylish = (data, depth = 1) => {
  const formatedData = data.flatMap((item) => {
    switch (item.type) {
      case 'object':
        return `${spaceUnchangedKey(depth)}${item.key}: ${makeStylish(item.children, depth + 1)}`;

      case 'unchanged':
        return `${spaceUnchangedKey(depth)}${item.key}: ${getValue(item.value, depth + 1)}`;

      case 'changed':
        return [
          `${spaceChangedKey(depth)}- ${item.key}: ${getValue(item.oldValue, depth + 1)}`,
          `${spaceChangedKey(depth)}+ ${item.key}: ${getValue(item.newValue, depth + 1)}`,
        ];

      case 'added':
        return `${spaceChangedKey(depth)}+ ${item.key}: ${getValue(item.value, depth + 1)}`;

      case 'deleted':
        return `${spaceChangedKey(depth)}- ${item.key}: ${getValue(item.value, depth + 1)}`;

      default:
        return 'Unknown format';
    }
  });
  return `{\n${formatedData.join('\n')}\n${spaceForClosedBracket(depth)}}`;
};

export default makeStylish;
