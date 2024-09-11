import React from "react";
import { ListUrlWithArrayProps } from "../../types/components/common";
import { Link } from "../../types/link";

const ListUrlWithArray: React.FC<ListUrlWithArrayProps> = ({ arrayLinks }) => {
    return (
        <>
            {arrayLinks.map((link: Link, index: number) => (
                <a key={index} href={link.href} className="px-1 flex self-center">
                    {link.label}
                </a>
            ))}
        </>
    );
};

export default ListUrlWithArray;