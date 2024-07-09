import React from "react";
import { HeaderProps } from "../../types/components/layout";

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="bg-blue-950 p-4 text-white">
            <h1>{title}</h1>
        </header>
    );
};

export default Header