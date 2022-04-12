import React from 'react';
import classNames from "classnames";

import { ReactComponent as LoaderIcon } from "assets/icons/loader.svg";
import styles from "./Loader.module.scss";

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