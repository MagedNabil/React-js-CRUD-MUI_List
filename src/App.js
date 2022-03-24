import './App.css';
import { Suspense } from "react";
import Users from './components/Users'
import Nav from './components/Nav'
import Login from './components/Login'
import User from './components/User'
import Profile from './components/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo, createContext, useState } from "react";



export const UsersContext = createContext();


const data = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 30 },
];


function App() {

  const [userIn, setUserIn] = useState(false);
  const [adminIn, setAdminIn] = useState(false);
  const [users, setUsers] = useState(data);
  const [userId, setUserId] = useState(0);




  const contextValue = useMemo(
    () => ({
      userIn,
      adminIn,
      users,
      userId,
      setUserIn,
      setAdminIn,
      setUsers,
      setUserId
    }),
    [userIn, adminIn, users, userId]
  );



  return (

    <Suspense fallback={<div>Loading.................</div>}>

      <div className='App'>
        <BrowserRouter>
          <UsersContext.Provider value={contextValue}>
            <Nav />
            <Routes>
              <Route path="/" element={<Users />} />
              <Route path="login" element={<Login />} />
              <Route path="user" element={<User />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<div>404 - NotFound</div>} />
            </Routes>
          </UsersContext.Provider>
        </BrowserRouter>
      </div>
    </Suspense>


  );
}

export default App;
