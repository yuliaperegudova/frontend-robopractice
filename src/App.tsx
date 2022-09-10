import React, {useEffect, useState} from 'react';
import {getUsers} from "./api/api";
import {User} from "./types/user";
import {Table} from "./components/Table/Table";

const App = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [usersToShow, setUsersToShow] = useState<User[]>([])

    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response.data)
            console.log(response)
        }).catch((e) => console.log(e));
    }, [])

    useEffect(() => {
       setUsersToShow(users.slice(0, 10));
    }, [users])

  return (
      <>
          <Table users={usersToShow} />
      </>
  );
}

export default App;
