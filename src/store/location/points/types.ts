export interface IPoints {
    points: IAllPoints
}

export type ICurrentPoint = {
    id: string,
    name: string,
    address: string,
    cityId: {
        name: string,
        id: string
    }
}


interface IAllPoints {
    data: Array<ICurrentPoint> | null,
    error: string | null
}