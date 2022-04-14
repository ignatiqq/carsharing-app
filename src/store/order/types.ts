export interface IOrder {
    data: IOrderData,
    price: number
}

export interface IOrderData {
        orderStatusId: IOrderObject | null,
        cityId: IOrderObject | null,
        pointId: IOrderObject | null,
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

export interface IOrderObject {
    id: string,
    value: string
}