import React from "react";
import classNames from "classnames";

import carHolder from "assets/images/carHolder.png";
import { LazyImage } from "..";
import type { ICarData } from "store/order/types";
import styles from "./CarCard.module.scss";


interface ICarCard {
    currentCarId: string | null,
    onClick: (data: ICarData) => void,
    car: ICarData
}

const CarCard: React.FC<ICarCard> = React.memo(({ currentCarId, onClick, car }) => {

    return (
        <div className={classNames(styles.wrapper, {
            [styles.wrapperActive]: currentCarId === car.id
        })} >
            <button className={styles.button} onClick={() => onClick(car)}>
                <div className={styles.cardWrapper}>
                    <div className={styles.carInfo}>
                        <div className={styles.carName}>{car.name}</div>
                        <div className={styles.carPrice}>{car.priceMin} - {car.priceMax} &#8381;</div>
                    </div>
                    <LazyImage
                        imageHolderSrc={carHolder}
                        className={styles.carImage}
                        width={280}
                        height={127}
                        image={car.thumbnail.path}
                        alt={car.name}
                    />
                </div>
            </button>
        </div>
    )
})

export default CarCard;