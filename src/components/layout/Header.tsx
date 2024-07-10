import React, { useState } from "react";
import { HeaderProps } from "../../types/components/layout";
import Link from "../common/Link";

const Header: React.FC<HeaderProps> = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="h-2/5 2xl:h-3/5 relative">
            <nav className="bg-blue-950/50 backdrop-blur-sm w-11/12 sm:max-w-lg p-4 mt-2 text-white flex sm:inline-flex justify-between sm:justify-center fixed left-1/2 transform -translate-x-1/2 rounded-3xl">
                <h1 className="mr-8">{title}</h1>
                <div className="flex sm:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
                        </svg>
                    </button>
                </div>
                
                <div className={`sm:flex ${isOpen ? 'flex' : 'hidden'}`}>
                    <Link 
                        href="/" 
                        className="mx-1 text-sm flex items-center" 
                        element={<span>Accueil</span>}
                    />
                    <Link 
                        href="#" 
                        className="mx-1 text-sm flex items-center" 
                        element={<span>Movies</span>}
                    />
                    <Link 
                        href="#" 
                        className="mx-1 text-sm flex items-center" 
                        element={<span>Series</span>}
                    />
                    <Link 
                        href="#" 
                        className="mx-1 text-sm flex items-center" 
                        element={<span>Anime</span>}
                    />
                    <Link 
                        href="#" 
                        className="mx-1 text-sm flex items-center" 
                        element={<span>Sign in/Sign up</span>}
                    />
                </div>
            </nav>
            <div 
                className="h-full bg-cover bg-center" 
                style={{ 
                    backgroundImage: "url('/assets/images/imageFromPixlr.png')" 
                }}
            />
            <div
                className="absolute inset-0 bg-white"
                style={{ clipPath: "polygon(0 75%, 100% 85%, 100% 100%, 0 100%)" }}
            />
        </header>
    );
};

export default Header