import { render } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import SomeLib from './some-lib';

describe('SomeLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SomeLib />);
    expect(baseElement).toBeTruthy();
  });
});
