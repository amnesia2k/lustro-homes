import React from "react";

interface ButtonProps {
  text: string;
  classes?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ text, classes, type }: ButtonProps) => {
  return (
    <button
      type={type || "submit"}
      className={`px-6 py-3 rounded-md transition-all duration-300 font-medium bg-[#b3941f] text-white hover:bg-[#b3941f]/80 cursor-pointer ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;
