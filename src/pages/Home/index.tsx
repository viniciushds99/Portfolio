import { useHomeModel } from "./model";
import { HomeView } from "./view";

export const Home = () => {
    const methods = useHomeModel();
    return <HomeView {...methods} />;
};