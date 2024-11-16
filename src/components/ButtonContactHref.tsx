import React from "react";
import { BuilderContent } from "@builder.io/sdk";

interface ButtonContactHrefProps {
  telefone: String;
}
const ButtonContactHref: React.FC<ButtonContactHrefProps> = ({ telefone }) => {
  return (
    <button className="group relative overflow-hidden rounded bg-gray-600 px-8 py-4 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 hover:ring-2 hover:ring-gray-600 hover:ring-offset-2">
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
      <a
        href={`https://wa.me/${telefone.data?.url}`}
        target="_blank"
        className="font-bold"
        rel="noopener noreferrer"
      >
        Contato
      </a>
    </button>
  );
};
export default ButtonContactHref;
