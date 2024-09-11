import { PasswordCriteriaProps } from "../../../types/components/common";

const passwordCriteria: React.FC<PasswordCriteriaProps> = ({isLengthValid, hasDigit, hasUppercase, hasSpecialChar}) => {
  return (
    <div className="flex flex-col mb-5">
      <p className="text-[11px]">The password must contain at least :</p>
      <div className="inline-flex text-[11px] ml-4">
        <div className={`w-2 h-2 mr-2 rounded-full ${isLengthValid ? 'bg-green-600' : 'bg-red-600'} self-center`}></div>{" "}
        15 characters.{" "}
      </div>
      <div className="inline-flex text-[11px] ml-4">
        <div className={`w-2 h-2 mr-2 rounded-full ${hasDigit ? 'bg-green-600' : 'bg-red-600'} self-center`}></div>
        1 digit.
      </div>
      <div className="inline-flex text-[11px] ml-4">
        <div className={`w-2 h-2 mr-2 rounded-full ${hasUppercase ? 'bg-green-600' : 'bg-red-600'} self-center`}></div>
        1 uppercase letter.
      </div>
      <div className="inline-flex text-[11px] ml-4">
        <div className={`w-2 h-2 mr-2 rounded-full ${hasSpecialChar ? 'bg-green-600' : 'bg-red-600'} self-center`}></div>
        1 special characters.
      </div>
    </div>
  );
};

export default passwordCriteria;
