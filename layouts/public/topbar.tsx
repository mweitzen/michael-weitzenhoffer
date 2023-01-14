import { useDisplayContext } from "@/context/display";

const PublicTopbar = () => {
  const { setShowMenu } = useDisplayContext();

  return (
    <div className="fixed z-10 flex h-16 w-full items-center justify-between bg-black bg-opacity-50 px-4 md:px-6">
      <span />

      <span className="grid h-6 w-6" onClick={() => setShowMenu(true)}>
        <span className="h-0.5 w-full bg-white bg-opacity-90" />
        <span className="h-0.5 w-full bg-white bg-opacity-90" />
        <span className="h-0.5 w-full bg-white bg-opacity-90" />
      </span>
    </div>
  );
};

export default PublicTopbar;
