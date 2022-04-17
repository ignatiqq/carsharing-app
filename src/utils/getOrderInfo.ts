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
            value: `${cityId?.value} ${pointId ? pointId.value : ""}`
        },
        {
            label: "Model",
            value: carId?.value
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
            value: rateId?.value
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