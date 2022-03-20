import React from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as TelegramIcon } from "assets/images/TelegramIcon.svg";
import { ReactComponent as InstagramIcon } from "assets/images/InstagramIcon.svg";
import { ReactComponent as FacebookIcon } from "assets/images/FacebookIcon.svg";


interface ISidebarNav {
  sidebarOpen: boolean
}

const SidebarNav: React.FC<ISidebarNav> = ({sidebarOpen}) => {

  return (
    <div
      className={`bg-[#111518] absolute lg:w-[50%] w-full h-full z-30 ${
        sidebarOpen ? 'right-0 lg:right-[50%]' : 'right-[100%]'
      } transition-all duration-300`}>
      <nav className="flex h-full flex-col justify-center ml-10 sm:ml-24">
        <ul className="flex flex-col">
          <li>
            <Link
              className="text-[2rem] text-white hover:text-primary-green transition uppercase"
              to="/">
              Парковка
            </Link>
          </li>
          <li>
            <Link
              className="text-[2rem] text-white hover:text-primary-green transition uppercase"
              to="/">
              Страховка
            </Link>
          </li>
          <li>
            <Link
              className="text-[2rem] text-white hover:text-primary-green transition uppercase"
              to="/">
              Бензин
            </Link>
          </li>
          <li>
            <Link
              className="text-[2rem] text-white hover:text-primary-green transition uppercase"
              to="/">
              Обслуживание
            </Link>
          </li>
        </ul>
        <ul className="flex mt-9">
          <li>
            <Link to="/">
              <TelegramIcon className="fill-white hover:fill-black" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <InstagramIcon className="fill-white hover:fill-primary-green mx-6" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FacebookIcon className="fill-white hover:fill-primary-green" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SidebarNav 