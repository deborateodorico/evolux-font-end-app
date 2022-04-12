import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './DidsTable.module.scss';
import { selectDids, selectStatus } from '../../redux/didsSlice';
import Loading from '../loading/Loading';

export default function DidsTable() {
  const list = useSelector(selectDids);

  const status = useSelector(selectStatus);

  return (
    <>
      {status === 'success' && (
        <Table className='table' responsive>
          <thead>
            <tr className='table-warning'>
              <th scope='col'>#</th>
              <th scope='col'>Number Available</th>
              <th scope='col'>Monthy Price</th>
              <th scope='col'>Setup Price</th>
              <th scope='col'>Currency</th>
            </tr>
          </thead>
          <tbody className='table'>
            {list.map((item) => {
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
      )}
      {status === 'loading' && <Loading />}
    </>
  );
}
