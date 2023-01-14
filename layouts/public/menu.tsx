import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
//
import { useDisplayContext } from "@/context/display";

const PublicMenu = () => {
  const { showMenu, setShowMenu } = useDisplayContext();
  return (
    <Transition as={Fragment} show={showMenu}>
      <Dialog as="div" className="relative z-20" onClose={setShowMenu}>
        <Transition.Child
          as={Fragment}
          enter="transition duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition duration-300 ease-out"
          enterFrom="scale-0"
          enterTo="scale-100"
          leave="transition duration-300 ease-in"
          leaveFrom="scale-100"
          leaveTo="scale-0"
        >
          <div className="fixed inset-0 grid transform place-content-center">
            <Dialog.Panel>
              <div className="text-white">
                <button onClick={() => setShowMenu(false)}>Close</button>
                <p>Menu</p>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default PublicMenu;
