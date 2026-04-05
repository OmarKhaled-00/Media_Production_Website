import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import MenuBtn from "../MenuBtn/MenuBtn";
function Header() {
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-[#3b82f6] hover:text-black font-bold" : "text-white";

  return (
    <div>
      <header className="absolute top-0 z-50 flex max-h-30 w-full items-center justify-around gap-5 max-md:justify-between max-md:px-3">
        <a href="/" className="animate__animated animate__fadeInDown block">
          <img src={logo} className="h-fit w-50" alt="" />
        </a>

        <nav className="animate__animated animate__fadeInDown flex h-fit w-fit justify-center gap-20 *:cursor-pointer *:text-xl *:font-bold *:capitalize *:hover:text-cyan-600 max-md:hidden">
          <NavLink className={navLinkClass} to="/">
            Home
          </NavLink>
          <HashLink className="text-white" smooth to="/#services">
            Services
          </HashLink>
          <HashLink className="text-white" smooth to="/#about">
            About Us
          </HashLink>
          <a href="" className="text-white">
            Portfolio
          </a>
        </nav>
        <div className="max-md:flex md:hidden">
          <MenuBtn />
        </div>
      </header>
    </div>
  );
}

export default Header;
