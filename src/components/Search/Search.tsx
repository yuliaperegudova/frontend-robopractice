import React, {FC, FormEventHandler} from "react";
import {Input} from "../../ui-kit/Input/Input";
import useInputState from "../../hooks/useInputState";

export const Search: FC = () => {
    const [search, changeSearch] = useInputState('');

    const handleSearch: FormEventHandler = (e) => {
        e.preventDefault()
        console.log(search)
    }

    return <div>
        <form onSubmit={handleSearch}>
            <Input value={search} onChange={changeSearch} label={'Search'} placeholder={'Start typing'}/>
            <button>Search</button>
        </form>
    </div>

}
