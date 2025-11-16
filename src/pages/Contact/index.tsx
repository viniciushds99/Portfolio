import { ContactView } from "./view";
import { useContactModel } from "./model";

export const Contact = () => {
    const methods = useContactModel();

    return <ContactView {...methods} />;
}