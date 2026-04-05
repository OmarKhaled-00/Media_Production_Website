import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

function MenuBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `${isActive ? "text-cyan-500 border-cyan-500 hover:border-red-500 hover:text-red-500" : "text-white border-white hover:border-cyan-500 hover:text-cyan-500"} animate__animated animate__fadeInUp border-b  `;

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex cursor-pointer flex-col items-end justify-between gap-1 *:h-1.5 *:rounded-md *:bg-white hover:*:bg-cyan-500"
        >
          <span className="w-8"></span>
          <span className="w-4 group-hover:w-8"></span>
          <span className="w-8"></span>
        </button>
        <nav
          className={` ${isOpen ? "flex" : "hidden"} absolute top-12 right-0 w-40 flex-col gap-2 rounded-md bg-black *:p-3`}
        >
          <NavLink
            style={{ animationDelay: "0.1s" }}
            className={navLinkClass}
            to="/"
          >
            Home
          </NavLink>
          <HashLink
            style={{ animationDelay: "0.2s" }}
            className="animate__animated animate__fadeInUp border-b border-white text-white hover:border-cyan-500 hover:text-cyan-500"
            smooth
            to="/#services"
          >
            Services
          </HashLink>
          <HashLink
            style={{ animationDelay: "0.3s" }}
            className="animate__animated animate__fadeInUp border-b border-white text-white hover:border-cyan-500 hover:text-cyan-500"
            smooth
            to="/#about"
          >
            About Us
          </HashLink>
          <a
            style={{ animationDelay: "0.4s" }}
            href=""
            className="animate__animated animate__fadeInUp text-white hover:text-cyan-500"
          >
            Portfolio
          </a>
        </nav>
      </div>
    </>
  );
}

export default MenuBtn;
