import React from "react";
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type: "button" | "submit";
  label: string;
}
export default function Button({ type, label }: ButtonProps) {
  return (
    <button
      type={type}
      className="group relative overflow-hidden rounded bg-gray-600 py-2 px-10 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 hover:ring-2 hover:ring-gray-600 hover:ring-offset-2"
    >
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
      {label}
    </button>
  );
}
