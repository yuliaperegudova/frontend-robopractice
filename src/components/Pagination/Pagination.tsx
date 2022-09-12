import React, {FC} from "react";
import './Paination.css'
import {Button} from "../../ui-kit/Button/Button";

export interface PaginationProps {
    limit: number;
    onBackClick: () => void;
    onNextClick: () => void;
    itemsTotal:number;
    currentPage: number;
}

export const Pagination: FC<PaginationProps> = ({limit, currentPage, onBackClick, onNextClick, itemsTotal}) => {

    const itemsShown = itemsTotal > 10 ? limit*(currentPage+1) : itemsTotal;

    return  <div className={'pagination'}>
        <Button onClick={onBackClick} text={"Back"} type={"button"} />
        <div>{itemsShown} of {itemsTotal}</div>
        <Button onClick={onNextClick} text={"Next"} type={"button"} />
    </div>
}
