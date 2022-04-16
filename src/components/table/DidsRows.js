import React from 'react';
import styles from './DidsRows.module.scss';
import DeleteDids from '../deleteDids/DeleteDids';
import UpdateDids from '../UpdateDids/UpdateDids';

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
        <td className={styles['delete-update-area']}>
          <DeleteDids id={id} />
          <UpdateDids
            value={value}
            monthyPrice={monthyPrice}
            setupPrice={setupPrice}
            currency={currency}
            id={id}
          />
        </td>
      </tr>
    </>
  );
}
