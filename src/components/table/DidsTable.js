import React from 'react';

export default function DidsTable({ data }) {
  return (
    <table className='table'>
      <thead>
        <tr className='table-info'>
          <th scope='col'>#</th>
          <th scope='col'>Number Available</th>
          <th scope='col'>Monthy Price</th>
          <th scope='col'>Setup Price</th>
          <th scope='col'>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              <th scope='row'>{item.id}</th>
              <td>{item.value}</td>
              <td>{item.monthyPrice}</td>
              <td>{item.setupPrice}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
