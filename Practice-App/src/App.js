import React, { Fragment, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUser = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: (Math.random() * 100000).toString() }];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUser} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
