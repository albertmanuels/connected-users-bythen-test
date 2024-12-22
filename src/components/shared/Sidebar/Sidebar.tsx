import { useAppContext } from "@/components/layouts/AppLayout/App.context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import VerifiedLogo from "@/public/icons/verified.svg";
import MenuIcon from "@/public/icons/menu.svg";

const menus = [
  {
    title: "Connections",
    href: "/connections",
    logo: VerifiedLogo,
  },
];

const Sidebar = () => {
  const { isSidebarShow, setIsSidebarShow } = useAppContext();

  return (
    <div
      className={`min-h-[100vh] bg-pink-500 ${
        isSidebarShow
          ? "fixed z-10 w-[74vw] py-2 sm:relative sm:z-auto sm:block sm:w-fit sm:min-w-fit"
          : "hidden sm:block sm:w-[60px] sm:text-center"
      } `}
    >
      <aside className={`h-full break-words px-4 sm:relative`}>
        <button
          onClick={() => setIsSidebarShow(!isSidebarShow)}
          className="mb-2 block sm:hidden"
        >
          <Image src={MenuIcon} width={30} height={30} alt="menu icon" />
        </button>

        <Link href="/" className="flex items-center gap-2">
          <div className="block">
            <Image
              src={VerifiedLogo}
              alt="logo"
              width={0}
              height={0}
              className="inline-block h-[40px] w-[40px]"
            />
          </div>

          {isSidebarShow && "Reqmi"}
        </Link>
        <ul>
          {menus.map((menu) => (
            <li key={menu.title} className="mb-4 inline-block">
              <Link href={menu.href}>
                <Image
                  src={menu.logo}
                  alt="link icon"
                  width={40}
                  height={40}
                  className="mr-2 inline-block"
                />
                {isSidebarShow && menu.title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="relative bottom-0 left-0 hidden sm:block"
          onClick={() => setIsSidebarShow(!isSidebarShow)}
        >
          Hide
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;
