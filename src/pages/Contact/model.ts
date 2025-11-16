import type { ContactFormData } from "../../schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactSchema } from "../../schema/contact.schema";
import { toast } from "react-hot-toast";
import emailjs from '@emailjs/browser';

export const useContactModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });


const sendEmail = async (formData: ContactFormData) => {
  try {
     const result = await emailjs.send(
    "service_cn6mbxe",       
    "template_2860yaj",      
    {
      name: formData.name,
      email: formData.email,
      time: new Date().toLocaleString(),
      subject: formData.subject,
      message: formData.message
    },
    "5UJOUD5EyPS9LeNzC"      
  );

  if(result.status === 200)
      toast.success("E-mail enviado com sucesso!");
      reset();

} catch (error){
    console.error("Erro ao enviar o e-mail:", error);
    toast.error("Erro ao enviar o e-mail. Tente novamente mais tarde.");
    reset();
}
};

  return {
    handleSubmit,
    register,
    sendEmail,
    reset, 
    errors
  };
};
