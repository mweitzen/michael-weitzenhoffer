import Link from "next/link";
//
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
//
import { useDisplayContext } from "@/context/display";
//
import routes from "@/lib/routes";
import Close from "@/icons/close";

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
        {/* BACKDROP / TOP BUTTONS */}
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
              {/* CLOSE */}
              <button onClick={closeMenu}>
                <Close className="h-6 w-6" />
              </button>

              {/* LOGO */}
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

        {/* MENU */}
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
              className="pointer-events-auto grid text-center text-white"
            >
              {/* INTERACT LIVE */}
              <Link
                href={routes.special.app.path}
                className="mb-4 bg-black bg-opacity-90 py-6 px-16 text-lg font-medium uppercase tracking-widest"
                onClick={closeMenu}
              >
                Interact Live
              </Link>

              {/* NAVIGATION */}
              <div className="grid bg-black bg-opacity-30 py-4">
                {routes.public.map((route, i) => (
                  <Link
                    key={i}
                    href={route.path}
                    onClick={closeMenu}
                    className="py-3 text-sm uppercase tracking-widest"
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default PublicMenu;
