import React, {FC} from "react";
import './Paination.css'

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
        <button type={'button'} onClick={onBackClick}>Back</button>
        <div>{itemsShown} of {itemsTotal}</div>
        <button type={'button'} onClick={onNextClick}>Next</button>
    </div>
}
