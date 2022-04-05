import { IOrder } from "store/order/types";

export interface IOrderInfoData {
    label: string,
    value: string | number | boolean
}

export const getOrderInfoData = (order: IOrder): Array<IOrderInfoData> => {
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
        }
    ]

}