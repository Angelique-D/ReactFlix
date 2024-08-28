import React from "react";
import { ButtonProps } from "../../types/components/common";

const Button: React.FC<ButtonProps> = ({label, onClick, className, type}) => {
    const defaultClassName = "font-medium text-sm text-center p-2";
    const combinedClasses = `${defaultClassName} ${className || ""}`.trim();
    
    return (
        <button type={type} onClick={onClick} className={combinedClasses}>
            {label}
        </button>
    );
};

export default Button;