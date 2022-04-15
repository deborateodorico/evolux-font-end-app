import React from 'react';
import styles from './DidsRows.module.scss';
import DeleteDids from '../deleteDids/DeleteDids';

export default function DidsRows({
  id,
  value,
  monthyPrice,
  setupPrice,
  currency,
}) {
  return (
    <>
      <tr className={styles['dids-row']}>
        <td>{id}</td>
        <td>{value}</td>
        <td>{monthyPrice}</td>
        <td>{setupPrice}</td>
        <td>{currency}</td>
        <td>
          <DeleteDids id={id} />
        </td>
      </tr>
    </>
  );
}
