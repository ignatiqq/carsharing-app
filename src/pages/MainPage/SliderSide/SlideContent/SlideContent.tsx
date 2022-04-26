import React from 'react';

import { Button } from 'components';
import type { ISlide } from '../types';
import styles from "./SlideContent.module.scss";
import { useTranslation } from 'react-i18next';

const SlideContent: React.FC<ISlide> = ({image, title, subtitle, button}) => {

    const { t } = useTranslation();

    return (
      <div style={{ backgroundImage: `url(${image})` }} className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t(`${title}`)}</h1>
          <h2 className={styles.subtitle}>{t(`${subtitle}`)}</h2>
          <Button
            apperance='primary'
            gradientFrom={button.gradientFrom}
            gradientTo={button.gradientTo}
            className={styles.button}
          >
              {t(`${button.text}`)}
          </Button>
        </div>
      </div>
    );
}

export default SlideContent;