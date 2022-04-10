export interface IOrder {
    data: IOrderData,
    options: {
        cars: {
            data: IAllCarsData | null,
            isLoading: boolean,
            error: string | null
        }
    }
    price: number
}

export interface IAllCarsData {
    count: number,
    data: Array<ICarData>,
    fields: any
}

export interface ICarData {
    categoryId: {
        name: string,
        description: string,
        id: string
    },
    colors: Array<string>,
    createdAt: number,
    description: string,
    id: string,
    name: string,
    number: string,
    priceMax: number,
    priceMin: number,
    tank: 55,
    thumbnail: {
        size: number,
        path: string,
        originalname: string,
        mimetype: string
    },
    updatedAt: number
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