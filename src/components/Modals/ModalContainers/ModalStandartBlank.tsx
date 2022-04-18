import React from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'components';
import styles from "./ModalStandartBlank.module.scss";

interface IModalStandartBlank {
    confirmHandler: (data: any) => void,
    cancelHanlder: (data: any) => void,
    className?: string,
    title: string
}

const ModalStandartBlank: React.FC<IModalStandartBlank> = ({ 
    confirmHandler, 
    cancelHanlder, 
    className, 
    title 
}) => {

    const { t } = useTranslation();

    return (
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentTitle}>
              {title}
          </div>
          <div className={styles.contentButtonWrapper}>
            <Button onClick={confirmHandler} apperance="primary">
              {t('Confirm')}
            </Button>
            <Button
              onClick={cancelHanlder}
              apperance="primary"
              gradientFrom="#493013"
              gradientTo="#7B0C3B">
              {t('Return')}
            </Button>
          </div>
        </div>
      </div>
    );
}

export default ModalStandartBlank;