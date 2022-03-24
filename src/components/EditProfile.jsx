import * as React from 'react';
import { useState, useContext } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/material";
import { UsersContext } from '../App'
import EditIcon from '@mui/icons-material/Edit';
// import PropTypes from "prop-types";


const EditUser = (props) => {
    const { users, setUsers } = useContext(UsersContext);

    const select = props.select;
    // console.log(select[0]);


    // console.log(users);
    const [open, setOpen] = useState(false);
    const [newUserDetails, setNewUserDetails] = useState(users.find(element => element.id === select[0]))
    // console.log(newUserDetails);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUserDetails((current) => ({ ...current, [name]: value }));
        // console.log(newUserDetails);
    };

    const submitData = () => {
        setNewUserDetails(newUserDetails);
        setNewUserDetails(newUserDetails.age = Number(newUserDetails.age));
        setNewUserDetails(newUserDetails.id = Number(newUserDetails.id));
        // console.log(newUserDetails);
        const ref = [...users]
        const index = ref.findIndex((obj => obj.id === select[0]));
        // console.log(index);
        ref[index].id = newUserDetails.id
        ref[index].firstName = newUserDetails.firstName
        ref[index].lastName = newUserDetails.lastName
        ref[index].age = newUserDetails.age
        // console.log(ref)
        setUsers(ref)
        setOpen(false)


    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" startIcon={<EditIcon />} onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit</DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <div>
                            <TextField
                                defaultValue={newUserDetails ? newUserDetails.id : '0'}
                                disabled
                                id="filled-disabled"
                                label="Disabled"
                                variant="filled"
                                name="id"
                                type="text"
                            />
                            <TextField
                                required
                                defaultValue={newUserDetails ? newUserDetails.firstName : 'test'}
                                id="filled-required"
                                label="Last Name"
                                name="lastName"
                                type="text"
                                variant="filled"
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                defaultValue={newUserDetails ? newUserDetails.lastName : 'test'}

                                id="filled-required"
                                label="First Name"
                                name="firstName"
                                type="text"
                                variant="filled"
                                onChange={handleChange}
                            />
                            <TextField
                                id="filled-required-age"
                                defaultValue={newUserDetails ? newUserDetails.age : '0'}
                                required
                                name="age"
                                label="Age"
                                type="text"
                                variant="filled"
                                onChange={handleChange}

                            />
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>exit</Button>
                    <Button onClick={submitData}>Save</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}


export default EditUser;
