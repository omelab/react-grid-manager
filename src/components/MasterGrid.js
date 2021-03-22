/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    // useRouteMatch,
    useParams
} from "react-router-dom";  

//import axios
import axios from 'axios';

//table column
const columns = [
  {
    name: 'Avatar',
    cell: row => <img height="30px" width="30px" alt={row.first_name} src={row.avatar} />,
  },
  {
    name: 'First Name',
    sortable: true,
    selector: 'first_name',
  },
  {
    name: 'Last Name',
    sortable: true,
    selector: 'last_name',
  },
  {
    name: 'Email',
    selector: 'email',
    cell: row => <div data-tag="allowRowEvents"><div style={{ fontWeight:700 }}>{row.first_name}</div>{row.email}</div>,
  }
];

function MasterGrid() {
  const { slug } = useParams();
  const [users, setUsers] = useState({});
  const [page, setPage] = useState(1);
  const countPerPage = 3; 
   
  // set the initial state 

  const getUserList = () => {
    axios.get(`https://reqres.in/api/${slug}?page=${page}&per_page=${countPerPage}&delay=1`).then(res => {
      setUsers(res.data);
    }).catch(err => {
      setUsers({});
    });
  }

  useEffect(() => {
    getUserList();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, page, countPerPage] );

  const rowSelected = (state) =>{
    console.log('Selected Rows Change: ', state.selectedRows);
  }

  const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', state.selectedRows);
  };

 
  return (
    <div className="App">
      <h3>Server side pagination in DataTable - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
      <DataTable
        title="Employees"
        columns={columns}
        data={users.data}
        selectableRows
        Clicked
        highlightOnHover
        pagination
        paginationServer
        paginationTotalRows={users.total}
        paginationPerPage={countPerPage}
        paginationComponentOptions={{
          noRowsPerPage: true
        }}
        onChangePage={page => setPage(page)} 
        Selected={rowSelected}
        onSelectedRowsChange={handleChange}
      />
    </div>
  );
}

export default MasterGrid;

 