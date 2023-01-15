import { WithChildren } from "@/types";
//
import { font } from "pages/_app";
//
import PublicTopbar from "./topbar";
import Menu from "./menu";

const PublicLayout: React.FC<WithChildren> = ({ children }) => {
  return (
    <div
      className={`${font.variable} relative flex h-full animate-background-movement flex-col bg-gradient-radial from-dark-purple via-dark-purple to-black bg-[size:250%_250%] font-sans text-white`}
    >
      {/* TOPBAR */}
      <PublicTopbar />

      {/* MAIN */}
      <main className="flex-grow">{children}</main>

      {/* OVERLAYS */}
      <Menu />
    </div>
  );
};

export default PublicLayout;
