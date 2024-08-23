import { ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
};

const configPadrao: string = "flex justify-center items-center gap-[12px] rounded-lg px-[10px] py-[10px] text-colorfont bg-solidcomponents ";

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={ configPadrao + className }>
        {children}
    </button>
  );
};

export default Button;