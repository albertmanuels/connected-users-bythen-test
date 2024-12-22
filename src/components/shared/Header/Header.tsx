import { useAppContext } from "@/components/layouts/AppLayout/App.context";
import React, { ReactNode } from "react";
import { MdMenu } from "react-icons/md";

const Header = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  const { isSidebarShow, setIsSidebarShow } = useAppContext();

  return (
    <header
      className={`fixed flex w-full items-center bg-slate-200 px-4 sm:pl-4 ${isSidebarShow ? "z-[-1] sm:z-auto" : "z-auto"} ${className}`}
    >
      <button
        className={`mr-4 block sm:hidden`}
        onClick={() => setIsSidebarShow(!isSidebarShow)}
      >
        <MdMenu size={30} />
      </button>
      {children}
    </header>
  );
};

export default Header;
