"use client";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { modalActions } from "../../store/modal-slice";
import Image from "next/image";
import classes from "./Menu.module.css";
import profileAvatar from "../../public/avatars/account-avatar-profile.svg";
import logo from "./../../app/assets/logo.png";

const Menu: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const handleLoginModal = () => {
    dispatch(modalActions.openModal());
  };

  return (
    <div className="flex items-center justify-between py-8 bg-[#FDF2E9]">
      <a href="/">
        <Image width={155} height={155} src={logo} alt="logo" />
      </a>
      <div className="flex items-center justify-between gap-12">
        <span>
          <Image
            alt="image of profile"
            className="drop-shadow-xl h-20 w-32 hover:skew-y-12 hover:h-18 duration-500"
            src={profileAvatar}
          />
        </span>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden mr-16">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div
              className={
                "bg-[#FDF2E9] " +
                (isNavOpen ? classes.showMenuNav : classes.hideMenuNav)
              }
            >
              {" "}
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase cursor-pointer">
                  <a onClick={handleLoginModal}>Kirjaudu sisään</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-20 text-[20px]">
            <li className="hover:text-[24px] hover:underline duration-300 font-medium">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-[24px] hover:underline duration-300 font-medium">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="hover:text-[24px] hover:underline duration-300 font-medium cursor-pointer">
              <a onClick={handleLoginModal}>Kirjaudu sisään</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
