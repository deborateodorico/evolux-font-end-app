import DidsTable from './DidsTable';
import { screen, render } from '@testing-library/react';

const props = {
  data: [
    {
      id: 1,
      value: '+55 84 91234-4321',
      monthyPrice: '0.03',
      setupPrice: '3.40',
      currency: 'U$',
    },
    {
      id: 2,
      value: '+55 84 91234-4322',
      monthyPrice: '0.04',
      setupPrice: '3.50',
      currency: 'BRL',
    },
  ],
};

describe('<DidsTable />', () => {
  it('should render all column header informations', () => {
    render(<DidsTable {...props} />);

    const columnHeaderId = screen.getByRole('columnheader', { name: '#' });
    const columnHeaderValue = screen.getByRole('columnheader', {
      name: 'Number Available',
    });
    expect(columnHeaderId).toBeInTheDocument();
    expect(columnHeaderValue).toBeInTheDocument();
  });

  it('should render a table', () => {
    render(<DidsTable {...props} />);

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('should render rows informations', () => {
    render(<DidsTable {...props} />);

    props.data.forEach((did) => {
      const didValues = Object.values(did);

      didValues.forEach((value) => {
        const cell = screen.getByRole('cell', {
          name: value,
        });

        expect(cell).toBeInTheDocument();
      });
    });
  });
});
