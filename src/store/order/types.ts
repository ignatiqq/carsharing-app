export interface IOrder {
    data: IOrderData,
    options: {
        cars: ICarOption,
        rates: IRateOptions
    },
    id: null | string,
    postOrderLoading: boolean,
    getOrder: {
        data: IOrderData | null,
        loading: boolean,
        error: string | null
    }
    stepsPassed: number,
    price: number
}

export interface IRateOptions {
    data: IRateOption | null,
    isLoading: boolean,
    error: string | null
}

export interface IRateOption {
    fields: object,
    count: number,
    data: Array<IRateOptionData>
}

export interface IRateOptionData {
    createdAt: number,
    updatedAt: number,
    id: string,
    price: number,
    rateTypeId: {
        unit: string,
        name: string,
        id: string
    }
}

export interface ICarOption {
    data: IAllCarsData | null,
    current: ICarData | null,
    categories: ICarsCategories | null,
    isLoading: boolean,
    error: string | null
}

 export interface ICarsCategories {
    count: number,
    data: Array<ICarsCategory> | null,
    fields: any
 }

export interface ICarsCategory {
    name: string,
    description: string,
    id: string,
    updatedAt?: number,
    createdAt?: number
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
        orderStatusId: string | null,
        cityId: IOrderObject | null,
        pointId: IOrderObject | null,
        carId: IOrderObject | null,
        color: string,
        dateFrom: number | null,
        dateTo: number | null,
        rateId: IOrderObject | null,
        price: number,
        isFullTank: boolean,
        isNeedChildChair: boolean,
        isRightWheel: boolean
}

export interface IOrderObject {
    id: string,
    value: string
}