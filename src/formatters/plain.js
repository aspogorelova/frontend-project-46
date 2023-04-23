const getValue = (value) => {
  if (value === null || value === true || value === false) {
    return value;
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return `'${value}'`;
  }

  return String('[complex value]');
};

const makePlain = (data) => {
  const iter = (node, path) => {
    const name = node.key;
    const currentPath = [...path, name];
    if (node.type === 'object') {
      return node.children.map((item) => iter(item, currentPath));
    }

    switch (node.type) {
      case 'added':
        return `Property '${currentPath.join('.')}' was added with value: ${getValue(node.value)}`;

      case 'deleted':
        return `Property '${currentPath.join('.')}' was removed`;

      case 'changed':
        return `Property '${currentPath.join('.')}' was updated. From ${getValue(node.oldValue)} to ${getValue(node.newValue)}`;

      case 'unchanged':
        return 'unchanged';

      default:
        return 'Error';
    }
  };

  const result = data
    .flatMap((item) => iter(item, []))
    .flatMap((item) => item)
    .filter((item) => item !== 'unchanged');
  return result.join('\n');
};

export default makePlain;
