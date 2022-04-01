import type { YMapsApi } from "react-yandex-maps";

export function getYmapCoordinates(ymapGeocodeRequest: YMapsApi) {
    return ymapGeocodeRequest.geoObjects.get(0).geometry.getCoordinates();
}

interface IGetGeocodeByNameArguments {
    city:string, 
    address: string, 
    ymap: YMapsApi
}

export async function getGeocodeByName ({city, address, ymap}: IGetGeocodeByNameArguments) {
    return ymap.geocode(city, address)
}