import React, { useCallback, useState, useEffect } from "react";
import { SignUpProps } from "../../../types/components/common";
import Button from "../Button";
import { UserRepository } from "../../../repositories/UserRepository";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import PasswordCriteria from "./PasswordCriteria";

//Vérifier si il pourrait avoir une erreur à cause de confirm password

const SignUp: React.FC<SignUpProps> = ({ switchToLogin, closeModal }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasDigit, setHasDigit] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const validatePassword = useCallback((password: string) => {
    setIsLengthValid(password.length >= 15);
    setHasDigit(/\d/.test(password));
    setHasUppercase(/[A-Z]/.test(password));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));
  }, []);

  useEffect(() => {
    validatePassword(password);
  }, [password, validatePassword]);

  const navigate = useNavigate();
  const repo: UserRepository = new UserRepository();

  const createUser = async () => {
    try {
      if (password !== confirmPassword) {
        setMessageError("Passwords do not match");
        return;
      }

      if (!isLengthValid || !hasDigit || !hasUppercase || !hasSpecialChar) {
        setMessageError("The password does not meet all criteria");
        return;
      }

      await repo.createUser({
        email: email,
        password: password,
        name: name,
      });
      
      closeModal();
      navigate("/");

    } catch (e: any) {
      const error = JSON.parse(e.message);
      if (error.status === 409) {
        setMessageError("An another account use this email");
      } else {
        setMessageError("Error creating account");
      }
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

        <div className="my-5">
          <Input label="name" type="text" onInputChange={setName} />
        </div>
        <div className="mb-5">
          <Input label="email" type="email" onInputChange={setEmail} />
        </div>
        <div className="mb-2">
          <Input label="password" type="password" onInputChange={setPassword} />
        </div>

        <PasswordCriteria
          isLengthValid={isLengthValid}
          hasDigit={hasDigit}
          hasUppercase={hasUppercase}
          hasSpecialChar={hasSpecialChar}
        />

        <div className="mb-5">
          <Input
            label="confirm password"
            type="password"
            onInputChange={setConfirmPassword}
          />
        </div>

        <div className="text-red-700 text-xs mb-2 flex flex-wrap justify-center">
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
