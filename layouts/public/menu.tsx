import Link from "next/link";
//
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
//
import { useDisplayContext } from "@/context/display";
//
import routes from "@/lib/routes";

const PublicMenu = () => {
  const { showMenu, setShowMenu } = useDisplayContext();

  function closeMenu() {
    return setShowMenu(false);
  }

  return (
    <Transition as={Fragment} show={showMenu}>
      <Dialog
        as="div"
        className="relative z-20 font-light text-white"
        onClose={closeMenu}
      >
        <Transition.Child
          as={Fragment}
          enter="transition duration-700 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-500 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur">
            <div className="absolute flex h-16 w-full flex-row-reverse items-center justify-between px-4 md:px-6">
              <button onClick={closeMenu}>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <Transition.Child
                as={Fragment}
                enter="transition duration-1000 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Link
                  href={routes.common.index.path}
                  className="tracking-tighter"
                  onClick={closeMenu}
                >
                  MW
                </Link>
              </Transition.Child>
            </div>
          </div>
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition duration-700 ease-out"
          enterFrom="scale-0"
          enterTo="scale-100"
          leave="transition duration-500 ease-in"
          leaveFrom="scale-100"
          leaveTo="scale-0"
        >
          <div className="pointer-events-none fixed inset-0 grid transform place-content-center">
            <Dialog.Panel
              as="div"
              className="pointer-events-auto grid gap-4 text-center text-white"
            >
              <Link
                href={routes.special.live.path}
                className="border-4 border-black bg-black py-6 px-12 text-lg font-medium uppercase tracking-widest"
                onClick={closeMenu}
              >
                Interact Live
              </Link>
              {routes.public.map((route, i) => (
                <Link
                  key={i}
                  href={route.path}
                  onClick={closeMenu}
                  className="text-xs uppercase tracking-widest"
                >
                  {route.name}
                </Link>
              ))}
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default PublicMenu;
