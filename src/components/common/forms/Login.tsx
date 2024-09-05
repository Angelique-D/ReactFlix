import React, { useState } from "react";
import Button from "../Button";
import { LoginProps } from "../../../types/components/common";
import { UserRepository } from "../../../repositories/UserRepository";
import Input from "./Input";

const Login: React.FC<LoginProps> = ({ switchToSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState<string>("");

  const repo: UserRepository = new UserRepository();

  const loginUser = async () => {
    try {
      await repo.loginUser({
        email: email,
        password: password,
      });
    } catch (e) {
      if (e instanceof Error) {
        console.log("Error message: ", e.message);
      } else if (typeof e === "object" && e !== null && "response" in e) {
        const error = e as any;
        if (error.response && error.response.status === 404) {
          setMessageError("User not found.");
        } else if (error.response && error.response.status === 401) {
          setMessageError("Invalid email or password.");
        } else {
          setMessageError("An unexpected error occured");
        }
      }
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
        <div className="my-5">
          <Input label="email" type="email" onInputChange={setEmail} />
        </div>
        <div className="mb-5">
          <Input label="password" type="password" onInputChange={setPassword} />
        </div>

        <div className="message">{messageError}</div>

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
