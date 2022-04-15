interface IOrderStepsInfo {
    pathname: string,
    step: number
}

export type IOrderSteps = Array<IOrderStepsInfo>

export const allOrderSteps = [
    {
        pathname: "/order/location",
        step: 0
    },
    {
        pathname: "/order/model",
        step: 1
    },
    {
        pathname: "/order/additionally",
        step: 2
    },
    {
        pathname: "/order/total",
        step: 3
    }
]