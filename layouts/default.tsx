import { WithChildren } from "@/types";
import { Inter } from "@next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-family-sans",
  display: "swap",
});

const DefaultLayout: React.FC<WithChildren> = ({ children }) => {
  return (
    <div className={`${inter.className} h-full bg-blue-200 font-sans`}>
      {children}
    </div>
  );
};

export default DefaultLayout;
