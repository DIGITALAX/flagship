import { useState } from "react";
import { useFormResults } from "../../../types/general.types";
import emailjs from "@emailjs/browser";

const useForm = (): useFormResults => {
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleSubmitForm = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_67226pr",
        "template_jgv456x",
        e.target,
        "Ex7hIkgjbXrWu8tTu"
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
