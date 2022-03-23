import React from 'react';

import classNames from 'classnames';
import { Button } from "components";
import styles from "./LanguageSelector.module.css";

interface ILanguageSelector {
  className?: string
}

const LanguageSelector: React.FC<ILanguageSelector> = ({className}) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
        <Button
            className={styles.button}>
            Eng
        </Button>
    </div>
  )
}

export default LanguageSelector