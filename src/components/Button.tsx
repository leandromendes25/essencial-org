import React from "react";
interface ButtonProps {
  text: string;
  telefone?: string;
}
export default function Button({ text, telefone }: ButtonProps) {
  return (
    <a
      href={`https://wa.me/${telefone}`}
      target="_blank"
      className="font-bold"
      rel="noopener noreferrer"
    >
      <button
        type="button"
        className="group relative overflow-hidden rounded bg-gray-600 py-2 px-10 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 hover:ring-2 hover:ring-gray-600 hover:ring-offset-2"
      >
        <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
        {text}
      </button>
    </a>
  );
}
