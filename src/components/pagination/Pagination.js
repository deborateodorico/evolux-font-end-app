import React from 'react';
import style from './Pagination.module.scss';

export default function Pagination({
  page,
  list,
  quantityPerPage,
  goToInitialPage,
  goToFinalPage,
  goToPrevPage,
  goToNextPage,
}) {
  const disabledPrevAndFirstButton = () => {
    return !page;
  };
  const disabledNextAndLastButton = () => {
    return list.length === (page + 1) * quantityPerPage;
  };

  return (
    <div className={style['container-pagination']}>
      <div
        className='btn-group'
        role='group'
        aria-label='Pagination Control Buttons'
      >
        <button
          type='button'
          onClick={goToInitialPage}
          disabled={disabledPrevAndFirstButton()}
          className='btn btn-outline-secondary'
        >
          First Page
        </button>
        <button
          disabled={disabledPrevAndFirstButton()}
          type='button'
          onClick={goToPrevPage}
          className='btn btn-outline-secondary'
        >
          Prev
        </button>
        <button
          type='button'
          disabled={disabledNextAndLastButton()}
          onClick={goToNextPage}
          className='btn btn-outline-secondary'
        >
          Next
        </button>
        <button
          type='button'
          onClick={goToFinalPage}
          disabled={disabledNextAndLastButton()}
          className='btn btn-outline-secondary'
        >
          Last Page
        </button>
      </div>
    </div>
  );
}
