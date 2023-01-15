import { HTMLProps } from "react";

interface IButtonComponent extends HTMLProps<HTMLButtonElement> {}

const Button: React.FC<IButtonComponent> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button {...props} type="button" className={`${className} bg-white`}>
      {children}
    </button>
  );
};

export default Button;
