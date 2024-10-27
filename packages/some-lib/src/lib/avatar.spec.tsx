import { render } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import Avatar from './avatar';

describe('Avatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Avatar>My avatar</Avatar>);
    expect(baseElement).toBeTruthy();
  });
});
