import React from "react";
import { DrawerProps } from "../../types/components/common";
import { Link } from "../../types/link";
import CloseMenu from "../icons/CloseMenu";
import Button from "./Button";

const Drawer: React.FC<DrawerProps> = ({
  arrayLinks,
  setIsDrawerOpen,
  isSignIn,
}) => {
  return (
    <>
      <div
        id="drawer-navigation"
        className="fixed top-0 right-0 z-40 h-full p-4 overflow-y-auto transition-transform bg-blue-950 w-64 "
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-200 uppercase"
        >
          Menu
        </h5>
        <button
          type="button"
          onClick={() => setIsDrawerOpen(false)}
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="
            text-gray-200 bg-transparent hover:bg-black/30 rounded-full text-sm 
            w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center
            justify-center dark:hover:bg-gray-600 dark:hover:text-white
          "
        >
          <CloseMenu />
        </button>

        <div className="py-4 overflow-y-auto">
          <Button
            type="button"
            label={"Sign In"}
          ></Button>
          <ul className="space-y-2 font-medium text-gray-50">
            {arrayLinks.map((link: Link, index: number) => (
              <li>
                <a key={index} href={link.href} className="px-1">
                  <span className="ms-3">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
