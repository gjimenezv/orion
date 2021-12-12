import { Spinner, defaultLoadingMessage } from './spinner';

import { render } from '@testing-library/react';

describe('Error', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Spinner />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a default loading message', () => {
    const { getByText } = render(<Spinner />);

    expect(getByText(defaultLoadingMessage)).toBeTruthy();
  });

  it('should have a customized error message', () => {
    const message = 'Launching rockets ...';
    const { getByText } = render(<Spinner message={message} />);

    expect(getByText(message)).toBeTruthy();
  });
});
