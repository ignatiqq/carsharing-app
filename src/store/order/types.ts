export interface IOrder {
    orderStatusId: IOderObject | null,
    cityId: IOderObject | null,
    pointId: IOderObject | null,
    carId: object | null,
    color: string | null,
    dateFrom: number | null,
    dateTo: number | null,
    rateId: object | null,
    price: number,
    isFullTank: boolean,
    isNeedChildChair: boolean,
    isRightWheel: boolean
}

export interface IOderObject {
    id: string,
    value: string
}