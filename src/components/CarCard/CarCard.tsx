import React from "react";

import { LazyImage } from "..";
import type { ICarData } from "store/order/types";

interface ICarCard {
    onClick: (data: ICarData) => void,
    car: ICarData
}

const CarCard: React.FC<ICarCard> = ({ onClick, car }) => {

    return (
        <div onClick={() => onClick(car)}>
            <div>{car.id}</div>
            <LazyImage
                width={256}
                height={116}
                image={car.thumbnail.path}
                alt={car.name}
            />
        </div>
    )
}

export default CarCard;