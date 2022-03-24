import { ICommonSettings } from "store/commonSettings/types";

export interface IGetCitiesResponse {
    data: Array<ICommonSettings>,
    count: number,
    fields: {
        name: string,
        required: boolean,
        type: string
    }
}