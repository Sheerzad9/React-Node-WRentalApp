import { useState } from "react";
import classes from "./Menu.module.css";
import profileAvatar from "../../assets/avatars/account-avatar-profile.svg";

const Menu: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between py-8 bg-[#FDF2E9]">
      <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a>
      <div className="flex items-center justify-between gap-12">
        <span>
          <img className="h-15 w-12" src={profileAvatar}></img>
        </span>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden mr-5">
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
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-5 text-[20px]">
            <li className="hover:text-[24px] hover:underline duration-300">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-[24px] hover:underline duration-300">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="hover:text-[24px] hover:underline duration-300">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
