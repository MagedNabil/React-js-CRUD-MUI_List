import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from 'react-router';
import { UsersContext } from '../App'





export default function Nav() {


  let navigate = useNavigate();
  function handleClick() {
    navigate('/')
  }

  const { userIn, adminIn, setAdminIn, setUserIn } = useContext(UsersContext);


  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "EXIT") {
      setAdminIn(false);
      setUserIn(false);
      handleClick();
    }

  };


  return (
    <BottomNavigation showLabels sx={{ width: '100%' }} value={value} onChange={handleChange}>

      <BottomNavigationAction
        component={Link}
        to="/"
        label="ALl Users"
        value="Home"
        icon={<HomeIcon />}
      />


      {userIn ?
        <BottomNavigationAction
          component={Link}
          to="/profile"
          label="profile"
          value="profile"
          icon={<AccountCircleIcon />}
        />
        : !adminIn ?
          <BottomNavigationAction
            component={Link}
            to="/login"
            label="Log IN"
            value="Log IN"
            icon={<LoginIcon />}
          /> : <div></div>
      }
      {userIn || adminIn ?
        <BottomNavigationAction
          label="EXIT"
          value="EXIT"
          icon={<LogoutIcon />}
        /> : <div></div>
      }
    </BottomNavigation>
  );
}
