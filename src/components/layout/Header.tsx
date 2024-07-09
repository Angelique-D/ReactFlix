import React from "react";
import { HeaderProps } from "../../types/components/layout";
import Link from "../common/Link";

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="bg-blue-950 w-max p-5 mt-2 text-white flex justify-center rounded-3xl">
            <h1 className="mr-8">{title}</h1>
            <div className="">
                <Link href="/" className="mx-1" element={<span>Accueil</span>}/>
                <Link href="#" className="mx-1" element={<span>Movies</span>}/>
                <Link href="#" className="mx-1" element={<span>Series</span>}/>
                <Link href="#" className="mx-1" element={<span>Sign in</span>}/>
            </div>
        </header>
    );
};

export default Header