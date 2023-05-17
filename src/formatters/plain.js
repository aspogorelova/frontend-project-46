const getValue = (value) => {
  if (value === null || value === true || value === false) {
    return value;
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return String('[complex value]');
};

const makePlain = (data) => {
  const iter = (node, path) => {
    const name = node.key;
    const currentPath = [...path, name];

    switch (node.type) {
      case 'nested':
        return node.children.map((item) => iter(item, currentPath));

      case 'added':
        return `Property '${currentPath.join('.')}' was added with value: ${getValue(node.value)}`;

      case 'deleted':
        return `Property '${currentPath.join('.')}' was removed`;

      case 'changed':
        return `Property '${currentPath.join('.')}' was updated. From ${getValue(node.value1)} to ${getValue(node.value2)}`;

      case 'unchanged':
        return null;

      default:
        throw new Error(`Unknown operation: '${node.type}'`);
    }
  };

  const result = data
    .flatMap((item) => iter(item, []))
    .flatMap((item) => item)
    .filter((item) => item !== null);
  return result.join('\n');
};

export default makePlain;
