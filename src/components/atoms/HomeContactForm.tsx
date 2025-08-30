import type { ChangeEvent } from "react";

type Props = {
  title: string;
  type: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export const HomeContactForm = (props: Props) => {
  const { title, type, handleChange } = props;

  return (
    <div className="w-full flex flex-row space-x-6">
      <div className="w-[clamp(10px,8vw,100px)] mt-2">{title}</div>
      <input
        type={type}
        className="w-[80%] h-[3dvh]"
        style={{ borderBottom: "1px solid black", outlineStyle: "none" }}
        onChange={handleChange}
        required
      />
    </div>
  );
};
