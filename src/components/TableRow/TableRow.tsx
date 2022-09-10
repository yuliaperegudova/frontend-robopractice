import {FC} from "react";
import {User} from "../../types/user";
import { getTimeDiff, getTimeFromMins} from "../../utils/timeFormat";
import './TableRow.css'
import {TableCell} from "../TableCell/TableCell";

export interface TableRowProps {
    user: User,
    dates: string[]
}

export const TableRow: FC<TableRowProps> = ({user, dates}) => {
    const {id, Fullname, Days} = user;

    const userData = Days.reduce(function (obj: { [key: string]: number }, {Date,Start, End}) {
        obj[Date] = getTimeDiff(Date, Start, End) || 0;
        return obj;
    }, {});

    const total = Object.values(userData).reduce(function (sum: number, current: number) {
        return sum + current;
    }, 0);

    return <div className={'row'}>
        <TableCell type={'first'} >
            <div>{Fullname}</div>
        </TableCell>
            {dates.map((date) => {
                return  <TableCell key={date}>{getTimeFromMins(userData[date]) || 0}</TableCell>
            })}
        <TableCell type={"last"}>
            <div>{getTimeFromMins(total)}</div>
        </TableCell>
    </div>
}
