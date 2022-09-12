import {FC} from "react";
import './Button.css';

export interface ButtonProps {
    text?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

export const Button: FC<ButtonProps> = ({text, onClick, type= 'button'}) => {

    const handleClick = () => {
      onClick?. ();
    }

    return <button className={'button'} type={type} onClick={handleClick}>
        <span>{text}</span>
    </button>
}
