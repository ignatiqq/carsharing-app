import React from 'react'

import menuBtn from "assets/images/menu_btn.svg";
import Button from 'components/Button/Button';

const Sidebar = () => {
  return (
    <div className='bg-[#111518] h-full flex justify-center min-w-[65px]'>
        <div className="flex flex-col justify-between items-center min-h-[90%] max-h-[90%] my-auto">
          <Button clickHandler={() => console.log('123')}>
            <img src={menuBtn} />
          </Button>
          <Button
            clickHandler={() => console.log('123')}
            transparent={true}
            customClassName="text-primary-green">
            Eng
          </Button>
        </div>
    </div>
  );
}

export default Sidebar;