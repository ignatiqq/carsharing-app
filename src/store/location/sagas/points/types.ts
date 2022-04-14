import { ICurrentPoint } from "store/location/points/types";

export interface IGetPointsResponse {
    data: Array<ICurrentPoint>,
    count: number,
    fields: {
        name: string,
        required: boolean,
        type: string
    }
}