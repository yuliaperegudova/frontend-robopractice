import React, { useCallback, useState } from 'react';

type Value = string;
type ChangeHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
type Setter = (val: string) => void;
type TargetElement = HTMLInputElement | HTMLTextAreaElement;

const useInputState = (initVal = '', formatter?: (val: string) => string): [Value, ChangeHandler, Setter] => {
    const [value, setValue] = useState<string>(initVal);

    const changeValue = (e: React.ChangeEvent<TargetElement>) => {
        setValue(formatter ? formatter(e.target.value) : e.target.value);
    };

    const setManually = useCallback((value = '') => {
        setValue(formatter ? formatter(value) : value);
    }, []);

    return [value, changeValue, setManually];
};

export default useInputState;
