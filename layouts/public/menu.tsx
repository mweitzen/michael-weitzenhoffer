import Link from "next/link";
//
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
//
import { useDisplayContext } from "@/context/display";

const routes = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Upcoming Events",
    path: "/upcoming",
  },
  {
    label: "Recordings",
    path: "/recordings",
  },
  {
    label: "Auth",
    path: "/auth",
  },
];

const PublicMenu = () => {
  const { showMenu, setShowMenu } = useDisplayContext();
  return (
    <Transition as={Fragment} show={showMenu}>
      <Dialog as="div" className="relative z-20" onClose={setShowMenu}>
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
            <div className="flex h-16 w-full items-center justify-between px-4 md:px-6">
              <span />

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="white"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
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
          <div className="fixed inset-0 grid transform place-content-center">
            <Dialog.Panel>
              <div className="grid gap-4 text-center text-white">
                {routes.map((route, i) => (
                  <Link
                    key={i}
                    href={route.path}
                    onClick={() => setShowMenu(false)}
                  >
                    {route.label}
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
