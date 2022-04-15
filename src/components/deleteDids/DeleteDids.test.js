import { screen, render } from '@testing-library/react';
import { createStore } from 'redux';
import didsReducer from './../../redux/didsSlice';
import { Provider } from 'react-redux';
import DeleteDids from './DeleteDids';

function renderWithRedux(
  component,
  { initialState, store = createStore(didsReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

describe('<DeleteDids />', () => {
  it('should render delete did button', () => {
    renderWithRedux(<DeleteDids />);

    const deleteDidButton = screen.getByRole('button', { name: 'Delete' });
    expect(deleteDidButton).toBeInTheDocument();
  });
});
