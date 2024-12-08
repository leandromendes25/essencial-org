import React from "react";
import Logo from "./Logo";

interface FooterProps {
  url: string;
}

const Footer: React.FC<FooterProps> = ({ url = "#" }) => {
  return (
    <footer className="bg-slate-700 p-4   ">
      <div
        className="max-w-7xl   flex justify-between 
    relative w-full mr-auto ml-auto "
      >
        <Logo />
        <div className="flex justify-center gap-2 flex-col items-end">
          <address className="text-white flex flex-col items-end gap-2">
            <a
              className="font-bold flex gap-2 hover:underline hover:cursor-pointer transition-all ease-in-out duration-200 hover:text-gray-400"
              href="mailto:essencialservicossp@gmail.com"
            >
              essencialservicossp@gmail.com
              <img
                className="w-5"
                src="/assets/email_icon.png"
                alt="icone e-mail"
              />
            </a>
            <a
              className="flex gap-2 font-bold hover:underline hover:cursor-pointer transition-all ease-in-out duration-200 hover:text-gray-400"
              href="tel:+5511964285295"
            >
              (11) 96428-5295{" "}
              <img
                className="w-5"
                src="/assets/whatsapp_footer.png"
                alt="Icone Whatsapp"
              />
            </a>
            <p className="flex gap-2 font-bold hover:underline hover:cursor-pointer transition-all ease-in-out duration-200 hover:text-gray-400">
              Av. Washington Luís, Nº 3085 - Santo Amaro - SP
              <img
                className="w-5"
                src="/assets/navigation_icon.png"
                alt="icone de navegação"
              />
            </p>

            <div className="flex items-center gap-2" title="Clique aqui">
              <p className="font-bold ">Siga-nos em nosso instagram</p>
              <img
                className="max-w-5 cursor-pointer"
                src="/assets/instagram.png"
                alt="Link para nosso Instagram"
              />
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
