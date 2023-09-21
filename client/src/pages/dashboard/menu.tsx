import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

const home = [
  { name: "Link 1", path: "" },
  { name: "Link 2", path: "" },
  { name: "Link 3", path: "" },
];
const projects = [
  { name: "Link 4", path: "" },
  { name: "Link 5", path: "" },
  { name: "Link 6", path: "" },
];

const team = [
  { name: "Link 7", path: "" },
  { name: "Link 8", path: "" },
  { name: "Link 9", path: "" },
];

const Menu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string | undefined>(undefined);

  const toggleDropdown = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };
  const handleLink = (value: any) => {
    setActiveLink(value.target.innerText);
  };

  return (
    <nav>
      <h2 className="uppercase py-2">
        <span className="font-bold text-2xl tracking-wide text-cyan-600">
          well-up
        </span>
        <br />
        <span className="font-semibold text-sm text-gray-500 tracking-widest">
          high school
        </span>
      </h2>

      <div className="relative">
        <Button
          variant="ghost"
          className={`flex items-center justify-between w-full p-0 text-left text-md hover:bg-transparent ${
            activeDropdown === "home" ? "active" : ""
          }`}
          onClick={() => toggleDropdown("home")}
        >
          Home
          <span>
            {activeDropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </Button>
        {activeDropdown === "home" && (
          <DropdownMenu>
            {home.map((link, index) => (
              <Link href={link.path} key={index} onClick={handleLink}>
                <span className="flex items-center py-2 px-0 hover:bg-gray-200 hover:px-3 duration-300 rounded">
                  {link.name === activeLink ? <RxDotFilled /> : ""}
                  {link.name}
                </span>
              </Link>
            ))}
          </DropdownMenu>
        )}
      </div>

      <div className="relative mt-2">
        <Button
          variant="ghost"
          className={`flex items-center justify-between w-full p-0 text-left text-md hover:bg-transparent ${
            activeDropdown === "projects" ? "active" : ""
          }`}
          onClick={() => toggleDropdown("projects")}
        >
          Projects
          <span>
            {activeDropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </Button>
        {activeDropdown === "projects" && (
          <DropdownMenu>
            {projects.map((link, index) => (
              <Link href={link.path} key={index} onClick={handleLink}>
                <span className="flex items-center py-2 px-0 hover:bg-gray-200 hover:px-3 duration-300 rounded">
                  {link.name === activeLink ? <RxDotFilled /> : ""}
                  {link.name}
                </span>
              </Link>
            ))}
          </DropdownMenu>
        )}
      </div>

      <div className="relative mt-2">
        <Button
          variant="ghost"
          className={`flex items-center justify-between w-full p-0 text-left text-md  hover:bg-transparent ${
            activeDropdown === "team" ? "active" : ""
          }`}
          onClick={() => toggleDropdown("team")}
        >
          Team
          <span>
            {activeDropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </Button>
        {activeDropdown === "team" && (
          <DropdownMenu>
            {team.map((link, index) => (
              <Link href={link.path} key={index} onClick={handleLink}>
                <div className="flex items-center py-2 px-0 hover:bg-gray-200 hover:px-3 duration-300 rounded">
                  <span className="pointer-events-none">
                    {link.name === activeLink ? <RxDotFilled /> : ""}
                  </span>
                  {link.name}
                </div>
              </Link>
            ))}
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Menu;
