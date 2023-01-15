import { useDisplayContext } from "@/context/display";
import { PUBLIC_TOPBAR_HEIGHT } from "@/lib/constants";

const PublicTopbar = () => {
  const { setShowMenu } = useDisplayContext();

  return (
    <div
      className={`${PUBLIC_TOPBAR_HEIGHT} fixed z-10 flex w-full items-center justify-between bg-black bg-opacity-50 px-4 md:px-6`}
    >
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
