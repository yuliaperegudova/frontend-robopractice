import React, {FC, FormEventHandler} from "react";
import {Input} from "../../ui-kit/Input/Input";
import {Button} from "../../ui-kit/Button/Button";
import './Search.css';

export interface SearchProps {
    initialValue: string;
    onValueChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onSearchSubmit: FormEventHandler;
}

export const Search: FC<SearchProps> = ({initialValue, onValueChange, onSearchSubmit}) => {

    return <div>
         <form onSubmit={onSearchSubmit} className={'search'}>
            <Input value={initialValue} onChange={onValueChange} placeholder={'Start typing'}/>
            <Button text={'Search'} type={"submit"} />
         </form>
    </div>


}
