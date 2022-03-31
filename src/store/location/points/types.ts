export interface IPoints {
    point: IAllPoints
}

export type ICurrentPoint = {
    id: string,
    name: string,
    adress?: string,
    cityId: {
        name: string,
        id: string
    }
}


interface IAllPoints {
    data: Array<ICurrentPoint> | null,
    error: string | null
}