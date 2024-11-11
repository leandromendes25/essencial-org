import React, { useState } from "react";
import Hamburger from "./Hamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerAnimation = () => {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };
  return (
    <header className="flex gap-4 justify-between relative">
      <img
        src="/public/services.jpg"
        className="w-40 bg-contain"
        alt="Essencial Serviços logo"
      />
      <div className="flex  	">
        <Hamburger clickHandler={triggerAnimation} boolean={isOpen} />
      </div>
    </header>
  );
}
