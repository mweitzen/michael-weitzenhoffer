import { WithChildren } from "@/types";
import { WithClassName } from "@/types";

interface IUpperCaseText extends WithChildren, WithClassName {}

const UpperCaseText: React.FC<IUpperCaseText> = ({
  children,
  className = "",
}) => {
  return (
    <span className={`text-xs font-light uppercase ${className}`}>
      {children}
    </span>
  );
};

export default UpperCaseText;
