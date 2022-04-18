import Header from './Header';
import { screen, render } from '@testing-library/react';

describe('<Header />', () => {
  it('should render evolux logo', () => {
    render(<Header />);

    const header = screen.getByAltText('evolux header');
    expect(header).toBeInTheDocument();
  });

  it('should render user icon', () => {
    render(<Header />);

    const user = screen.getByAltText('user icon');
    expect(user).toBeInTheDocument();
  });
});
