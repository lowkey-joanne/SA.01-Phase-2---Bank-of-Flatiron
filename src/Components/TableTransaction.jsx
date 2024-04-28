import React from 'react';
import TransactionRow from './TransactionRow';
import { useState } from 'react';
import AddTransaction from './AddTransaction';
import SearchBox from './SearchBox';

function TableTransaction({records}) {
  const [stateRecords, setStateRecords] = useState(records);
  const rows = stateRecords.map(data => (
     < TransactionRow 
        key={data.id}
            date={data.date} 
            description={data.description}
            category={data.category}
            amount={data.amount}
            />)

    )
    return (<>
      <SearchBox instateRecords={stateRecords} funcSetData={setStateRecords} />
      <AddTransaction funcSetData={setStateRecords} />
        <table>
          <thead>
            <tr>
            <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        </>
      );
}

export default TableTransaction