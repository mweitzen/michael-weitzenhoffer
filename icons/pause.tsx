import { IconProps } from "@/types/icons";

const PauseIcon: React.FC<IconProps> = ({
  className = "",
  stroke = "currentColor",
  strokeWidth = 1,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={`h-5 w-5 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25v13.5m-7.5-13.5v13.5"
      />
    </svg>
  );
};

export default PauseIcon;
