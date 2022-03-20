import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="flex-col sm:flex-row bg-black sm:bg-transparent flex sm:justify-between items-end sm:items-center p-6 sm:p-0">
      <div className="sm:text-dark-gray text-[#EEEEEE] text-[0.8rem]">© 2016-2019 «Need for drive»</div>
      <div className="sm:text-primary-black text-primary-green text-[0.8rem]">8 (495) 234-22-44</div>
    </div>
  );
}

export default Footer;