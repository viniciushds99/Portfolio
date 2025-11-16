import { motion } from "motion/react";
import { TypingTitle } from "../../components/TypingTitle";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import DownloadIcon from "@mui/icons-material/Download";
import { pdfjs, Document, Page } from "react-pdf";
import type { useResumeModel } from "./model";
import { BackButton } from "../../components/BackButton";
import CV from "../../assets/DevFullStack_ViniciusHenriqueSilva_CV.pdf";


export const ResumeView = ({
  onDocumentLoadSuccess,
}: ReturnType<typeof useResumeModel>) => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "../../../public/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

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
              <DownloadIcon className="text-purple-700" />
              <TypingTitle />
            </div>
            <div className="w-6" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-4">
            <a
              href={CV}
              className="w-[200px] border-2 h-9 px-4 py-2 rounded-md text-sm font-medium transition-all inline-flex items-center justify-center hover:bg-neutral-800 duration-500 cursor-pointer"
              download
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>
          <div className="flex justify-center max-h-[500px] overflow-auto">
            <Document
              file={CV}
              onLoadSuccess={onDocumentLoadSuccess}
              className="w-[80%]"
            >
              <Page
                className="flex justify-center"
                pageNumber={1}
                scale={1.2}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};
