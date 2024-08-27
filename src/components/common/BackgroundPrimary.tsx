import React from "react";

const BackgroundPrimary: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default BackgroundPrimary;
