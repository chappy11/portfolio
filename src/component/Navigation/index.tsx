import { useState, useMemo } from "react";
import { BsList } from "react-icons/bs";
import NavItem from "./component/NavItem";
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const displayNav = useMemo(() => {
    if (isOpen) {
      return (
        <ul className=" z-50 visible fixed top-11 left-7 bg-slate-400 p-5 lg:invisible">
          <NavItem name="Home" />
          <NavItem name="About" />
          <NavItem name="Tech Stack" />
        </ul>
      );
    }
  }, [isOpen]);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav className=" flex max-sm:flex-none">
        {displayNav}
        <ul className=" max-sm:visible lg:invisible">
          <li className="  p-4 list-none"></li>
        </ul>
        <ul className="max-sm:invisible flex">
          <NavItem name="Home" />
          <NavItem name="About" />
          <NavItem name="Tech Stack" />
        </ul>
      </nav>
      <button
        className=" p-5 fixed top-1 left-2 lg:invisible"
        onClick={() => handleOpen()}
      >
        <BsList />
      </button>
    </>
  );
}
