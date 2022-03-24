import * as React from 'react';
import { useState, useContext } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/material";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { UsersContext } from '../App'


export default function AddUser() {

    const { users, setUsers } = useContext(UsersContext);


    const [open, setOpen] = useState(false);

    const [newUserDetails, setNewUserDetails] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUserDetails((current) => ({ ...current, [name]: value }));
        // console.log(newUserDetails);
    };

    const submitData = () => {
        setNewUserDetails(newUserDetails);
        setNewUserDetails(newUserDetails.age = Number(newUserDetails.age));
        setNewUserDetails(newUserDetails.id = Number(newUserDetails.id));
        const ref = [...users]
        ref.push(newUserDetails)
        setUsers(ref)
        // console.log(ref);
        setOpen(false);


    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                onClick={handleClickOpen}
                variant="outlined"
                color="primary"
                startIcon={<PersonAddIcon />}
            >
                New User
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new user</DialogTitle>
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
                                id="filled-required-id"
                                required
                                name="id"
                                label="ID"
                                type="text"
                                variant="filled"
                                onChange={handleChange}

                            />
                            <TextField
                                required
                                id="filled-required"
                                label="Last Name"
                                name="lastName"
                                type="text"
                                variant="filled"
                                onChange={handleChange}
                            />
                            <TextField
                                required
                                id="filled-required"
                                label="First Name"
                                name="firstName"
                                type="text"
                                variant="filled"
                                onChange={handleChange}
                            />
                            <TextField
                                id="filled-required-age"
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
                    <Button onClick={submitData}>Add</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
