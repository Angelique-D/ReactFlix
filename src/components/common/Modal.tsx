import React from "react";

const Modal: React.FC = () => {
  return (
    <>
      <div className="fixed bottom-0 bg-black/80 h-full w-full z-20 flex justify-center align-middle">
        <div className="bg-white max">Bonjour</div>
      </div>
    </>
  );
};

export default Modal;
