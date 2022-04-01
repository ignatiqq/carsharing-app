export interface ICities {
    cities: ICityData
}

export type ICurrentCity = {
    id: string,
    updatedAt?: number,
    createdAt?: number,
    name: string
}

interface ICityData {
    current: ICurrentCity | null,
    all: IAllCities
}

interface IAllCities {
    data: Array<ICurrentCity> | null,
    isLoading: boolean,
    error: string | null
}