import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectDids, selectStatus } from '../../redux/didsSlice';
import Loading from '../loading/Loading';
import Pagination from '../pagination/Pagination';
import AddDidsButton from '../addDids/AddDidsButton';
import DidsRows from './DidsRows';
import styles from './DidsTable.module.scss';
const quantityPerPage = 10;

export default function DidsTable() {
  const list = useSelector(selectDids);
  const [page, setPage] = useState(0);

  const status = useSelector(selectStatus);

  const pagination = () => {
    if (page === 0) {
      return list.slice(0, quantityPerPage);
    } else {
      const newPage = page * quantityPerPage;

      return list.slice(newPage, newPage + quantityPerPage);
    }
  };

  const paginatedList = pagination();

  const goToInitialPage = () => {
    setPage(0);
  };

  const goToFinalPage = () => {
    setPage(list.length / quantityPerPage - 1);
  };

  const goToPrevPage = () => {
    setPage(page - 1);
  };
  const goToNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (list.length !== 0) {
      localStorage.setItem('dids-data', JSON.stringify(list));
    }
  }, [list]);

  return (
    <>
      {status === 'success' && (
        <div className={styles.container}>
          <AddDidsButton />

          <Table className={`table ${styles.table}`} responsive>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Number Available</th>
                <th scope='col'>Monthy Price</th>
                <th scope='col'>Setup Price</th>
                <th scope='col'>Currency</th>
                <th scope='col' colSpan={2}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='table'>
              {paginatedList.map((item) => {
                return (
                  <DidsRows
                    key={item.id}
                    id={item.id}
                    value={item.value}
                    monthyPrice={item.monthyPrice}
                    setupPrice={item.setupPrice}
                    currency={item.currency}
                    row={item}
                  />
                );
              })}
            </tbody>
          </Table>

          <Pagination
            list={list}
            page={page}
            quantityPerPage={quantityPerPage}
            goToInitialPage={goToInitialPage}
            goToFinalPage={goToFinalPage}
            goToPrevPage={goToPrevPage}
            goToNextPage={goToNextPage}
          />
        </div>
      )}
      {status === 'loading' && <Loading />}
    </>
  );
}
