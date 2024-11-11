import React, { MouseEventHandler, useState } from "react";
interface HamburgerProps {
  boolean: boolean;
  clickHandler: MouseEventHandler<SVGSVGElement>;
}
export default function Hamburger(props: HamburgerProps) {
  return (
    <div className="absolute md:flex p-8 right-0 top-0 rounded-lg md:rounded-none shadow-lg md:shadow-none">
      <svg
        onClick={props.clickHandler}
        id="hamburger"
        className={`cursor-pointer Header__toggle-svg w-14 h-10 relative right-4   ${
          props.boolean ? "triggeredAnimation" : ""
        } md:hidden`}
        viewBox="0 0 60 40"
      >
        <g
          stroke="#000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path id="top-line" d="M10,10 L50,10 Z"></path>
          <path id="middle-line" d="M10,20 L50,20 Z"></path>
          <path id="bottom-line" d="M10,30 L50,30 Z"></path>
        </g>
      </svg>
      <div
        className={` ${props.boolean ? "relative z-10" : "hidden"}  md:flex`}
      >
        <nav className="md:flex min-w-56  items-center  ">
          <ul
            className={`flex flex-col md:flex-row gap-2 md:gap-4 mt-8 md:mt-0  ${
              props.boolean ? "block" : "hidden"
            } md:flex`}
          >
            <li className="font-bold  text-[#047857] hover:underline hover:cursor-pointer">
              Nossos Serviços
            </li>
            <li className="font-bold text-[#047857]  hover:underline hover:cursor-pointer">
              Trabalhos Realizados
            </li>
            <a
              className="hover:underline  text-[#047857]  font-bold "
              href="#contato"
            >
              Contato
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}
