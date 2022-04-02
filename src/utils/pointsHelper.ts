import { ICurrentPoint } from "store/location/points/types";

export function getPointsByCityId(points: Array<ICurrentPoint>, cityId: string) {
    console.log(points, cityId)
    return points.filter(item => item.cityId && item.cityId.id === cityId);
}