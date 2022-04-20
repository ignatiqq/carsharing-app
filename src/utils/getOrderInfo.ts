import type { IOrderData } from "store/order/types";
import { getDaysAndHoursFormat } from "./dateFormatter";

export interface IOrderInfoData {
    label: string,
    value: string | number | boolean | undefined
}

export const getOrderInfoData = (order: IOrderData): Array<IOrderInfoData> => {
    const { 
        pointId,
        cityId,
        carId, 
        color, 
        dateFrom, 
        dateTo, 
        rateId, 
        isFullTank, 
        isNeedChildChair, 
        isRightWheel 
    } = order;

    return [
        {
            label: "Point of issue",
            value: `${cityId?.name} ${pointId ? pointId.name : ""}`
        },
        {
            label: "Model",
            value: carId?.name
        },
        {
            label: "Color",
            value: color
        },
        {
            label: "Rental duration",
            value: (dateTo && dateFrom) ? getDaysAndHoursFormat(dateTo - dateFrom, true) : undefined
        },
        {
            label: "Tariff",
            value: rateId?.name
        },
        {
            label: "isFullTank",
            value: isFullTank && "Yes"
        },
        {
            label: "isNeedChildChair",
            value: isNeedChildChair && "Yes"
        },
        {
            label: "isRightWheel",
            value: isRightWheel && "Yes"
        }
    ]

}