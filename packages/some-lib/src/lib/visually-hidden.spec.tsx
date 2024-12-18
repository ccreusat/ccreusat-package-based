import { render } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import VisuallyHidden from './visually-hidden';

describe('VisuallyHidden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VisuallyHidden>My avatar</VisuallyHidden>);
    expect(baseElement).toBeTruthy();
  });
});
