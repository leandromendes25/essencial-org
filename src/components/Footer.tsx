import React from "react";

interface FooterProps {
  url?: string; // Torna `url` opcional com '?'
}

const Footer: React.FC<FooterProps> = ({ url = "#" }) => {
  return (
    <footer className="bg-slate-700 p-4 justify-center flex relative">
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
