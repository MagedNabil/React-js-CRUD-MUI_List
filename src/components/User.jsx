import { useContext, React } from 'react';
import { UsersContext } from '../App'


const User = () => {


  const { userId, users } = useContext(UsersContext);

  function finddata(arr, value) {

    return arr.filter(function (ele) {
      // console.log(value);
      return ele.id === value;
    });

  }
  let data = finddata(users, userId);
  // console.log(data);
  return (
    <>
      <h1>User Info</h1>
      <h3><div>ID : {data[0].id}</div></h3>
      <h3><div>firstName : {data[0].firstName}</div></h3>
      <h3><div>lastName :{data[0].lastName}</div></h3>
      <h3><div>age : {data[0].age}</div></h3>
    </>
  );
};

export default User;


