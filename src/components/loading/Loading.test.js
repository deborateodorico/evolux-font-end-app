import Loading from './Loading';
import { screen, render } from '@testing-library/react';

describe('<Loading />', () => {
  describe('when status is loading', () => {
    it('should render a image', () => {
      render(<Loading />);

      const loading = screen.getByAltText('evolux logo');
      expect(loading).toBeInTheDocument();
    });
  });
});
