import DidsTable from './DidsTable';
import { screen, render } from '@testing-library/react';
import { createStore } from 'redux';
import didsReducer from './../../redux/didsSlice';
import { Provider } from 'react-redux';

function renderWithRedux(
  component,
  { initialState, store = createStore(didsReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

describe('<DidsTable />', () => {
  describe('when status is loading', () => {
    it('should render a loading', () => {
      renderWithRedux(<DidsTable />, {
        initialState: {
          dids: {
            list: [],
            status: 'loading',
          },
        },
      });

      const loading = screen.getByRole('progressbar');
      expect(loading).toBeInTheDocument();
    });
  });

  describe('when status is success', () => {
    it('should render all column header informations', () => {
      renderWithRedux(<DidsTable />, {
        initialState: { dids: { list: [], status: 'success' } },
      });

      const columnHeaderId = screen.getByRole('columnheader', { name: '#' });
      const columnHeaderValue = screen.getByRole('columnheader', {
        name: 'Number Available',
      });
      const columnHeaderMonthyPrice = screen.getByRole('columnheader', {
        name: 'Monthy Price',
      });
      const columnHeaderSetupPrice = screen.getByRole('columnheader', {
        name: 'Setup Price',
      });
      const columnHeaderCurrency = screen.getByRole('columnheader', {
        name: 'Currency',
      });
      const columnDeleteDid = screen.getByRole('columnheader', {
        name: 'Delete Did',
      });

      expect(columnHeaderId).toBeInTheDocument();
      expect(columnHeaderValue).toBeInTheDocument();
      expect(columnHeaderMonthyPrice).toBeInTheDocument();
      expect(columnHeaderSetupPrice).toBeInTheDocument();
      expect(columnHeaderCurrency).toBeInTheDocument();
      expect(columnDeleteDid).toBeInTheDocument();
    });

    it('should render a table', () => {
      renderWithRedux(<DidsTable />, {
        initialState: {
          dids: {
            list: [],
            status: 'success',
          },
        },
      });

      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();
    });

    it('should render rows informations', () => {
      const list = [
        {
          id: 1,
          value: '+55 84 91234-4321',
          monthyPrice: '0.99',
          setupPrice: '7.61',
          currency: 'U$',
        },
      ];

      renderWithRedux(<DidsTable />, {
        initialState: {
          dids: {
            list,
            status: 'success',
          },
        },
      });

      list.forEach((did) => {
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
});
