import React from "react";
import avatar2 from "../../assets/logo.jpg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import BtnAddTask from "../Utilities/BtnAddTask";
import Directories from "./Directories/Directories";
import NavLinks from "./NavLinks";
import LayoutMenus from "../Utilities/LayoutMenus";

const classLinkActive =
  "text-rose-600 bg-violet-100 border-r-4 border-rose-500 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";

const Menu: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuHeaderOpened);
  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuHeader());
  };
  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="left-0"
    >
      <header className="h-full flex flex-col">
        {/*<h1 className="font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block">
          To-do list</h1>*/}
        <img src={avatar2} alt="cat" className="w-63 ml-4 mt-5" />
        <BtnAddTask className="my-8 mx-4" />
        <NavLinks classActive={classLinkActive} />
        <Directories classActive={classLinkActive} />
      </header>
    </LayoutMenus>
  );
};

export default Menu;
