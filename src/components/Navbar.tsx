import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets.ts";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/collection", label: "Collection" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white relative">
      <img src={assets.logo} alt="logo" className="h-10 z-10" />
      <button
        className="md:hidden z-10"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul
        className={`flex flex-col text-center md:flex-row space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-[100%] left-0 w-full md:w-auto bg-white px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `w-1/3 md:w-full mx-auto md:mx-4 relative group text-gray-700 font-medium transition duration-300 ${
                isActive ? "text-black" : "hover:text-black"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </>
            )}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar