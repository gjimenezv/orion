import { Error, defaultErrorMessage } from './error';

import { render } from '@testing-library/react';

describe('Error', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Error />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a default error message', () => {
    const { getByText } = render(<Error />);

    expect(getByText(defaultErrorMessage)).toBeTruthy();
  });

  it('should have a customized error message', () => {
    const message = 'Something went wrong'
    const { getByText } = render(<Error message={message} />);

    expect(getByText(message)).toBeTruthy();
  });
});
