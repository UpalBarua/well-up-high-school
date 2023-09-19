import Menu from "./menu";
import { BiBookContent } from "react-icons/bi";

const DashNav = () => {
  return (
    <div className=" grid grid-cols-5">
      <div id="sideNav" className="col-span-1 sticky top-0 h-screen">
        <Menu />
      </div>
      <div
        id="rendering-components"
        className="col-span-4 px-5 flex justify-center items-center h-screen"
      >
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          Content will show here <BiBookContent />
        </h2>
      </div>
    </div>
  );
};

export default DashNav;
