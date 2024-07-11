import React, { useState } from "react";
import { HeaderProps } from "../../types/components/layout";
import Drawer from "../common/Drawer";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";
import Button from "../common/Button";
import ListUrlWithArray from "../common/ListUrlWithArray";

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const listLinks = [
    { label: "Movies", href: "#" },
    { label: "Series", href: "#" },
    { label: "Anime", href: "#" },
    { label: "Sign In", href: "#" },
    { label: "Sign Up", href: "#" },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-2/5 2xl:h-3/5 relative">
      <nav className="bg-blue-950/50 backdrop-blur-sm w-11/12 sm:max-w-lg p-1 px-2 sm:py-3 mt-2 text-white flex sm:inline-flex justify-between sm:justify-center fixed left-1/2 transform -translate-x-1/2 rounded-3xl">
        <h1 className="mr-8 flex items-center">{title}</h1>

        <Button
          label={<BurgerMenuIcon />}
          className="rounded-full sm:hidden hover:bg-blue-950/60"
          onClick={toggleDrawer}
        />

        <div className={`hidden sm:block items-center`}>
          <ListUrlWithArray arrayLinks={listLinks} />
        </div>
      </nav>

      <div
        className="h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/imageFromPixlr.png')",
        }}
      />
      <div
        className="absolute inset-0 bg-white"
        style={{ clipPath: "polygon(0 75%, 100% 85%, 100% 100%, 0 100%)" }}
      />
      {isOpen && (
        <div className="fixed inset-0 z-10 flex w-full h-full bg-black/50 sm:hidden" onClick={toggleDrawer}>
          <Drawer arrayLinks={listLinks} setIsDrawerOpen={toggleDrawer} />
        </div>
      )}
    </header>
  );
};

export default Header;
