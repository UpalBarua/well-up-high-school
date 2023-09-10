import Image from "next/image";
import { useState } from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { GiTireIronCross } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <nav className="relative bg-white shadow dark:bg-gray-800 h-[300px] lg:h-[60px]">
        <div className="container px-6 py-3 mx-auto md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <a href="#">
              <Image
                src="https://wellup.ro/wp-content/uploads/2021/12/wellup-logo-e1643381957898.png"
                alt=""
                width={70}
                height={70}
              ></Image>
            </a>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <BsReverseLayoutTextSidebarReverse className="text-[1.2rem] font-bold text-red-600 mt-3"></BsReverseLayoutTextSidebarReverse>
                ) : (
                  <GiTireIronCross className="text-[1.2rem] font-bold text-red-600 mt-3"></GiTireIronCross>
                )}
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-4`}
          >
            <Menubar className="border-none flex items-start justify-start flex-col md:flex-row">
              {/* Menu items go here */}
              {/* for gallery */}
              <MenubarMenu>
                <MenubarTrigger className="text-[1rem] ml-2">
                  Gallery
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Photo</MenubarItem>
                  <MenubarItem>Video</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* for administrator */}
              <MenubarMenu>
                <MenubarTrigger className="text-[1rem]">
                  administrator
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Teachers</MenubarItem>
                  <MenubarItem>Management</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* for notice  */}
              <MenubarMenu>
                <MenubarTrigger className="text-[1rem]">notice</MenubarTrigger>
                <MenubarContent>
                  {" "}
                  <MenubarItem>Student Notice</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* for academic */}
              <MenubarMenu>
                <MenubarTrigger className="text-[1rem]">
                  Academic
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Student Notice</MenubarItem>
                  <MenubarItem>Routine</MenubarItem>
                  <MenubarItem>Suggestion</MenubarItem>
                  <MenubarItem>Student Result</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              {/* authentication button */}
              <MenubarMenu>
                <MenubarTrigger className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                  SignIn
                </MenubarTrigger>
              </MenubarMenu>
              {/* for user */}
              <MenubarMenu>
                <MenubarTrigger>
                  <GrUserManager className="text-[1.2rem] text-red-600 ml-3"></GrUserManager>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Profile</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
