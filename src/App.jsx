import React, { useState } from 'react';
import Table from './Components/Table';
import TransactionForm from './Components/TransactionForm';
import SearchBox from './Components/SearchBox';
import "./App.css"

function App() {
  const [transactions, setTransactions] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
 
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (<>
   <h1 className="head">Royal Bank of Flatiron</h1>
    <div className="App">
      <SearchBox onSearch={handleSearch} />
      <TransactionForm addTransaction={addTransaction} />
      <Table transactions={filteredTransactions} />

    </div>
    </>
  );
}

export default App;