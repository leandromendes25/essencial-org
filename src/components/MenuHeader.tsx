import { MouseEventHandler } from "react";
import Button from "./Button";

interface MenuHeaderProps {
  isOpen: boolean;
  handlerOpenCloseMenu: MouseEventHandler<SVGSVGElement>;
  type: "button" | "submit";
  label: string;
}
export default function MenuHeader({
  isOpen,
  handlerOpenCloseMenu,
  type,
  label,
}: MenuHeaderProps) {
  return (
    <div
      className={`absolute bg-white md:static md:flex p-8 right-0 top-0 ${
        isOpen ? "shadow-md" : ""
      }`}
    >
      <svg
        onClick={handlerOpenCloseMenu}
        id="hamburger"
        className={`cursor-pointer Header__toggle-svg w-14 h-10 relative right-4   ${
          isOpen ? "triggeredAnimation" : ""
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
      <div className={` ${isOpen ? "relative z-10" : "hidden"}  md:flex`}>
        <nav className="md:flex min-w-56  items-center  ">
          <ul
            className={`flex flex-col md:flex-row gap-2 md:gap-4 mt-8 md:mt-0 items-center  ${
              isOpen ? "block" : "hidden"
            } md:flex`}
          >
            <li className="font-bold hover:underline hover:cursor-pointer transition-all ease-in-out duration-200 hover:text-gray-400">
              <a className="" href="#realizados">
                Trabalhos Realizados
              </a>
            </li>

            <li className="">
              <Button type={type} label={label} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
