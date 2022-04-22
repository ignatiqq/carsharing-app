import React, { ReactNode, useEffect, useRef } from 'react';

import { Portal } from "components";
import styles from "./ModalStandart.module.scss";

interface IModal {
    children: ReactNode,
    className?: string,
    isOpen: boolean,
    setOpen: (data: boolean) => void
}

const ModalStandart: React.FC<IModal> = ({
    children,
    className,
    isOpen, 
    setOpen
}) => {

    if(!isOpen) {
        return null
    }

    return (
        <Portal>
            <div className={styles.modalOverlay}>
                {children}
            </div>
        </Portal>
    )
}

export default ModalStandart;