import { useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const TypingTitle = () => {
  const location = useLocation();

  return (
    <>
      <TypeAnimation
        className="type text-gray_gradient text-center text-2xl font-generalSans font-semibold"
        sequence={[
          `${
            location.pathname == "/about"
              ? "Sobre mim"
              : location.pathname == "/experience"
              ? "Experiência"
              : location.pathname == "/projects"
              ? "Projetos"
              : location.pathname == "/contact"
              ? "Contato"
              : "Currículo"
          }`,
          2000,
        ]}
        wrapper="span"
        cursor={false}
        repeat={Infinity}
      />
      <style>{`
                .type::after {
                    content: '|';
                    animation: cursor 1.1s infinite step-start;
                }
                @keyframes cursor {
                    50% {
                        visibility: hidden;
                    }
                }
            `}</style>
    </>
  );
};
