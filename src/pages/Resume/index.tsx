import { ResumeView } from "./view";
import { useResumeModel } from "./model";

export const Resume = () => {
    const methods = useResumeModel();

    return <ResumeView {...methods}/>;
}