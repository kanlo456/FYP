import { useState } from "react";
import controlicon from "../../assets/control.png";
import logo from "../../assets/WSIGicon.png";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  const [open, setOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", src: "Chart_fill" ,to:'/'},
    { title: "Ticket", src: "Chat" ,to:'/src/pages/'},
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen pt-8 p-5 bg-dark-purple relative`}
      >
        <img
          src={controlicon}
          className={`absolute cursor-pointer rounded-full 
          -right-3 top-9 w-7 border-2 border-dark-purple"
          ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 w-9 ${
              open && "rotate-[360deg]"
            }`}
          ></img>
          <h1
            className={`text-white origin-left font-medium text-x1 duration-300 ${
              !open && "scale-0"
            }`}
          >
            WSIG Ticket System
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <Link
              to='/'
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              <img src={`src/assets/${menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
      <div className="p-7 flex-1 text-2x1 font-semibold h-screen">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default Sidebar;
