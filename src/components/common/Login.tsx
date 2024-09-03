import React, { useState } from "react";
import Button from "./Button";
import { LoginProps } from "../../types/components/common";
import { UserRepository } from "../../repositories/UserRepository";
import CloseEyes from "../icons/CloseEyes";
import OpenEyes from "../icons/OpenEyes";
import Input from "./Input";

const Login: React.FC<LoginProps> = ({ switchToSignUp }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const repo: UserRepository = new UserRepository();

  const loginUser = async () => {
    try {
      await repo.loginUser({
        email: email,
        password: password,
      });
    } catch (e) {
      console.log("Error login user", e);
    }
  };
  return (
    <>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          loginUser();
        }}
      >
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input label="email" type="email" onChange={(e) => setEmail(e.target.value)} />

        <label className=" block text-blue-950 text-sm font-bold mb-2 mt-2">
          Password :
        </label>
        <div className="wrapper relative mb-3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight"
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="text-gray-400 absolute right-2 top-1/2 -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <CloseEyes /> : <OpenEyes />}
          </span>
        </div>
        <div className="message">
          {messageError}
        </div>

        <Button
          className="bg-blue-950 text-white font-bold py-2 px-4 rounded"
          type="submit"
          label="Sign In"
        />
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
