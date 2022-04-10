import React from "react";

import { LazyImage } from "..";
import type { ICarData } from "store/order/types";
import styles from "./CarCard.module.css";

interface ICarCard {
    onClick: (data: ICarData) => void,
    car: ICarData
}

const CarCard: React.FC<ICarCard> = ({ onClick, car }) => {
    return (
            <div className={styles.wrapper} >
                <button className={styles.button} onClick={() => onClick(car)}>
                    <div>
                        <div className={styles.carInfo}>
                            <div className={styles.carName}>{car.name}</div>
                            <div className={styles.carPrice}>{car.priceMin} - {car.priceMax} &#8381;</div>
                        </div>
                        <LazyImage
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
}

export default CarCard;