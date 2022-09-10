export const formatTime = (time: string) => {
    return time.split('-').join(':') + ':00';
}

//Time should be in format '00:00'
export const ISODateFormat = (date: string, time: string) => {
    return `${date}T${time}`;
}

export const getTimeFromMins = (mins: number) => {
    if(!mins) return;
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return hours + ':' + minutes;
};

export const getTimeDiff = (date: string, timeStart: string, timeEnd: string) => {

    if(!date) return;
    const dateStart = ISODateFormat(date, formatTime(timeStart));
    const dateEnd = ISODateFormat(date, formatTime(timeEnd));

    const startInMs = new Date(dateStart);
    const endInMs = new Date(dateEnd)

    return (endInMs.getTime() - startInMs.getTime())/1000/60;
}


export const getDaysArray = (year: number, month: number) => {
    const date = new Date(year, month - 1, 1);

    const result = [];
    while (date.getMonth() == month - 1) {
        const newDate = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
        result.push(`${year}-0${month}-${newDate}`);
        date.setDate(date.getDate() + 1);
    }
    return result;
}
