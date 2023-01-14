import { WithChildren } from "@/types";
//
import { font } from "pages/_app";
//
import PublicTopbar from "./topbar";
import Menu from "./menu";

const PublicLayout: React.FC<WithChildren> = ({ children }) => {
  return (
    <div
      className={`${font.variable} relative flex h-full animate-background-movement flex-col bg-gradient-radial from-dark-purple via-dark-purple to-black bg-[size:175%_175%] font-sans text-white`}
    >
      <PublicTopbar />
      <Menu />
      <main className="flex flex-grow flex-col items-center justify-center text-3xl font-thin">
        {children}
      </main>
    </div>
  );
};

export default PublicLayout;
