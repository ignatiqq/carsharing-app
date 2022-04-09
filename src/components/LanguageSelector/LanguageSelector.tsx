import React, {useState, useRef, useEffect} from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import type { ILanguages, ILanguage } from './languages';
import { Button } from "components";
import styles from "./LanguageSelector.module.css";
import FlagOfRussia from "assets/images/FlagOfRussia.png";
import FlagOfUsa from "assets/images/FlagOfUsa.png";

interface ILanguageSelector {
  className?: string,
  languages: ILanguages
}

const LanguageSelector: React.FC<ILanguageSelector> = ({className, languages}) => {
  const [popupOpened, setPopupOpened] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const popup = useRef<HTMLDivElement | null>(null);

  const { i18n } = useTranslation();

  const changeLanguageHandler = (item: ILanguage) => {
    i18n.changeLanguage(item.language);
    setSelectedLanguage(item.label);
    setPopupOpened(false);
  }

  useEffect(() => {
    if(languages) {
      const currentLanguage = localStorage.getItem("i18nextLng");
      const languageToSet = languages.find(item => item.language === currentLanguage);
      if(languageToSet) {
        setSelectedLanguage(languageToSet.label)
      } 
    }
  }, [])

  useEffect(() => {
    if(popup && popup.current) {
      const clickHandler = (e: Event) => {
        const path = e.composedPath();
        if(!path.includes(popup.current as EventTarget)) {
          setPopupOpened(false)
        }
      }
      window.addEventListener("click", clickHandler);
      return () => window.removeEventListener("click", clickHandler);
    }
  }, [popup])

  const openPopupHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPopupOpened((prev) => !prev);
  }

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div
        ref={popup}
        className={classNames(styles.popup, {
          [styles.popupOpened]: popupOpened,
        })}>
        {languages &&
          languages.map((item) => (
            <Button
              onClick={() => changeLanguageHandler(item)}
              className={classNames(styles.languageBtn)}
              key={item.id}>
              <span>{item.label}</span>
              {
                <img
                  className={styles.imageFlag}
                  src={item.language === 'ru' ? FlagOfRussia : FlagOfUsa}
                />
              }
            </Button>
          ))}
      </div>
      <div onClick={openPopupHandler} className={classNames(styles.wrapper)}>
        <Button className={styles.button}>
          {selectedLanguage ? selectedLanguage: i18n.resolvedLanguage.toUpperCase()}
        </Button>
      </div>
    </div>
  );
}

export default LanguageSelector