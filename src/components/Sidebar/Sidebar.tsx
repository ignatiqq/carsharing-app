import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { ReactComponent as MenuBtn } from "assets/images/menuBtn.svg";
import Button from 'components/Button/Button';
import SidebarNav from './SidebarNav';

import { setSidebarOpen } from 'store/commonSettings/actions';
import { getSidebarOpen } from 'store/commonSettings/selectors';

const Sidebar = () => {

  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector(getSidebarOpen);


  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if(sidebarOpen && e.key === "Escape"){
        dispatch(setSidebarOpen(false))
      }
    }
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  })

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if((e.target as HTMLElement).tagName === "A" || ((e.target as HTMLElement).parentNode as HTMLElement).tagName === "A") {
        dispatch(setSidebarOpen(false))
      }
    }
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [])

  const sidebarOpenHanlder = () => {
      if(!sidebarOpen) {
        dispatch(setSidebarOpen(true));
      } else {
        dispatch(setSidebarOpen(false));
      }
  }

  return (
    <aside>
      <SidebarNav sidebarOpen={sidebarOpen} />
     {sidebarOpen && <div className="absolute top-0 left-0 w-full h-full z-20 transition bg-[rgba(17,21,24,.80)]"></div>}
      <div className={`sm:bg-[#111518] h-full absolute sm:relative flex justify-center min-w-[65px]`}>
          <div className="flex flex-col justify-between items-center min-h-[90%] max-h-[90%] my-auto">
            <Button onClick={sidebarOpenHanlder} className='z-30 hidden sm:block'>
              <MenuBtn className="stroke-white" />
            </Button>
            <Button
              className="text-primary-green hidden lg:block hover:border border-white rounded-full w-[40px] h-[40px] transition">
              Eng
            </Button>
          </div>
      </div>
    </aside>
  );
}

export default Sidebar;