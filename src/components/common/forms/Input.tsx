import React, { useState } from "react";
import CloseEyes from "../../icons/CloseEyes";
import OpenEyes from "../../icons/OpenEyes";
import { InputProps } from "../../../types/components/common";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter.utils";

const Input: React.FC<InputProps> = ({ label, type, onInputChange }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (onInputChange) {
      onInputChange(newValue);
    }
  };
  return (
    <>
      <div className="w-72">
        <div className="relative h-10 w-full min-w-[200px]">
          {(label.toLowerCase() === "password" ||
            label.toLowerCase() === "confirm password") && (
            <div
              className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <CloseEyes /> : <OpenEyes />}
            </div>
          )}

          <input
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-950 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            id={label}
            type={
              (label.toLocaleLowerCase() === "password" && showPassword) ||
              (label.toLocaleLowerCase() === "confirm password" && showPassword)
                ? "text"
                : type
            }
            value={inputValue}
            onChange={handleInputChange}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[12px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-950 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-950 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-950 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            {capitalizeFirstLetter(label)}
          </label>
        </div>
      </div>
    </>
  );
};

export default Input;
