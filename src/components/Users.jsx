import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AddUser from './AddUser'
import EditUser from './EditProfile'
import { useNavigate } from 'react-router';
import { useState, useContext } from "react";
import Button from '@mui/material/Button';
import { UsersContext } from '../App'
import DeleteIcon from '@mui/icons-material/Delete';






const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },

];

export default function Users() {

    const [selected, setSelected] = useState([])
    // console.log(selected)
    const { adminIn, users, setUsers, setUserId, userIn } = useContext(UsersContext);

    let navigate = useNavigate();

    const handleClick = (e) => {
        setUserId(e.id)
        navigate('/user')
    }


    const deleteSelected = () => {
        let ref = users;
        for (let index = 0; index < selected.length; index++) {
            ref = arrayRemove(ref, selected[index])
        }
        // console.log(ref);
        setUsers(ref)
    }

    function arrayRemove(arr, value) {

        return arr.filter(function (ele) {
            // console.log(value);
            return ele.id !== value;
        });
    }



    return (

        <div style={{ height: 500, width: 700, margin: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#E0E0E0' }}>

                {adminIn ? <AddUser /> : <span>Users</span>}
                {adminIn && selected.length === 1 ? <EditUser select={selected} /> : adminIn && selected.length === 0 ? <span>Select One To Edit</span> : <span> </span>}
                {adminIn ? <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={deleteSelected}>
                    Delete Selected
                </Button>
                    : ''}
            </div>
            {adminIn || userIn ?

                <DataGrid
                    onRowClick={handleClick}
                    rows={users}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={itm => setSelected(itm)}
                />
                : <span> You Need To Log In First </span>}
        </div>
    );
}
