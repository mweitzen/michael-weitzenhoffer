import { WithChildren } from "@/types";
import { Inter } from "@next/font/google";
import PublicTopbar from "./topbar";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-family-sans",
  display: "swap",
});

const PublicLayout: React.FC<WithChildren> = ({ children }) => {
  return (
    <div
      className={`${inter.className} relative flex h-full animate-background-movement flex-col bg-gradient-radial from-dark-purple to-black bg-[size:200%_200%] font-sans text-white`}
    >
      <PublicTopbar />
      <main className="flex flex-grow flex-col items-center justify-center text-3xl font-thin">
        {children}
      </main>
    </div>
  );
};

export default PublicLayout;
