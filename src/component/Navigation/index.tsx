import { useState, useMemo } from "react";
import { BsList } from "react-icons/bs";
import NavItem from "./component/NavItem";

type Item = {
  name: string;
  url?: string;
};

const NAVS: Item[] = [
  {
    name: "Home",
    url: "",
  },
  {
    name: "About",
    url: "",
  },
  {
    name: "Tech Stack",
    url: "",
  },
  {
    name: "Education",
    url: "",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const populateNav = useMemo(() => {
    return NAVS.map((val, i) => <NavItem name={val.name} key={i.toString()} />);
  }, [NAVS]);

  const displayNav = useMemo(() => {
    if (isOpen) {
      return (
        <ul className=" z-auto visible fixed top-11 left-7 p-5 lg:invisible bg-slate-800">
          {populateNav}
        </ul>
      );
    }
  }, [isOpen]);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav className=" fixed flex max-sm:flex-none">
        {displayNav}
        <ul className=" max-sm:visible lg:invisible">
          <li className="  p-4 list-none"></li>
        </ul>
        <ul className="max-sm:invisible flex">{populateNav}</ul>
      </nav>
      <button
        className=" p-5 fixed text-white font-bold text-2xl top-1 left-2 md:invisible lg:invisible"
        onClick={() => handleOpen()}
      >
        <BsList />
      </button>
    </>
  );
}
