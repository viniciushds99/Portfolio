import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { TypingTitle } from "../../components/TypingTitle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { BackButton } from "../../components/BackButton";
import { TecnologiesPanel } from "../../components/TecnologiesPanel";

export const AboutView = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scaleX: 0.5 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      <Card className="max-h-[800px] w-full max-w-5xl bg-neutral-900 border-0 text-white">
        <CardHeader className="flex gap-2">
          <CardTitle className="flex items-center justify-between w-full gap-2">
            <BackButton />
            <div className="flex items-center gap-2">
              <AccountBoxIcon className="text-purple-700" />
              <TypingTitle />
            </div>
            <div className="w-6" />
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-auto px-2 2xl:flex 2xl:flex-row 2xl:gap-4 2xl:p-6 lg:flex lg:flex-row lg:gap-4 lg:p-6">
          <div className="w-full flex justify-center">
            <img src="src/assets/github-avatar.png" className="w-[500px]" />
          </div>
          <div className="flex flex-col w-full gap-4">
            <p className="break-all">
              Olá! Me chamo{" "}
              <strong className="text-purple-700">
                Vinícius Henrique da Silva.
              </strong>{" "}
              <br />
              Possuo{" "}
              <strong className="text-purple-700">
                dois anos de experiência
              </strong>{" "}
              como{" "}
              <strong className="text-purple-700">
                Desenvolvedor Full Stack
              </strong>{" "}
              com foco em aplicações web modernas e escaláveis. Busco atuar em
              projetos que integrem Front-End e Back-End, contribuindo com
              soluções eficientes, código limpo e{" "}
              <strong className="text-purple-700">
                foco na experiência do usuário.
              </strong>{" "}
              <br />
              Atualmente estou cursando o último semestre de Análise e
              Desenvolvimento de Sistemas. Além das hardskills, valorizo muito
              as softskils, e estou sempre em busca de desenvolver minhas
              habilidades de{" "}
              <strong className="text-purple-700">
                comunicação, trabalho em equipe
              </strong>
              , pois creio que um bom relacionamento interpessoal é essencial
              para projetos de sucesso. <br />
              Estou aberto a{" "}
              <strong className="text-purple-700">
                novas oportunidades
              </strong>{" "}
              para expandir e aplicar meus conhecimentos e crescer
              profissionalmente.
            </p>
            <TecnologiesPanel />
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};
