import { useEffect, useState } from "react";
import NavLayout from "../../layouts/NavLayout";

import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  const togleDarkMod = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <NavLayout>
      <div className="gap-x-[45px] text-lg flex md:flex-row flex-col items-center justify-center pl-28 md:pl-0">
        <h1 className="font-bold">Aplikasi Quiz</h1>
        <ul className="flex flex-row gap-x-[30px] ">
          <a href="/" className="cursor-pointer">
            About
          </a>
          <a href="/modul" className="cursor-pointer">
            Modul
          </a>
          <a href="/quiz" className="cursor-pointer">
            Quiz
          </a>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-x-5">
        {theme === "dark" ? (
          <BsSun onClick={togleDarkMod} className="cursor-pointer " size={25} />
        ) : (
          <BsMoon onClick={togleDarkMod} size={20} />
        )}

        <h1 className="hidden md:block text-lg">Gibran Farras</h1>
      </div>
    </NavLayout>
  );
};

export default Navbar;
