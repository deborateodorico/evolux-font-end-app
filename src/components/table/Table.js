import React from 'react';

export default function Table() {
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
        <tr>
          <th scope='row'>1</th>
          <td>+55 (84) 91234-4321</td>
          <td>0.03</td>
          <td>3.40</td>
          <td>U$</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>+55 (84) 91234-4322</td>
          <td>0.03</td>
          <td>3.40</td>
          <td>U$</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>+55 (84) 91234-4323</td>
          <td>0.03</td>
          <td>3.40</td>
          <td>U$</td>
        </tr>
        <tr>
          <th scope='row'>4</th>
          <td>+55 (84) 91234-4324</td>
          <td>0.03</td>
          <td>3.40</td>
          <td>U$</td>
        </tr>
        <tr>
          <th scope='row'>5</th>
          <td>+55 (84) 91234-4325</td>
          <td>0.03</td>
          <td>3.40</td>
          <td>U$</td>
        </tr>
      </tbody>
    </table>
  );
}
