import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './DidsTable.module.scss';
import { selectDids, selectStatus } from '../../redux/didsSlice';
import Loading from '../loading/Loading';
import Pagination from '../pagination/Pagination';

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

  return (
    <>
      {status === 'success' && (
        <>
          <Table className='table' responsive>
            <thead>
              <tr className='table-secondary'>
                <th scope='col'>#</th>
                <th scope='col'>Number Available</th>
                <th scope='col'>Monthy Price</th>
                <th scope='col'>Setup Price</th>
                <th scope='col'>Currency</th>
              </tr>
            </thead>
            <tbody className='table'>
              {paginatedList.map((item) => {
                return (
                  <tr key={item.id} className={styles['dids-row']}>
                    <td>{item.id}</td>
                    <td>{item.value}</td>
                    <td>{item.monthyPrice}</td>
                    <td>{item.setupPrice}</td>
                    <td>{item.currency}</td>
                  </tr>
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
        </>
      )}
      {status === 'loading' && <Loading />}
    </>
  );
}
