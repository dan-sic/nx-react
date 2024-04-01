import { render } from '@testing-library/react';

import ProfileFeature from './profile-feature';

describe('ProfileFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileFeature />);
    expect(baseElement).toBeTruthy();
  });
});
