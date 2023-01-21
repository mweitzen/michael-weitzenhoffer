import React, { createContext, useContext, useState } from "react";

interface IThemeContext {
  mode: "dark" | "light";
  toggleMode: () => void;
}

const initialState: IThemeContext = {
  mode: "dark",
  toggleMode: () => {},
};

const ThemeContext = createContext<IThemeContext>(initialState);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState(initialState.mode);

  function toggleMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => useContext(ThemeContext);
