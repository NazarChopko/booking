import { FC, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  variant: "cancel" | "submit";
};
const Button: FC<ButtonProps> = ({
  onClick,
  text,
  variant,
  type = "button",
  disabled = false,
}) => {
  const btnStyle = {
    cancel: "bg-white text-primary border-2 border-primary",
    submit: "bg-primary text-white",
  };

  return (
    <button
      className={twMerge(
        "px-4 py-2 rounded-sm outline-none cursor-pointer disabled:opacity-35",
        btnStyle[variant]
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
