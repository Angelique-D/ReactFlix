import React, { useState } from "react";
import { SignUpProps } from "../../types/components/common";
import Button from "./Button";
import { UserRepository } from "../../repositories/UserRepository";
import { useNavigate } from "react-router-dom";
import CloseEyes from "../icons/CloseEyes";
import OpenEyes from "../icons/OpenEyes";

const SignUp: React.FC<SignUpProps> = ({ switchToLogin }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  const repo: UserRepository = new UserRepository();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const createUser = async () => {
    try {
      if (password !== confirmPassword) {
        setMessageError("Passwords do not match");
        return;
      }

      if (password.length <= 15) {
        setMessageError("The password must contain at least 15 characters");
        return;
      }

      await repo.createUser({
        email: email,
        password: password,
        name: name,
      });

      navigate("/");
    } catch (e) {
      console.log("Error creating user", e);
    }
  };
  return (
    <>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }}
      >
        <Button
          type="button"
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block text-blue-950 text-sm font-bold mb-2 mt-2">
          Email * :
        </label>
        <input
          className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-blue-950"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-blue-950 text-sm font-bold mb-2 mt-2">
          Password * :
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-950 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          
        </input><span className="" onClick={togglePasswordVisibility}>{showPassword ? <CloseEyes /> : <OpenEyes />}</span>

        <label className="block text-blue-950 text-sm font-bold mb-2 mt-2">
          Confirm Password * :
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-950 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="text-red-700 text-xs mb-2 flex flex-wrap">
          {messageError}
        </div>

        <Button
          label="Sign Up"
          className="bg-blue-950 text-white font-bold py-2 px-4 rounded"
          type="submit"
        />
      </form>
    </>
  );
};

export default SignUp;
