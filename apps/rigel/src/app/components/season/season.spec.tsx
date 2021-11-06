import { Season, SeasonName, messageBySeason } from './season';

import { render } from '@testing-library/react';

describe('Season', () => {
  const northLatitude = 37.774929;
  const southLatitude = -23.55052;
  const months = [...Array(12).keys()]

  it('should render summer season in south latitude on November', () => {
    const { getByText } = render(<Season lat={southLatitude} month={months[10]} />);

    expect(getByText(messageBySeason[SeasonName.summer].text)).toBeTruthy();
  });
  it('should render winter season in south latitude on April', () => {
    const { getByText } = render(<Season lat={southLatitude} month={months[3]} />);

    expect(getByText(messageBySeason[SeasonName.winter].text)).toBeTruthy();
  });

  it('should render summer season in north latitude on April', () => {
    const { getByText } = render(<Season lat={northLatitude} month={months[3]} />);

    expect(getByText(messageBySeason[SeasonName.summer].text)).toBeTruthy();
  });

  it('should render winter season in north latitude on November', () => {
    const { getByText } = render(<Season lat={northLatitude} month={months[10]} />);

    expect(getByText(messageBySeason[SeasonName.winter].text)).toBeTruthy();
  });

  it('should render sun icons for summer', () => {
    const { queryByTestId } = render(<Season lat={northLatitude} month={months[3]} />);

    expect(queryByTestId(`${messageBySeason[SeasonName.summer].iconName}-left`)).toBeDefined();
    expect(queryByTestId(`${messageBySeason[SeasonName.summer].iconName}-right`)).toBeDefined();
  });

  it('should render snowflake icons for winter', () => {
    const { queryByTestId } = render(<Season lat={northLatitude} month={months[3]} />);

    expect(queryByTestId(`${messageBySeason[SeasonName.winter].iconName}-left`)).toBeDefined();
    expect(queryByTestId(`${messageBySeason[SeasonName.winter].iconName}-right`)).toBeDefined();
  });
});
