import { it, expect, describe } from 'vitest';
import { runAfter } from './index.js';

describe('runAfter', () => {
  it.each([1, 'str', { hello: 1 }, [], null, undefined])(
    'should return the result of the callback',
    async value => {
      const res = await runAfter(() => value, 10);

      expect(res).toStrictEqual(value);
    }
  );
});
