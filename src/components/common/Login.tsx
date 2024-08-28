import React, { useState } from "react";
import Button from "./Button";
import { LoginProps } from "../../types/components/common";

const Login: React.FC<LoginProps> = ({ switchToSignUp }) => {
  return (
    <>
      <form className="flex flex-col">
        <Button
          type="button"
          className="text-black text-xs self-end"
          label="Don't have an account ?"
          onClick={switchToSignUp}
        />
        <label className="block text-blue-950 text-sm font-bold mb-2">
          Email :
        </label>
        <input
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-blue-950"
          id="email"
          type="email"
        />
        <label className="block text-blue-950 text-sm font-bold mb-2 mt-2">
          Password :
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-950 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
        />
        <p className="text-red-500 text-xs italic mb-2">
          Please choose a password.
        </p>

        <button
          className="bg-blue-950 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign In
        </button>
        <Button
          type="button"
          className="inline-block align-baseline font-bold text-sm text-blue-950 px-4 py-2"
          label="Forgot password ?"
        />
      </form>
    </>
  );
};

export default Login;
