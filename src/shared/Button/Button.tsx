import { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
};
const Button: FC<ButtonProps> = ({ onClick, text, type = 'button', disabled = false }) => {
  return (
    <button
      className={
        'px-4 py-2 rounded-sm relative outline-none bg-transparent border-2 border-white text-white cursor-pointer backdrop-blur-[1px] disabled:opacity-35 disabled:pointer-events-none active:scale-110  hover:scale-110 transition-all duration-300'
      }
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
