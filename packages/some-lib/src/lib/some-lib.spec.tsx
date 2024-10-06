import { render } from '@testing-library/react';

import SomeLib from './some-lib';

describe('SomeLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SomeLib />);
    expect(baseElement).toBeTruthy();
  });
});
