import React from 'react';
import { Button, Sidebar } from "components"

const MainPage: React.FC = () => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="basis-1/2 min-h-[90%] my-auto mx-12 flex justify-between flex-col">
        <div className="flex justify-between items-center">
          <div className="font-bold text-primary-green text-3xl">Need For Drive</div>
          <div>Ульяновск</div>
        </div>
        <div>
          <div>
            <div className="leading-[4.375rem]">
              <h1 className="font-bold text-[4.375rem]">Каршеринг</h1>
              <h2 className="font-bold text-primary-green text-[4.375rem]">Need for drive</h2>
            </div>
            <p className="font-light text-dark-gray text-[1.625rem] my-8">
              Поминутная аренда авто твоего города
            </p>
          </div>
          <Button
            gradientFrom="primary-green"
            gradientTo="#039F67"
            clickHandler={() => console.log(123)}>
            Забронировать
          </Button>
        </div>
        <div className='flex justify-between'>
          <div className='text-dark-gray text-[0.8rem]'>
            © 2016-2019 «Need for drive»
          </div>
          <div className='text-primary-black text-[0.8rem]'>
            8 (495) 234-22-44
          </div>
        </div>
      </div>
      <div className="basis-1/2">Slider</div>
    </div>
  );
}

export default MainPage;