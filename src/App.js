import React from 'react';
import UserList from './containers/userList';
import UserDetail from './containers/userDetail';
import './App.css';



const App = () => (
  
    <div>
            <h2>User List:</h2>
            <UserList />
            <hr />
            <h2>User Details:</h2>
            <UserDetail />
    </div>
  
)

export default App;

