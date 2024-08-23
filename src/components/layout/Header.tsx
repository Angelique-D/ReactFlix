import React, { useState } from "react";
import { HeaderProps } from "../../types/components/layout";
import Drawer from "../common/Drawer";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";
import Button from "../common/Button";
import ListUrlWithArray from "../common/ListUrlWithArray";
import Login from "../common/Login";
import SignUp from "../common/SignUp";
import Modal from "../common/Modal";
import BackgroundPrimary from "../common/BackgroundPrimary";

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const listLinks = [
    { label: "Movies", href: "/movies" },
    { label: "Series", href: "#" },
    { label: "Anime", href: "#" },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleAuth = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <header className="h-3/5 2xl:h-4/5 relative">
      <nav className="bg-blue-950/50 backdrop-blur-sm w-11/12 sm:max-w-lg p-1 px-2 sm:py-3 mt-2 text-white flex sm:inline-flex justify-between sm:justify-center fixed left-1/2 transform -translate-x-1/2 rounded-3xl z-10">
        <h1 className="mr-8 flex items-center">
          <a href="/">{title}</a>
        </h1>

        <Button
          label={<BurgerMenuIcon />}
          className="rounded-full sm:hidden hover:bg-blue-950/60"
          onClick={toggleDrawer}
        />

        <div className={`hidden sm:block items-center`}>
          <ListUrlWithArray arrayLinks={listLinks} />
          <Button label={isSignIn ? "Sign Up" : "Sign In"} />
        </div>
      </nav>

      <BackgroundPrimary/>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 flex w-full h-full bg-black/50 sm:hidden"
          onClick={toggleDrawer}
        >
          <Drawer
            arrayLinks={listLinks}
            setIsDrawerOpen={toggleDrawer}
            isSignIn={isSignIn}
          />
        </div>
      )}
      {isSignIn ? <Modal /> : null}
    </header>
  );
};

export default Header;
