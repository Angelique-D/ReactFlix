import React, { useState } from "react";
import Button from "./Button";
import { DropdownProps } from "../../types/components/common";
import { Link } from "../../types/link";

const Dropdown: React.FC<DropdownProps> = ({links}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className="relative inline-block text-left">
            <Button 
            label={
            <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.72-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
                />
            </svg>}
            onClick={toggleDropdown}
        />

        {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {links.map((link: Link, index: number) => (
              <a
                key={index}
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

    </div>
    );
};

export default Dropdown;