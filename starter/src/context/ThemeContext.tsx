import React, { createContext, useContext, useEffect, useState } from "react";

const defaultContextValue = {
  darkTheme: false,
  toggleDarkTheme: () => {},
};

const DarkThemeContext = createContext(defaultContextValue);

interface ChildrenProps {
  children: React.ReactNode;
}

export const DarkThemeProvider = ({ children }: ChildrenProps) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    const darkTheme = localStorage.getItem("darkTheme");
    return darkTheme === "true" ? true : false;
  });

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("darkTheme", "true");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("darkTheme", "false");
    }
  }, [darkTheme]);

  return (
    <DarkThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export const useDarkTheme = () => {
  const context = useContext(DarkThemeContext);
  return context;
};
