import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
    ];
  return (
    <div>
      { users.map(({id, name, age}) => (
        <ul>
            <li>id = {id}</li>
            <li>name = {name}</li>
            <li>age = {age}</li>
        </ul>
      ))};
    </div>
  )
}

export default UserList
