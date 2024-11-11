interface WhatsAppProps {
  telephone: string;
}

const WhatsApp = (props: WhatsAppProps) => (
  <a
    className="absolute right-2 bottom-4 z-10 md:right-6 md:bottom-8"
    href={`https://wa.me/${props.telephone}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className="max-w-14"
      src="/assets/whatsapp.svg"
      alt="Clique para falar conosco em nosso WhatsApp"
    />
  </a>
);

export default WhatsApp;
