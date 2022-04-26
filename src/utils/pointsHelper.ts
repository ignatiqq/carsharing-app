import { ICurrentPoint } from "store/location/points/types";

export function getPointsByCityId(points: Array<ICurrentPoint>, cityId: string) {
    return points.filter(item => item.cityId && item.cityId.id === cityId);
}