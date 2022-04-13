import React, { useState, useEffect } from 'react';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import type { YMapsApi } from "react-yandex-maps";

import { getYmapCoordinates, getGeocodeByName } from "utils/yMapHelper";
import type { ICurrentCity } from "store/location/cities/types";
import type { ICurrentPoint } from "store/location/points/types"

interface IMap {
    points: Array<ICurrentPoint> | null,
    currentCity?: ICurrentCity | null,
    currentPoint?: {id: string, value: string} | null,
    pointClickHandler: (item: ICurrentPoint) => void,
    className: string
}

export interface IPointData {
    location: Array<number>,
    address: string,
    city: string
}

interface IResponsePlacemarkData extends ICurrentPoint {
    location: Array<number>
}

const Map: React.FC<IMap> = (
    { 
        points, 
        currentCity, 
        currentPoint, 
        pointClickHandler, 
        className 
    }) => {
    const [ymap, setYMap] = useState<YMapsApi | null>(null);
    const [pointsData, setPointsData] = useState<IResponsePlacemarkData[]>([]);
    const [locationCoordinates, setLocationCoordinates] = useState<Array<number> | null>(null);

    useEffect(() => {
        if(points && ymap) {
            points.map((item) => {
                if(item.cityId && item.address) {
                    getGeocodeByName({
                        city: item.cityId.name,
                        address: item.address,
                        ymap: ymap
                    })
                    .then(res => ({location: res, address: item.address, cityId: item.cityId, name: item.name, id: item.id}))
                    .then(item => setPlacemarksToState(item as IResponsePlacemarkData))
                }
            })
        }
    }, [points, ymap])

    useEffect(() => {
        if(ymap && currentCity) {
            getAndSetCurrentCoordinates(`${currentCity && currentCity.name}, ${currentPoint?.value ? currentPoint.value : ""}`);
        }
    }, [ymap, currentCity, currentPoint])


    const setLocationCoordinatesHandler = (item: IResponsePlacemarkData) => {
        setLocationCoordinates(item.location);
        pointClickHandler({address: item.address, cityId: item.cityId, name: item.name, id: item.id});
    }

    const getAndSetCurrentCoordinates = async (address: string) => {
        const res = await ymap!.geocode(address);
        setLocationCoordinates(getYmapCoordinates(res));
    }

    const setPlacemarksToState = (request: IResponsePlacemarkData) => {
        const placemarks = {...request, location: getYmapCoordinates(request.location)};
        setPointsData(prev => [...prev, placemarks]);
    }

    return (
        <YMaps
        style={{ width: '100%', heigth: '100%' }}
        query={{
            apikey: `${process.env.REACT_APP_MAPS_API_KEY}`,
        }}>
            <YMap
                className={className}
                state={{center: locationCoordinates || [54.31228, 48.395406], zoom: 15 }}
                modules={['geocode']}
                onLoad={(ymaps) => setYMap(ymaps)}
            >
                {
                    pointsData.length > 0 &&
                    pointsData.map((item) => (
                        <Placemark
                            options={{ preset: 'islands#circleIcon', iconColor: '#0EC261' }}
                            geometry={item.location as any}
                            key={item.address}  
                            onClick={() => setLocationCoordinatesHandler(item as any)}
                        />
                    ))
                }
            </YMap>
        </YMaps>
    );
}

export default Map