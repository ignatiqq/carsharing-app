import React, { useEffect, useRef } from 'react';

import styles from "Modal.module.scss";

interface IModal {
    children: React.FC,
    className?: string,
    isOpen: boolean,
    setOpen: (data: boolean) => void
}

const Modal: React.FC<IModal> = ({
    children,
    className,
    isOpen, 
    setOpen
}) => {

    const modal = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(modal && modal.current) {
            const clickHandler = (e: Event) => {
                if(!(e.target as HTMLDivElement).contains(modal.current)) {
                    setOpen(false);
                }
            }
            document.addEventListener('click', clickHandler);
            return () => document.removeEventListener('click', clickHandler);
        }
    }, [modal])

    if(!isOpen) {
        return null
    }

    return (
        <div className={styles.modalOverlay}>
            <div ref={modal} className={className}>
                {children}
            </div>
        </div>
    )
}

export default Modal