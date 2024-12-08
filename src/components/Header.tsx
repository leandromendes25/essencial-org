import React, { useState } from "react";
import MenuHeader from "./MenuHeader";
import Logo from "./Logo";
interface HeaderProps {
  type: "button" | "submit";
  label: string;
}
export default function Header({ type, label }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };

  return (
    <header className="w-full bg-white shadow-md justify-between border-t-gray-400 border-2">
      <div className="max-w-7xl w-full mx-auto flex justify-between">
        <Logo />
        <div className="flex ">
          <MenuHeader
            type={type ?? "button"}
            label={label ?? "Contato"}
            handlerOpenCloseMenu={toggleModal}
            isOpen={isOpen}
          />
        </div>
      </div>
    </header>
  );
}
