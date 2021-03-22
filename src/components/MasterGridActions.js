import React, { useState, useEffect, useCallback, useMemo } from "react"; 
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    useRouteMatch,
    useHistory,
    // useParams
  } from "react-router-dom";

import axios from "axios";
import DataTable from "react-data-table-component";
import Swal from 'sweetalert2'
import { createAlert } from "../service/appService"

//component load
import MasterGridForm from "./MasterGridForm";

const removeItem = (array, item) => {
    const newArray = array.slice();
    newArray.splice(newArray.findIndex(a => a === item), 1); 
    return newArray;
};

const MasterGridActions = () => {
    let match = useRouteMatch();
    const history = useHistory();
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    // const [deleted, setDeleted] = useState([]);
  
    const fetchUsers = async (page, size = perPage) => {
      setLoading(true); 
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}&per_page=${size}&delay=1`
      );
  
      setData(response.data.data);
      setTotalRows(response.data.total);
      setLoading(false);
    };
  
    useEffect(() => {
      fetchUsers(1);  
    }, []);

    const handleDelete = useCallback(
        row => async () => {   
            let action = await createAlert().then((result, agree) => {
                if (result.isConfirmed) {
                    axios.delete(`https://reqres.in/api/users/${row.id}`); 
                    return true;
                }else{
                   return false;
                }
            })

            if(action){
                const response = await axios.get( `https://reqres.in/api/users?page=${currentPage}&per_page=${perPage}`);                
                setData(removeItem(response.data.data, row));
                setTotalRows(totalRows - 1);
            }
            
        },
        [currentPage, perPage, totalRows]
    );
 
    const handleEdit = useCallback(
        row => async () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "to edit this Item",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, edit it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    history.push(`${match.path}/:${row.id}/edit`);
                }
              })
        }
    );

    const handleView = useCallback(
        row => async () => {
            history.push(`${match.path}/:${row.id}/view`);
        }
    );
    
    const columns = useMemo(
        () => [
            {
                name: "First Name",
                selector: "first_name",
                sortable: true
            },
            {
                name: "Last Name",
                selector: "last_name",
                sortable: true
            },
            {
                name: "Email",
                selector: "email",
                sortable: true
            },
            {
                // eslint-disable-next-line react/button-has-type
                cell: row => <div><button onClick={handleView(row)}>View Details</button> <button onClick={handleEdit(row)}>Edit</button> <button onClick={handleDelete(row)}>Delete</button> </div>
            }
        ],
        [handleDelete, handleEdit]
    );

    const handlePageChange = page => {
        fetchUsers(page);
        setCurrentPage(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        fetchUsers(page, newPerPage);
        setPerPage(newPerPage);
    };

    return (
        <Switch>
            <Route path={`${match.path}/:topicId/edit`}>
                <MasterGridForm type="edit"/>
            </Route>
            <Route path={`${match.path}/new`}>
                <MasterGridForm type="new"/>
            </Route>
            <Route path={`${match.path}/:topicId`}>
                <MasterGridForm type="view"/>
            </Route> 
            <Route path={match.path}>
            <DataTable
                title="Users"
                columns={columns}
                data={data}
                progressPending={loading}
                pagination
                paginationServer
                paginationTotalRows={totalRows}
                paginationDefaultPage={currentPage}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
                selectableRows
                onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
            />
        </Route>
      </Switch> 
    );
}

export default MasterGridActions;

 