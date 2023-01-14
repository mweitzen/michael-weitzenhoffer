import { useDisplayContext } from "@/context/display";
import { Transition } from "@headlessui/react";
import React from "react";

const demo = () => {
  const { showMenu, setShowMenu } = useDisplayContext();

  return (
    <div>
      <button onClick={() => setShowMenu(true)}>demo</button>
      <Transition
        show={showMenu}
        enter="transition duration-500 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-500 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-30 bg-black" />
      </Transition>
    </div>
  );
};

export default demo;
