import { describe, expect, it } from 'vitest';
import { tracking } from './tracking';

describe('tracking', () => {
  it('should work', () => {
    expect(tracking()).toEqual('tracking');
  });
});
