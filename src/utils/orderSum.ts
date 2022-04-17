import { rateTypes, IRateTypes, IAdditionallyOptions } from "constants/orderData";
import type { IOrderData } from "store/order/types";

export const orderPriceByRate = (rentDuration: number, rateId: string) => {
    const rateDataByRateId = getPriceByRateId(rateTypes,rateId);
    return Math.ceil(rentDuration / rateDataByRateId.duration) * rateDataByRateId.price;
}

// export const orderAdditionallyPrice = (orderData: IOrderData, additionallyOptions: IAdditionallyOptions) => {
//     let additionallyOptionsSum = 0;
//     additionallyOptions.forEach(item => {
//         const orderDataByLabel = orderData[item.label as keyof IOrderData];
//         const getAdditionallyDataByLabel = additionallyOptions.filter(option => item.label = option.label)[0];
//         additionallyOptionsSum += ((typeof orderDataByLabel === "boolean" ? getAdditionallyDataByLabel.price : 0) as number)
//     })
//     return additionallyOptionsSum;
// }

const getPriceByRateId = (allRates: IRateTypes, rateId: string) => {
    return allRates.filter(item => item.id === rateId)[0];
}