import {FC} from "react";
import './Table.css'
import {getDaysArray} from "../../utils/timeFormat";
import {TableRow} from "../TableRow/TableRow";
import {User} from "../../types/user";
import {TableCell} from "../TableCell/TableCell";

export interface TableProps {
    users: User[];
    onSort: () => void;
    sorted: string | undefined;
}

export const Table: FC<TableProps> = ({users, onSort, sorted}) => {
    const dates = getDaysArray(2021, 5)

    return <div className={'table'}>
        <div className={'header'}>
            <TableCell type={'first'}>
                <span>User</span>
                <div className={'sortToggle'} onClick={onSort}>{sorted === 'DESC' ? 'Z-A' : 'A-Z'}</div>
        </TableCell>
            {dates.map((date, index) => {
                return  <TableCell key={date}>{index + 1}</TableCell>
            })}
            <TableCell type={'last'}>
                Total
            </TableCell>
        </div>

        {users.length > 0 && users.map((user) => {
            return <TableRow key={user.id} user={user} dates={dates} />
        })}
    </div>
}
