import React from "react";

import type { ICarData } from "store/order/types";

interface ICarCard {
    onClick: (data: ICarData) => void,
    car: ICarData
}

const CarCard: React.FC<ICarCard> = ({ onClick, car }) => {

    return (
        <div onClick={() => onClick(car)}>
            <div>{car.id}</div>
            <img src={car.thumbnail.path} />
        </div>
    )
}

export default CarCard;