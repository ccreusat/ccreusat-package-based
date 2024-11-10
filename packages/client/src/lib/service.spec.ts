import { describe, expect, it } from 'vitest';
import { service } from './service';

describe('service', () => {
  it('should work', () => {
    expect(service()).toEqual('service');
  });
});
