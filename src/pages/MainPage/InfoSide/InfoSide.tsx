import React from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';

import { ReactComponent as MenuBtn } from "assets/images/menuBtn.svg";
import { Button } from "components";
import Footer from "./Footer";
import marker from "assets/images/marker.svg";
import { setSidebarOpen } from 'store/commonSettings/actions';
import { getSidebarOpen } from 'store/commonSettings/selectors';

const InfoSide: React.FC = () => {

  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector(getSidebarOpen);

  const toggleSidebarHandler = () => {
    dispatch(setSidebarOpen(!sidebarOpen))
  }
  return (
    <div className="lg:basis-1/2 w-full min-h-[90%] sm:my-auto pt-4 sm:mx-12 flex justify-between flex-col">
      <div className="flex justify-between sm:items-center items-center px-4">
        <Button onClick={toggleSidebarHandler} className="sm:hidden z-30">
          <MenuBtn className={`fill-black ${sidebarOpen ? "stroke-white" : "stroke-black"}`} />
        </Button>
        <div className="flex flex-col sm:flex-row sm:justify-between w-full items-end sm:items-center">
          <div className="font-bold text-primary-green  text-3xl">Need For Drive</div>
          <div className="flex mt-2 sm:m-0">
            <img src={marker} alt="marker" />
            <span className="ml-2 text-dark-gray text-sm">Ульяновск</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="px-4">
            <div className="leading-[4.375rem]">
              <h1 className="font-bold text-5xl sm:text-[4.375rem]">Каршеринг</h1>
              <h2 className="font-bold text-5xl text-primary-green sm:text-[4.375rem]">
                Need for drive
              </h2>
            </div>
            <p className="font-light text-dark-gray text-lg sm:text-[1.625rem] my-4 sm:my-8">
              Поминутная аренда авто твоего города
            </p>
          </div>
        </div>
        <Button
          className="px-10 py-2 w-full sm:w-auto rounded-none sm:rounded rounded-lg"
          apperance="primary">
          Забронировать
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default InfoSide;