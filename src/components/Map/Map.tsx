import React, { useState, useEffect } from 'react';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import type { YMapsApi } from "react-yandex-maps";

import { getYmapCoordinates, getGeocodeByName } from "utils/yMapHelper";
import type { ICurrentCity } from "store/location/cities/types";
import type { ICurrentPoint } from "store/location/points/types"

interface IMap {
    points: Array<ICurrentPoint> | null,
    currentCity?: ICurrentCity,
    currentPoint?: ICurrentPoint
}

interface IPointsData {
    location: Array<number>,
    address: string
}

const Map: React.FC<IMap> = ({ points, currentCity, currentPoint }) => {
    const [ymap, setYMap] = useState<YMapsApi | null>(null);
    const [pointsData, setPointsData] = useState<IPointsData[] | null>(null);
    const [locationCoordinates, setLocationCoordinates] = useState<Array<number> | null>(null);

    useEffect(() => {
        if(points && ymap) {
            const allRequests: Array<YMapsApi> = [];
            points.map((item) => {
                if(item.cityId && item.address) {
                    getGeocodeByName({
                        city: item.cityId.name,
                        address: item.address,
                        ymap: ymap
                    })
                    .then(res => allRequests.push({request: res, address: item.address}))
                    .then(() => setPlacemarksToState(allRequests))
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

    const setLocationCoordinatesHandler = (item: IPointsData) => {
        setLocationCoordinates(item.location)
    }

    const setPlacemarksToState = (allRequests: Array<YMapsApi>) => {
        Promise.allSettled(allRequests)
                .then(res => {
                    const placemarks = res.map((item) => item.status === "fulfilled" && {location: getYmapCoordinates(item.value.request), address: item.value.address}) as Array<IPointsData>;
                    setPointsData(placemarks)
                })
    }

    return (
        <YMaps
        style={{ width: '100%', heigth: '100%' }}
        query={{
            apikey: `${process.env.REACT_APP_MAPS_API_KEY}`,
        }}>
            <YMap
                height={'350px'}
                width={'70%'}
                state={{center: locationCoordinates || [54.31228, 48.395406], zoom: 13 }}
                modules={['geocode']}
                defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                onLoad={(ymaps) => setYMap(ymaps)}
            >
                {
                    pointsData &&
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