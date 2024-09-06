import React, { useState } from "react";
import { HeaderProps } from "../../types/components/layout";
import Drawer from "../common/Drawer";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";
import Button from "../common/Button";
import ListUrlWithArray from "../common/ListUrlWithArray";
import Modal from "../common/Modal";
import BackgroundPrimary from "../common/BackgroundPrimary";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearToken } from "../../store/features/token/tokenSlice"

const Header: React.FC<HeaderProps> = ({ title }) => {
  const token = useAppSelector((state: RootState) => state.token.value);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

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

  const handleLogout = () => {
    dispatch(clearToken());
  }

  return (
    <header className="h-3/5 2xl:h-4/5 relative">
      <nav className="bg-blue-950/50 backdrop-blur-sm w-11/12 sm:max-w-lg p-1 px-2 sm:py-3 mt-2 text-white flex sm:inline-flex justify-between sm:justify-center fixed left-1/2 transform -translate-x-1/2 rounded-3xl z-10">
        <h1 className="mr-8 flex items-center">
          <a href="/">{title}</a>
        </h1>

        <Button
          type="button"
          label={<BurgerMenuIcon />}
          className="rounded-full sm:hidden hover:bg-blue-950/60"
          onClick={toggleDrawer}
        />

        <ListUrlWithArray arrayLinks={listLinks} />
        {token ? (
          <div>
            <span>User Name</span>
            <Button type="button" label="logout" onClick={handleLogout} />
          </div>
        ) : (
          <div className={`hidden sm:block items-center`}>
            <Button type="button" onClick={toggleAuth} label={"Sign In"} />
          </div>
        )}
      </nav>

      <BackgroundPrimary />
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
      {isSignIn ? <Modal setIsModalOpen={toggleAuth} /> : null}
    </header>
  );
};

export default Header;
