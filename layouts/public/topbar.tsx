import { useDisplayContext } from "@/context/display";

const PublicTopbar = () => {
  const { setShowMenu } = useDisplayContext();

  return (
    <div className="fixed z-10 flex h-16 w-full items-center justify-between bg-black bg-opacity-50 px-4 md:px-6">
      <span />

      <button onClick={() => setShowMenu(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default PublicTopbar;
