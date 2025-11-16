import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "../../components/ui/card";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import PeopleIcon from "@mui/icons-material/People";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "motion/react";
import { CardTitle } from "../../components/ui/card";
import { TypingTitle } from "../../components/TypingTitle";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import type { useContactModel } from "./model";
import { BackButton } from "../../components/BackButton";

export const ContactView = ({
  handleSubmit,
  register,
  sendEmail,
  errors,
}: ReturnType<typeof useContactModel>) => {
  return (
    <motion.section
      initial={{ opacity: 0, scaleX: 0.5 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      <Card className="w-full max-w-5xl bg-neutral-900 border-0 text-white">
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          <CardTitle className="flex items-center justify-between w-full gap-2">
            <BackButton />
            <div className="flex items-center gap-2">
              <MailIcon className="text-purple-700" />
              <TypingTitle />
            </div>
            <div className="w-6" />
          </CardTitle>
          <CardDescription className="text-white text-sm md:text-lg">
            <strong className="text-purple-700">Gostou do meu trabalho?</strong>{" "}
            Entre em contato comigo!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row">
          <aside className="w-full flex flex-col p-6">
            <h2 className="text-2xl mb-4 font-bold text-center">
              Informações adicionais
            </h2>
            <div className="flex flex-col text-center">
              <div className="mb-2">
                <p className="font-bold text-lg">
                  <MailIcon className="text-purple-700" /> Email:
                </p>
                <p>viniciushds99@gmail.com</p>
              </div>
              <div className="mb-2">
                <p className="font-bold text-lg">
                  <WhatsappIcon className="text-purple-700" /> Whatsapp:
                </p>
                <Link to="https://wa.me/5519993886550">(19) 99388-6550</Link>
              </div>
              <div>
                <p className="font-bold text-lg">
                  <PeopleIcon className="text-purple-700" />
                  Redes sociais:{" "}
                </p>
                <ul className="flex flex-row justify-center gap-3">
                  <li>
                    <Link to="https://www.linkedin.com/in/vin%C3%ADcius-henrique-da-silva-1362b8226/">
                      <LinkedInIcon /> LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link to="https://github.com/viniciushds99">
                      <GitHubIcon /> GitHub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <form
            onSubmit={handleSubmit(sendEmail)}
            className="border rounded-lg p-4 w-full"
          >
            <div className="flex flex-row">
              <div className="w-[50%] p-2">
                <Label className="text-white mb-2">Nome: *</Label>
                <Input
                  className="mb-4"
                  {...register("name")}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <span className="text-red-600 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="w-[50%] p-2">
                <Label className="text-white mb-2">E-mail: *</Label>
                <Input
                  className="mb-4"
                  {...register("email")}
                  placeholder="email@exemplo.com"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-2">
              <Label className="text-white mb-2">Assunto: *</Label>
              <Input
                className="mb-4"
                {...register("subject")}
                placeholder="Assunto que deseja conversar."
              />
              {errors.subject && (
                <span className="text-red-600 text-sm">
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div className="p-2">
              <Label className="text-white mb-2">Mensagem: *</Label>
              <Textarea
                {...register("message")}
                className="mb-4 w-full h-32 p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white resize-none"
                placeholder="Escreva sua mensagem aqui..."
              />
              {errors.message && (
                <span className="text-red-600 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 duration-500"
              >
                <SendIcon /> Enviar Mensagem
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.section>
  );
};
