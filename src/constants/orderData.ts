import { timeConstantsInSeconds } from "./timeConstants"

export type IAdditionallyOptions = Array<{label: string, price: number}>

export const additionallyOptions: IAdditionallyOptions = [
    {
        label: "isFullTank",
        price: 500
    },
    {
        label: "isNeedChildChair",
        price: 200
    },
    {
        label: "isRightWheel",
        price: 1600
    }
]

export type IRateTypes = Array<IRateType>

interface IRateType {
    id: string,
    price: number,
    duration: number
}

export const rateTypes: IRateTypes = [
    {
        id: "6114e4182aed9a0b9b850843",
        price: 1000,
        duration: timeConstantsInSeconds.month
    },
    {
        id: "5e26a07f099b810b946c5d82",
        price: 10,
        duration: timeConstantsInSeconds.minute
    },
    {
        id: "5e26a082099b810b946c5d83",
        price: 2500,
        duration: timeConstantsInSeconds.day
    },
    {
        id: "5f622f029d3a610b850fd820",
        price: 15000,
        duration: timeConstantsInSeconds.day * 7
    },
    {
        id: "60b9437e2aed9a0b9b7ed337",
        price: 13500,
        duration: timeConstantsInSeconds.day * 7
    },
    {
        id: "61a4c62105c99b2812794fc3",
        price: 51000,
        duration: timeConstantsInSeconds.month * 3
    },
    {
        id: "61a4c81c05c99b2812794fcb",
        price: 200000,
        duration: timeConstantsInSeconds.year
    }
]