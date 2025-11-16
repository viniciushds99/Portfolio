import { motion } from "motion/react";
import { Card, CardHeader, CardTitle } from "../../components/ui/card";
import { TypingTitle } from "../../components/TypingTitle";
import CardContent from "@mui/material/CardContent";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "../../components/ui/item";
import { experienceItem } from "../../constants/ExperienceItem";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessIcon from "@mui/icons-material/Business";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { BackButton } from "../../components/BackButton";

export const ExperienceView = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scaleX: 0.5 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      <Card className="w-full max-w-5xl bg-neutral-900 border-0 text-white">
        <CardHeader className="flex items-center justify-center gap-2">
          <CardTitle className="flex items-center justify-between w-full gap-2 text-2xl">
            <BackButton />
            <div className="flex items-center gap-2">
              <AssignmentIcon className="text-purple-700" />
              <TypingTitle />
            </div>
            <div className="w-6" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 overflow-auto max-h-[900px]">
          {experienceItem
            .map((experience) => (
              <Item variant="outline">
                <ItemContent>
                  <ItemTitle className="text-xl">{experience.title}</ItemTitle>
                  <h1 className="flex items-center gap-1">
                    <BusinessIcon className="text-purple-700" />
                    {experience.company}
                  </h1>
                  <p className="flex items-center text-sm text-gray-400 gap-1">
                    <AccessTimeIcon />
                    {experience.period}
                  </p>
                  <ul>
                    {experience.description
                      .split("•")
                      .map((text, i) =>
                        text.trim() ? <li key={i}>{text.trim()}</li> : null
                      )}
                  </ul>
                  <div>
                    <ItemTitle className="text-md mt-2 mb-1">
                      Tecnologias Utilizadas:
                    </ItemTitle>
                    {experience.technologies.map((tech) => (
                      <ItemDescription className="inline-block mr-2 px-2 py-1 bg-neutral-800 rounded-md text-sm">
                        <img src="" />
                        {tech}
                      </ItemDescription>
                    ))}
                  </div>
                </ItemContent>
              </Item>
            ))
            .reverse()}
        </CardContent>
      </Card>
    </motion.section>
  );
};
