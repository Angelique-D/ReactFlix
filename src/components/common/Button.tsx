import React from "react";
import { ButtonProps } from "../../types/components/common";

const Button: React.FC<ButtonProps> = ({label}, {onClick}) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;