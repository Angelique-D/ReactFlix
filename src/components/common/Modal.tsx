import React, { useState } from "react";
import CloseMenu from "../icons/CloseMenu";
import { ModalProps } from "../../types/components/common";
import Login from "./forms/Login";
import SignUp from "./forms/SignUp";

const Modal: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="fixed bottom-0 bg-black/80 h-full w-full z-20 flex justify-center">
        <div className="bg-white self-center flex flex-col p-4 rounded-xl w-80">
          <div className="self-end">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="
            w-8 h-8 text-blue-950 bg-transparent hover:bg-black/30 rounded-full
            inline-flex items-center justify-center"
            >
              <CloseMenu />
            </button>
          </div>
          { isLogin ? (
            <Login switchToSignUp={() => setIsLogin(false)} />
          ) : (
            <SignUp switchToLogin={() => setIsLogin(true)}/>
          )}

        </div>
      </div>
    </>
  );
};

export default Modal;
