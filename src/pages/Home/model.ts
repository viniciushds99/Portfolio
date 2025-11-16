import { useNavigate } from "react-router-dom";

export const useHomeModel = () => {
    const navigate = useNavigate();

    const about = () => {
        navigate("/about");
    }

    const experience = () => {
        navigate("/experience");
    }

    const project = () => {
        navigate("/projects");
    }

    const resume = () => {
        navigate("/resume");
    }

    const contact = () => {
        navigate("/contact");
    }

    return {
        about,
        experience,
        project,
        resume,
        contact
    }
};