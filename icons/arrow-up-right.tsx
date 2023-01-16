import { IconProps } from "@/types/icons";

const ArrowUpRight: React.FC<IconProps> = ({
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
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
};

export default ArrowUpRight;
