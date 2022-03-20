import React from 'react';

import { Button } from 'components';
import type { ISlide } from '../types';

const SlideContent: React.FC<ISlide> = ({image, title, subtitle, button}) => {

    return (
      <div style={{ backgroundImage: `url(${image})` }} className="h-full bg-cover flex items-center p-12">
        <div className='max-w-[31rem] mx-auto my-0'>
          <h1 className="text-white text-[2.5rem] leading-[100%]">{title}</h1>
          <h2 className="text-light-gray font-light text-2xl my-6 leading-[100%]">{subtitle}</h2>
          <Button
            apperance='primary'
            gradientFrom={button.gradientFrom}
            gradientTo={button.gradientTo}
            className="px-6 py-2"
          >
              {button.text}
          </Button>
        </div>
      </div>
    );
}

export default SlideContent;