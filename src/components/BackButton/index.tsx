import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BackButton = () => {
  return (
    <Link
      to="/"
      className="flex items-center text-purple-700 hover:bg-neutral-800 p-2 rounded-full"
    >
      <ArrowBackIcon />
    </Link>
  );
};
