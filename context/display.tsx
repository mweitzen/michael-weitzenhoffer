import { WithChildren } from "@/types";
import { createContext, useContext, useState } from "react";

interface IDisplayContext {
  showMenu: boolean;
  setShowMenu: (val: boolean) => void;
}

const initialState: IDisplayContext = {
  showMenu: false,
  setShowMenu: () => {},
};

const DisplayContext = createContext<IDisplayContext>(initialState);

const DisplayContextProvider: React.FC<WithChildren> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <DisplayContext.Provider
      value={{
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export default DisplayContextProvider;

export const useDisplayContext = () => useContext(DisplayContext);
