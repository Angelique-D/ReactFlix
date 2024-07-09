import React from "react";
import { LinkProps } from "../../types/components/common";

const Link: React.FC<LinkProps> = ({href, element, className}) => {
    return (
        <a href={href} className={className}>
            {element}
        </a>
    );
};

export default Link;