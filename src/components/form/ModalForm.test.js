import ModalForm from './ModalForm';
import { screen, render } from '@testing-library/react';
import { createStore } from 'redux';
import didsReducer from './../../redux/didsSlice';
import { Provider } from 'react-redux';
import { currencies } from './currencies';

function renderWithRedux(
  component,
  { initialState, store = createStore(didsReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

describe('<ModalForm />', () => {
  it('should render a number available input', () => {
    renderWithRedux(<ModalForm />);

    const NumberAvailableLabel = screen.getByLabelText('Number Available:');
    expect(NumberAvailableLabel).toBeInTheDocument();
  });

  it('should render a monthy price input', () => {
    renderWithRedux(<ModalForm />);

    const monthyPriceLabel = screen.getByLabelText('Monthy Price:');
    expect(monthyPriceLabel).toBeInTheDocument();
  });

  it('should render a setup price input', () => {
    renderWithRedux(<ModalForm />);

    const setupPriceLabel = screen.getByLabelText('Setup Price:');
    expect(setupPriceLabel).toBeInTheDocument();
  });

  it('should render a currency input', () => {
    renderWithRedux(<ModalForm />);

    const currencyLabel = screen.getByLabelText('Currency:');
    expect(currencyLabel).toBeInTheDocument();
  });

  it('should render all currency options', () => {
    renderWithRedux(<ModalForm />);

    currencies.forEach((currency) => {
      expect(screen.getByText(currency)).toBeInTheDocument();
    });
  });

  it('should render a add new did button', () => {
    renderWithRedux(<ModalForm />);

    const addDidButton = screen.getByRole('button');
    expect(addDidButton).toBeInTheDocument();
  });
});
