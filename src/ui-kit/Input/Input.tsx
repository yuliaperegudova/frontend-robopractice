import React, {forwardRef, RefObject} from "react";
import './Input.css';

type InputProps = React.InputHTMLAttributes<any> & {
    errorText?: string;
    label?: string;
    wrapperRef?: RefObject<HTMLLabelElement>;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ errorText, label, wrapperRef, ...props }, ref) => {

        return (
            <label ref={wrapperRef}>
                {label && <div>{label}</div>}
                <div>
                    <input type={'text'} ref={ref}{...props} className={'input'} />
                </div>
                {errorText && <div>{errorText}</div>}
            </label>
        );
    }
);

Input.displayName = 'Input';

