import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { TypingTitle } from "../../components/TypingTitle";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { projectItem } from "../../constants/ProjectItem";
import { Button } from "../../components/ui/button";
import { BackButton } from "../../components/BackButton";

export const ProjectView = () => {
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
              <LibraryBooksIcon className="text-purple-700" />
              <TypingTitle />
            </div>
            <div className="w-6" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {projectItem.map((project, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-neutral-950">
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                        <img src={project.imageUrl} />
                        <span className="text-xl font-semibold text-white py-2">
                          {project.title}
                        </span>
                        <CardDescription>{project.description}</CardDescription>
                        <div className="flex py-2 gap-3">
                          <Button onClick={() => window.open(project.repositoryUrl, "_blank")}>
                            <GitHubIcon /> Repo
                          </Button>
                          <Button
                            disabled={
                              project.demonstrationUrl == "" ? true : false
                            }
                          >
                            <VisibilityIcon /> Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="invisible sm:visible" />
            <CarouselNext className="invisible sm:visible" />
          </Carousel>
        </CardContent>
      </Card>
    </motion.section>
  );
};
