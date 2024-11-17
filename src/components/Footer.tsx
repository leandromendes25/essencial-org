import React from "react";
import Logo from "./Logo";

interface FooterProps {
  url?: string; // Torna `url` opcional com '?'
}

const Footer: React.FC<FooterProps> = ({ url = "#" }) => {
  return (
    <footer
      className="bg-slate-700 p-4 flex justify-between 
    relative w-full mr-auto ml-auto  max-w-7xl "
    >
      <Logo />
      <button className="flex items-center gap-2" title="Clique aqui">
        <p className="text-white">Siga-nos em nosso Instagram:</p>
        <a id="contato" href={url} target="_blank" rel="noopener noreferrer">
          <img
            className="max-w-14"
            src="/assets/instagram.svg"
            alt="Link para nosso Instagram"
          />
        </a>
      </button>
    </footer>
  );
};

export default Footer;
