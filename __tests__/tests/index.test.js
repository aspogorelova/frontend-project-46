import compareObject from "../../src/index.js";
import { expect, test } from '@jest/globals';

test('compare json files', () => {
    const lines = [
      '- follow: false', 
      '  host: hexlet.io',
      '- proxy: 123.234.53.22',
      '- timeout: 50',
      '+ timeout: 20',
      '+ verbose: true'
    ]
    const result = ['{', ...lines, '}'].join('\n');
    expect(compareObject('file1.json', 'file2.json')).toEqual(result);
});