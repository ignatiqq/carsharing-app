import { ICities } from "store/cities/types";

export interface IGetCitiesResponse {
    data: Array<ICities>,
    count: number,
    fields: {
        name: string,
        required: boolean,
        type: string
    }
}