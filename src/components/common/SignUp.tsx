import React from "react";
import { SignUpProps } from "../../types/components/common";
import Button from "./Button";

const SignUp: React.FC<SignUpProps> = ({ switchToLogin }) => {
  return (
    <>
      <form className="flex flex-col">
        <Button
          className="text-black text-xs self-end"
          label="Already have an account ?"
          onClick={switchToLogin}
        />
        <label className="block text-blue-950 text-sm font-bold mb-2">
          Name * :
        </label>
        <input
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-blue-950"
          id="name"
          type="text"
        />
        <label className="block text-blue-950 text-sm font-bold mb-2 mt-2">
          Email * :
        </label>
        <input
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-blue-950"
          id="email"
          type="email"
        />
        <label className="block text-blue-950 text-sm font-bold mb-2 mt-2">
          Password * :
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-950 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
        />
        <label className="block text-blue-950 text-sm font-bold mb-2 mt-2">
          Confirm Password * :
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-950 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
        />
        <Button
          label="Sign Up"
          className="bg-blue-950 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </>
  );
};

export default SignUp;
