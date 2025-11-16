import { useState } from "react";

export const useResumeModel = () => {
    const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }


    return {
        numPages,
        onDocumentLoadSuccess
    }
};