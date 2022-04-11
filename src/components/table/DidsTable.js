import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './DidsTable.module.scss';
import { selectDids } from '../../redux/didsSlice';

export default function DidsTable() {
  const didsList = useSelector(selectDids);

  return (
    <Table className='table' responsive>
      <thead>
        <tr className='table-info'>
          <th scope='col'>#</th>
          <th scope='col'>Number Available</th>
          <th scope='col'>Monthy Price</th>
          <th scope='col'>Setup Price</th>
          <th scope='col'>Currency</th>
        </tr>
      </thead>
      <tbody className='table'>
        {didsList.dids.didsList.map((item) => {
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
  );
}
