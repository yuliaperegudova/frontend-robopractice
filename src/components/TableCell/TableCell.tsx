import {FC} from "react";
import './TableCell.css'
import clsx from "clsx";

export interface TableCellProps {
    children?: any;
    type?: 'first' | 'last' | 'basic';
}

const getCellClassnames = (type: string) =>
    clsx({
        ['cell']: true,
        ['cell_first']: type === 'first',
        ['cell_last']: type === 'last',
    });


export const TableCell: FC<TableCellProps> = ({children, type = 'basic'}) => {
    return <div className={getCellClassnames(type)}>
        {children}
    </div>
}
