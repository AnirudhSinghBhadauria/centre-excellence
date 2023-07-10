"use client"

import React, {
  ReactNode,
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";
import { INITIAL_STATE, appReducer } from "./stateHandeler";
import { usePathname } from "next/navigation";

interface Value {
  sidebarState: boolean;
  sideBarHandeler: (value: boolean) => void;
}

export const AppContext = createContext<Value>({
  sidebarState: false,
  sideBarHandeler: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
  const pathname = usePathname();

  const { sidebarState } = state;

  // CHANGING COLORS CONDITIONALLY------------------
  useEffect(() => {
    if (pathname === "/About") {
      document.documentElement.style.setProperty("--active", "#16161D");
      document.documentElement.style.setProperty("--muted", "#EEEAEA");
    } else {
      document.documentElement.style.setProperty("--active", "#EEEAEA");
      document.documentElement.style.setProperty("--muted", "#16161D");
    }
  }, [pathname]);

  const sideBarHandeler = (value: boolean) =>
    dispatch({ type: "SIDE-STATE", payload: value });

  let value: Value = {
    sideBarHandeler,
    sidebarState,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

//util hook for using context!
export const useAppContext = () => useContext(AppContext);
