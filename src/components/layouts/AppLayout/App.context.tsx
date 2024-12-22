import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
} from "react";

type AppContextProps = {
  isSidebarShow: boolean;
  setIsSidebarShow: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarShow, setIsSidebarShow] = useState(true);

  return (
    <AppContext.Provider value={{ isSidebarShow, setIsSidebarShow }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  const { isSidebarShow, setIsSidebarShow } = context;

  return {
    isSidebarShow,
    setIsSidebarShow,
  };
};
