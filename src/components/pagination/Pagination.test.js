import Pagination from './Pagination';
import { screen, render, fireEvent } from '@testing-library/react';

describe('<Pagination />', () => {
  const renderPaginationWithProps = (props = {}) => {
    render(
      <Pagination
        list={[]}
        page={0}
        quantityPerPage={10}
        goToInitialPage={jest.fn()}
        goToFinalPage={jest.fn()}
        goToPrevPage={jest.fn()}
        goToNextPage={jest.fn()}
        {...props}
      />
    );
  };

  it('should render a first page button', () => {
    renderPaginationWithProps();
    const firstPageButton = screen.getByRole('button', { name: 'First Page' });
    expect(firstPageButton).toBeInTheDocument();
  });

  it('should render a last page button', () => {
    renderPaginationWithProps();

    const lastPageButton = screen.getByRole('button', { name: 'Last Page' });
    expect(lastPageButton).toBeInTheDocument();
  });

  it('should render a prev page button', () => {
    renderPaginationWithProps();

    const prevPageButton = screen.getByRole('button', { name: 'Prev' });
    expect(prevPageButton).toBeInTheDocument();
  });

  it('should render a next page button', () => {
    renderPaginationWithProps();

    const nextPageButton = screen.getByRole('button', { name: 'Next' });
    expect(nextPageButton).toBeInTheDocument();
  });

  describe('when user click on first page button', () => {
    it('should call goToInitialPage and have the button enabled', () => {
      const mockGoToInitialPage = jest.fn();
      renderPaginationWithProps({
        goToInitialPage: mockGoToInitialPage,
        page: 2,
      });

      const firstPageButton = screen.getByRole('button', {
        name: 'First Page',
      });

      fireEvent.click(firstPageButton);

      expect(firstPageButton).toBeInTheDocument();
      expect(firstPageButton).toBeEnabled();
      expect(mockGoToInitialPage).toHaveBeenCalledTimes(1);
    });

    it('should not call goToInitialPage and have the button disabled', () => {
      const mockInitialPage = jest.fn();
      renderPaginationWithProps({
        goToInitialPage: mockInitialPage,
        page: 0,
      });

      const firstPageButton = screen.getByRole('button', {
        name: 'First Page',
      });

      fireEvent.click(firstPageButton);

      expect(firstPageButton).toBeDisabled();
      expect(mockInitialPage).not.toHaveBeenCalled();
    });
  });

  describe('when user click on prev page button', () => {
    it('should call goToPrevPage and have the button enabled', () => {
      const mockGoToPrevPage = jest.fn();
      renderPaginationWithProps({
        goToPrevPage: mockGoToPrevPage,
        page: 2,
      });

      const prevButton = screen.getByRole('button', {
        name: 'Prev',
      });

      fireEvent.click(prevButton);

      expect(prevButton).toBeInTheDocument();
      expect(prevButton).toBeEnabled();
      expect(mockGoToPrevPage).toHaveBeenCalledTimes(1);
    });

    it('should not call goToPrevPage and have the button disabled', () => {
      const mockGoToPrevPage = jest.fn();
      renderPaginationWithProps({
        goToPrevPage: mockGoToPrevPage,
        page: 0,
      });

      const prevButton = screen.getByRole('button', {
        name: 'Prev',
      });

      fireEvent.click(prevButton);

      expect(prevButton).toBeDisabled();
      expect(mockGoToPrevPage).not.toHaveBeenCalled();
    });
  });

  describe('when user click on next page button', () => {
    it('should call goToNextPage and have the button enabled', () => {
      const mockGoToNextPage = jest.fn();
      renderPaginationWithProps({
        goToNextPage: mockGoToNextPage,
        page: 2,
      });

      const nextButton = screen.getByRole('button', {
        name: 'Next',
      });

      fireEvent.click(nextButton);

      expect(nextButton).toBeInTheDocument();
      expect(nextButton).toBeEnabled();
      expect(mockGoToNextPage).toHaveBeenCalledTimes(1);
    });

    it('should not call goToNextPage and have the button disabled', () => {
      const mockGoToNextPage = jest.fn();
      renderPaginationWithProps({
        goToNextPage: mockGoToNextPage,
        page: 0,
        quantityPerPage: 3,
        list: [{}, {}, {}],
      });

      const nextButton = screen.getByRole('button', {
        name: 'Next',
      });

      fireEvent.click(nextButton);

      expect(nextButton).toBeDisabled();
      expect(mockGoToNextPage).not.toHaveBeenCalled();
    });
  });

  describe('when user click on last page button', () => {
    it('should call goToFinalPage and have the button enabled', () => {
      const mockgoToFinalPage = jest.fn();
      renderPaginationWithProps({
        goToFinalPage: mockgoToFinalPage,
        page: 2,
      });

      const lastPageButton = screen.getByRole('button', {
        name: 'Last Page',
      });

      fireEvent.click(lastPageButton);

      expect(lastPageButton).toBeInTheDocument();
      expect(lastPageButton).toBeEnabled();
      expect(mockgoToFinalPage).toHaveBeenCalledTimes(1);
    });

    it('should not call goToFinalPage and have the button disabled', () => {
      const mockgoToFinalPage = jest.fn();
      renderPaginationWithProps({
        goToFinalPage: mockgoToFinalPage,
        page: 0,
        quantityPerPage: 3,
        list: [{}, {}, {}],
      });

      const lastPageButton = screen.getByRole('button', {
        name: 'Last Page',
      });

      fireEvent.click(lastPageButton);

      expect(lastPageButton).toBeDisabled();
      expect(mockgoToFinalPage).not.toHaveBeenCalled();
    });
  });
});
