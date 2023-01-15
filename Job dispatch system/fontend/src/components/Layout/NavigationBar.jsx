import { NavLink } from "react-router-dom";
import WSIGicon from "../../assets/WSIGicon.png";

const NavigationBar = () => {
  return (
    <header className="">
        <nav className="border-black border-2 w-1/5 bg-amber-600 h-screen">
            <img src={WSIGicon} className="w-2/6"/>
            <p>WSIG Ticket System</p>
            <ul className="grid grid-cols-1 gap-y-4 bottom-full">
                <li className="top-40">
                    <NavLink>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink >Ticket</NavLink>
                </li>
                <li>
                    <NavLink >3</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default NavigationBar;
