import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import { Typing } from "../../components/Typing";
import { motion } from "motion/react";
import type { useHomeModel } from "./model";
import Avatar from "../../assets/avatar-image.png";

export const HomeView = ({ about, experience, project, resume, contact }:ReturnType<typeof useHomeModel>) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      <Card className="w-full max-w-sm bg-neutral-900 border-0 text-white">
        <CardHeader className="text-center">
          <img
            src={Avatar}
            className="w-40 h-[170px] mx-auto my-1 rounded-full border-4"
          />
          <CardTitle>
            <Typing />
          </CardTitle>
          <CardDescription>Portfólio</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button onClick={about} className="border-2 hover:bg-neutral-800 duration-500 cursor-pointer">
            <AccountBoxIcon /> Sobre mim
          </Button>
          <Button onClick={experience} className="border-2 hover:bg-neutral-800 duration-500 cursor-pointer">
            <AssignmentIcon /> Experiência
          </Button>
          <Button onClick={project} className="border-2 hover:bg-neutral-800 duration-500 cursor-pointer">
            <LibraryBooksIcon /> Projetos
          </Button>
          <Button onClick={resume} className="border-2 hover:bg-neutral-800 duration-500 cursor-pointer">
            <DownloadIcon /> Currículo
          </Button>
          <Button onClick={contact} className="border-2 hover:bg-neutral-800 duration-500 cursor-pointer">
            <MailIcon /> Contato
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex flex-row">
            <Link
              to="https://www.linkedin.com/in/vin%C3%ADcius-henrique-da-silva-1362b8226/"
              target="_blank"
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-neutral-950 duration-500 cursor-pointer"
            >
              <LinkedInIcon />
            </Link>
            <Link
              to="https://github.com/viniciushds99"
              target="_blank"
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-neutral-950 duration-500 cursor-pointer"
            >
              <GitHubIcon />
            </Link>
            {/* <Link
              to="https://wa.me/5519993886550"
              target="_blank"
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-neutral-950 duration-500 cursor-pointer"
            >
              <WhatsAppIcon />
            </Link>
            <Link
              to=""
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-neutral-950 duration-500 cursor-pointer"
            >
              <MailIcon />
            </Link> */}
          </div>
        </CardFooter>
      </Card>
    </motion.section>
  );
};
