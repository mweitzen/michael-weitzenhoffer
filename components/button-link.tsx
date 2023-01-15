import { HTMLProps } from "react";

interface IButtonLinkComponent extends HTMLProps<HTMLAnchorElement> {}

const ButtonLink: React.FC<IButtonLinkComponent> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <a
      {...props}
      className={`${className} w-full bg-black bg-opacity-50 py-8 text-center`}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
