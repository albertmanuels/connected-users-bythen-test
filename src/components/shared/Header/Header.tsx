import { useAppContext } from "@/components/layouts/AppLayout/App.context";
import Image from "next/image";
import React from "react";
import SearchIcon from "@/public/icons/search.svg";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const { isSidebarShow, setIsSidebarShow } = useAppContext();

  return (
    <header
      className={`fixed flex w-full items-center bg-slate-200 px-4 py-2 sm:pl-4 ${isSidebarShow ? "z-[-1] sm:z-auto" : "z-auto"}`}
    >
      <button
        className={`mr-4 block sm:hidden`}
        onClick={() => setIsSidebarShow(!isSidebarShow)}
      >
        <MdMenu size={30} />
      </button>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search here"
          className="w-[60vw] rounded-md px-3 py-2 md:w-[20vw]"
        />
        <Image
          src={SearchIcon}
          width={30}
          height={30}
          alt="search icon"
          className="sm:hidden"
        />
      </div>
    </header>
  );
};

export default Header;
