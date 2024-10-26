import { render } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>My button</Button>);
    expect(baseElement).toBeTruthy();
  });
});
