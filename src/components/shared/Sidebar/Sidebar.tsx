import { useAppContext } from "@/components/layouts/AppLayout/App.context";
import Link from "next/link";
import React from "react";

import {
  MdChevronLeft,
  MdMenu,
  MdOutlineVerifiedUser,
  MdPeople,
} from "react-icons/md";

const menus = [
  {
    title: "Connections",
    href: "/connections",
    logo: MdPeople,
  },
];

const Sidebar = () => {
  const { isSidebarShow, setIsSidebarShow } = useAppContext();

  const onClose = () => setIsSidebarShow(false);
  const onToggle = () => setIsSidebarShow(!isSidebarShow);

  return (
    <div className="relative min-h-[100vh]">
      <div
        className={`min-h-[100vh] bg-indigo-950 py-2 ${
          isSidebarShow
            ? "fixed z-10 w-[74vw] sm:relative sm:z-auto sm:inline-block sm:w-[20vw] sm:min-w-fit"
            : "hidden sm:block sm:w-[60px] sm:text-center"
        } `}
      >
        <aside
          className={`flex h-full flex-col break-words sm:relative ${isSidebarShow ? "px-4" : "px-0"}`}
        >
          <button onClick={onToggle} className="mb-2 mb-8 mt-1 block sm:hidden">
            <MdMenu color="white" size={30} />
          </button>

          <Link
            href="/"
            className="md:text-md mb-10 text-sm text-white"
            onClick={onClose}
          >
            <MdOutlineVerifiedUser
              size={40}
              className="mr-2 inline-block"
              color="white"
            />
            {isSidebarShow && "Reqmi"}
          </Link>
          <ul>
            {menus.map((menu) => (
              <li key={menu.title} className="mb-4 inline-block">
                <Link
                  href={menu.href}
                  className="md:text-md text-sm text-white"
                  onClick={onClose}
                >
                  <menu.logo
                    size={40}
                    className="mr-2 inline-block"
                    color="white"
                  />
                  {isSidebarShow && menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <button
          className="absolute bottom-4 right-[50%] flex hidden text-white sm:inline-block"
          onClick={onToggle}
        >
          <MdChevronLeft className="inline-block" size={25} />
          {isSidebarShow ? "Hide" : ""}
        </button>
      </div>
      {isSidebarShow && (
        <div
          className="z-8 fixed inset-0 w-full bg-black bg-opacity-50 backdrop-blur-sm sm:hidden"
          onClick={onClose}
        />
      )}
    </div>
  );
};

export default Sidebar;
