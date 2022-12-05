import { useState } from "react";
import { useFormResults } from "../../../types/general.types";
import emailjs from "@emailjs/browser";

const useForm = (): useFormResults => {
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleSubmitForm = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID_2 as string,
        process.env.NEXT_PUBLIC_SERVICE_ID_2 as string,
        e.target,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_2 as string
      );
      setSubmitSuccess(true);
    } catch (err: any) {
      console.error(err.message);
    }
    e.target.reset();
  };

  return {
    submitSuccess,
    setSubmitSuccess,
    handleSubmitForm,
  };
};

export default useForm;
