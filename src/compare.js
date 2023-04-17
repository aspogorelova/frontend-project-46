import _ from 'lodash';

const compareObject = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(keys);

  const treeOfDiff = sortedKeys.map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        key, type: 'object', children: compareObject(data1[key], data2[key]),
      };
    }
    if (!_.has(data1, key)) {
      return {
        key, type: 'added', value: data2[key],
      };
    }
    if (!_.has(data2, key)) {
      return {
        key, type: 'deleted', value: data1[key],
      };
    }
    if (data1[key] !== data2[key]) {
      return {
        key, type: 'changed', oldValue: data1[key], newValue: data2[key],
      };
    }
    return {
      key, type: 'unchanged', value: data2[key],
    };
  });
  return treeOfDiff;
};

export default compareObject;
