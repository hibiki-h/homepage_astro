import { useState, type ChangeEvent, type FormEvent } from "react";

import contactButtonImage from "@assets/Home_contact_button_hand.svg";
import { HomeContactForm } from "@components/atoms/HomeContactForm";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Field = { title: string; type: string };

type Props = {
  contactText: string;
  formFields: Field[];
  submitText: string;
};

const ContactForm = (props: Props) => {
  const { contactText, formFields, submitText } = props;

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true)

    try {
      const res = await fetch("http://localhost:3002/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        setIsSubmitting(false)
      } else {
        setForm({ name: "", email: "", message: "" });
        setIsSubmitting(false)
      }
    } catch (err) {
      console.log(err);
      setIsSubmitting(false)
    }
  };

  return (
    <>
      <form className="py-5" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col items-center px-[clamp(10px,4vw,80px)] space-y-8 mb-15 mt-8">
          <div className="w-[clamp(150px,45vw,800px)] whitespace-pre-line">
            {contactText}
          </div>
          {formFields.map((field) => (
            <HomeContactForm
              key={field.title}
              title={field.title}
              type={field.type}
              handleChange={handleChange}
            />
          ))}
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-1/4 flex space-x-3 group"
            disabled={isSubmitting}
          >
            <img
              src={contactButtonImage.src}
              alt="conatctform button image"
              className={"w-13 group-hover:translate-x-2 duration-300"}
            />
            <div>{submitText}</div>
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
