import React, { useState } from 'react';
import { YMaps, Map as YMap } from 'react-yandex-maps';
import type { YMapsApi } from "react-yandex-maps";

const Map = () => {
    const [map, setMap] = useState<YMapsApi | null>(null);

    console.log(map)

    return (
        <YMaps
        style={{ width: '100%', heigth: '100%' }}
        query={{
            apikey: `${process.env.REACT_APP_MAPS_API_KEY}`,
        }}>
        <YMap
            height={'350px'}
            width={'70%'}
            modules={['geocode']}
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            onLoad={(ymaps) => setMap(ymaps)}
        />
        </YMaps>
    );
}

export default Map