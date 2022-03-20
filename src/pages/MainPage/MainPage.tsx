import React from 'react';

import { Sidebar } from "components"
import { InfoSide, SliderSide } from ".";

const MainPage: React.FC = () => {
  return (
    <section className="w-full h-screen flex">
      <Sidebar />
      <InfoSide />
      <SliderSide />
    </section>
  );
}

export default MainPage;