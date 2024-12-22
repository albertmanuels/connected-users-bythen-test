import { useAppContext } from "@/components/layouts/AppLayout/App.context";
import Image from "next/image";
import React from "react";
import MenuIcon from "@/public/icons/menu.svg";

const Header = () => {
  const { isSidebarShow, setIsSidebarShow } = useAppContext();

  return (
    <header className="flex h-fit bg-gray-500 px-4 py-2">
      <button
        className={`mr-4 block sm:hidden`}
        onClick={() => setIsSidebarShow(!isSidebarShow)}
      >
        <Image src={MenuIcon} width={30} height={30} alt="menu icon" />
      </button>
      <h3>Header</h3>
    </header>
  );
};

export default Header;
