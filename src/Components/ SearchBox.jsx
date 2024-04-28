import React from 'react'
import { useState } from 'react';

function SearchBox() {}
    return (
            <input type="text" className="SearchInput" placeholder="Search Your Recents Transactions..."/>

    )
function SearchBox({instateRecords, funcSetData}) {
    const [searchValue, setSearch] = useState("")

function handleSearch(e){
    setSearch(e.target.value)

    const filteredRecords = instateRecords.filter(indata => 
        indata.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    funcSetData(filteredRecords);
}

    return (<>
        <input 
            type="text" 
            className="SearchInput"  
            placeholder="Search Your Recents Transactions..."
            value={searchValue}
            onChange={handleSearch}
        />
    </>
 )
}

export default SearchBox;
  