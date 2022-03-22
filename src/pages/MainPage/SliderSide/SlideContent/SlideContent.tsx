import React from 'react';

import { Button } from 'components';
import type { ISlide } from '../types';
import styles from "./SlideContent.module.css";

const SlideContent: React.FC<ISlide> = ({image, title, subtitle, button}) => {

    return (
      <div style={{ backgroundImage: `url(${image})` }} className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <Button
            apperance='primary'
            gradientFrom={button.gradientFrom}
            gradientTo={button.gradientTo}
            className={styles.button}
          >
              {button.text}
          </Button>
        </div>
      </div>
    );
}

export default SlideContent;