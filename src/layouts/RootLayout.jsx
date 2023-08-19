import { BiSolidUserCircle } from "react-icons/bi";
import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const RootLayout = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav((openNav) => !openNav);
  };
  return (
    <>
      <ScrollRestoration />
      <header>
        <NavLink to="/">
          <h1 className="logo">mkhotami</h1>
        </NavLink>
        <ul
          className={`nav ${openNav ? "block" : "hidden"}`}
          onClick={toggleNav}
        >
          <li className="nav-list">
            <NavLink to="/">home</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="learnReact">Learn React</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="projects">Projects</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="me">
              <BiSolidUserCircle className="text-2xl" />
            </NavLink>
          </li>
        </ul>
        <div className={`block md:hidden text-xl `} onClick={toggleNav}>
          {openNav ? <FaTimes /> : <FaBars />}
        </div>
      </header>
      <Outlet />
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
};

export default RootLayout;
