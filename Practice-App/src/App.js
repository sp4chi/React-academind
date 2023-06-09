import React, { useState } from 'react';
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
    <div>
      <AddUser onAddUser={addUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
