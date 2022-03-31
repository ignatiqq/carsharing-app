import type { IRoute } from 'components/Breadcrumps/types';

export const routes: Array<IRoute> = [
    {
        index: 0,
        pathname: "/order/location",
        name: "Location"
    },
    {
        index: 1,
        pathname: "/order/model",
        name: "Model"
    },
    {
        index: 2,
        pathname: "/order/additionally",
        name: "Additionally"
    },
    {
        index: 3,
        pathname: "/order/total",
        name: "Total"
    }
]