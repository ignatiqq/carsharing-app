import React from 'react';
import classNames from "classnames";

import { ReactComponent as LoaderIcon } from "assets/images/loader.svg";
import styles from "./Loader.module.css";

interface ILoader {
    className?: string
}

const Loader: React.FC<ILoader> = ({ className }) => {
  return (
    <div>
        <LoaderIcon className={classNames(className, styles.loading)} />
    </div>
  )
}

export default Loader;