import React from 'react';

import { Button } from "components";
import styles from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  return (
    <div className={styles.wrapper}>
        <Button
            className={styles.button}>
            Eng
        </Button>
    </div>
  )
}

export default LanguageSelector