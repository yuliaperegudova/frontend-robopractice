import React, {FormEventHandler, useEffect, useState} from 'react';
import {getUsers} from "./api/api";
import {User} from "./types/user";
import {Table} from "./components/Table/Table";
import {Input} from "./ui-kit/Input/Input";
import useInputState from "./hooks/useInputState";
import {Pagination} from "./components/Pagination/Pagination";
import {Button} from "./ui-kit/Button/Button";

export type Sort = 'ACS' | 'DESC' | undefined;

const limit = 10;

const App = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [usersToShow, setUsersToShow] = useState<User[]>([])
    const [search, changeSearch] = useInputState('');
    const [didSearch, setDidSearch] = useState(false);
    const [sorted, setSorted] = useState<Sort>(undefined);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const handleSearch: FormEventHandler = (e) => {
        e.preventDefault()
        const searchResults = users.filter((user) => user.Fullname.toLowerCase().includes(search.toLowerCase()))
        setDidSearch(true);
        setUsersToShow(searchResults);
    }

    const handleNameSort = () => {
        setCurrentPage(0);
        if (sorted === 'DESC') {
            const sortedUsers = users.map(user => user).sort();
            setUsersToShow(sortedUsers.slice(limit*currentPage, limit))
            setSorted('ACS')
        }

        if (sorted !== 'DESC') {
            const sortedUsers = users.map(user => user).reverse();
            setUsersToShow(sortedUsers.slice(limit*currentPage, limit))
            setSorted('DESC')
        }
    }

    const handleNextClick = () => {
        if(currentPage < totalPages) {
            setCurrentPage((prevState => prevState +1));
        }
    }

    const handleBackClick = () => {
        if(currentPage > 0) {
            setCurrentPage((prevState => prevState -1));
        }
    }

    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response.data)
            console.log(response)
        }).catch((e) => console.log(e));
    }, [])

    useEffect(() => {
       setUsersToShow(users.slice(limit*currentPage, limit));
       setTotalPages(Math.ceil(users.length / limit))
    }, [users])

    useEffect(() => {
        setUsersToShow(users.slice(limit*currentPage, limit*currentPage + limit));
    }, [currentPage])

  return (
      <>
          <form onSubmit={handleSearch}>
              <Input value={search} onChange={changeSearch} label={'Search'} placeholder={'Start typing'}/>
              <Button text={'Search'}/>
          </form>
          <div onClick={handleNameSort}>{sorted === 'DESC' ? 'Sort down' : 'Sort up'}</div>
          {usersToShow.length > 0 ? <Table users={usersToShow} /> : <>
              {didSearch ? <div>Nothing found. Check you search phrase</div> : <div>Loading...</div>}
          </>}
         <Pagination currentPage={currentPage} limit={limit} onBackClick={handleBackClick} onNextClick={handleNextClick} itemsTotal={users.length} />
      </>
  );
}

export default App;
