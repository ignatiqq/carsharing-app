import React, { useState, useEffect } from 'react';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import type { YMapsApi } from "react-yandex-maps";

import { getYmapCoordinates, getGeocodeByName } from "utils/yMapHelper";
import type { ICurrentCity } from "store/location/cities/types";
import type { ICurrentPoint } from "store/location/points/types"

interface IMap {
    points: Array<ICurrentPoint> | null,
    currentCity?: ICurrentCity,
    currentPoint?: ICurrentPoint,
    pointClickHandler: (item: IPointData) => void,
    className: string
}

interface IPointData {
    location: Array<number>,
    address: string
}

interface IResponsePlacemarkData {
    location: YMapsApi,
    address: string,
    city: string
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
    const [pointsData, setPointsData] = useState<IPointData[]>([]);
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
                    .then(res => ({location: res, address: item.address, city: item.cityId.id}))
                    .then(item => setPlacemarksToState(item as IResponsePlacemarkData))
                }
            })
        }
    }, [points, ymap])

    useEffect(() => {
        if(ymap && (currentCity || currentPoint)) {
            (async function() {
                const res = await ymap.geocode(`${currentCity}, ${currentPoint}`)
                setLocationCoordinates(getYmapCoordinates(res))
            })()
        }
    }, [ymap, currentCity, currentPoint])

    const setLocationCoordinatesHandler = (item: IPointData) => {
        setLocationCoordinates(item.location);
        pointClickHandler(item)
    }

    const setPlacemarksToState = (request: IResponsePlacemarkData) => {
        const placemarks = {...request, location: getYmapCoordinates(request.location)};
        setPointsData(prev => [...prev, placemarks])
    }

    return (
        <YMaps
        style={{ width: '100%', heigth: '100%' }}
        query={{
            apikey: `${process.env.REACT_APP_MAPS_API_KEY}`,
        }}>
            <YMap
                className={className}
                state={{center: locationCoordinates || [54.31228, 48.395406], zoom: 13 }}
                modules={['geocode']}
                onLoad={(ymaps) => setYMap(ymaps)}
            >
                {
                    pointsData && pointsData.length > 0 &&
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