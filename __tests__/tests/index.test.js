import { expect, test } from '@jest/globals';
import compareObject from '../../src/index.js';

test('compare json files', () => {
  const lines = [
    '    host: hexlet.io',
    '  - timeout: 50',
    '  + timeout: 20',
    '  - proxy: 123.234.53.22',
    '  - follow: false',
    '  + verbose: true',
  ];

  const result = ['{', ...lines, '}'].join('\n');
  expect(compareObject('file1.json', 'file2.json')).toEqual(result);
});
