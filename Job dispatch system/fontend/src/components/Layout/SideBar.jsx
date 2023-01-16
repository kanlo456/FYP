import { useState } from "react";
import controlicon from "../../assets/control.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen bg-dark-purple relative`}
      >
        <img
          src={controlicon}
          className={`absolute cursor-pointer rounded-full 
          -right-3 top-9 w-7 border-2 border-dark-purple"
          ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="p-7 flex-1 text-2x1 font-semibold h-screen">
        <h1>User Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;
