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
    <div
      className={`${inter.className} h-full bg-gradient-to-tr from-black to-dark-purple font-sans text-white`}
    >
      <main className="flex h-full w-full flex-col items-center justify-center text-3xl font-thin">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
