import React, { useState } from "react";
import MenuHeader from "./MenuHeader";
import Logo from "./Logo";

interface HeaderProps {
  telefone: string;
}
export default function Header({ telefone }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };

  return (
    <header className="flex gap-4 justify-between sticky top-20">
      <Logo />
      <div className="flex ">
        <MenuHeader
          telefone={telefone}
          handlerOpenCloseMenu={toggleModal}
          isOpen={isOpen}
        />
      </div>
    </header>
  );
}
