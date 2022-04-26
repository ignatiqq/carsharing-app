import type { IOrderData } from "store/order/types"

export const getCurrentButtonOptions = (pathname: string, order: IOrderData) => {
    switch(pathname) {
        case "/order/location": {
            return {
                nextPagePathname: "/order/model",
                disabled: !order.cityId || !order.pointId,
                name: "Choose model",
                nextStep: 1
            }
        }

        case "/order/model": {
            return {
                nextPagePathname: "/order/additionally",
                disabled: !order.carId,
                name: "Additionally",
                nextStep: 2
            }
        }

        case "/order/additionally": {
            return {
                nextPagePathname: "/order/total",
                disabled: !order.dateFrom || !order.dateTo || !order.rateId || !order.color,
                name: "Total",
                nextStep: 3
            }
        }
    }
}