import { describe, expect, it } from 'vitest';
import { http } from './http';

describe('http', () => {
  it('should work', () => {
    expect(http()).toEqual('http');
  });
});
