import { describe, expect, it } from 'vitest';
import { client } from './client';

describe('client', () => {
  it('should work', () => {
    expect(client()).toEqual('client');
  });
});
