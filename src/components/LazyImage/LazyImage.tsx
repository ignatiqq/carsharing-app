import React, { useState, useRef } from "react";

import styles from "./LazyImage.module.css";
import classNames from "classnames";

interface ILazyImage {
    width: number,
    height: number,
    image: string,
    alt: string,
    className: string
}

const LazyImage: React.FC<ILazyImage> = (
    {
        width,
        height,
        image,
        alt= "image",
        className
    }
    ) => {
    const [isVisible, setVisible] = useState<boolean>(false);

    const lazyContainer = useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if(lazyContainer && lazyContainer.current) {
            const element = lazyContainer.current;
            const observer = new IntersectionObserver(([{isIntersecting}]) => setImageVisible(isIntersecting), {
                rootMargin: "0px",
                threshold: 0.5
            })
            observer.observe(element)
            return () => observer.unobserve(element)
        }
    }, [lazyContainer])

    function setImageVisible(isIntersecting: boolean) {
        if(isIntersecting) {
            setVisible(true);
        }
    }

    return (
        <div ref={lazyContainer} style={{maxWidth: width, width: '100%', height: !isVisible ? height : ""}} className={classNames(className, {
            [styles.lazyImage]: !isVisible
        })}>
            {
                isVisible &&
                <img style={{maxWidth: width, width: "100%"}} src={image} alt={alt} />
            }
        </div>
    )
}

export default LazyImage;