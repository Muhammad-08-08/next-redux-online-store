import React, { useState } from 'react';
import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';

export default function YandexMaps() {

    const [longlat, setLonglat] = useState<{ long: number, lat: number }>()
    const [loading, setLoading] = useState<boolean>(false)

    const defaultState = {
        center: [longlat?.lat || 41, longlat?.long || 69,],
        zoom: 14,
    };


    return (
        <div>
            <button onClick={() => {
                setLoading(true)
                navigator.geolocation.getCurrentPosition((data) => {
                    setLonglat({
                        long: data.coords.longitude,
                        lat: data.coords.latitude
                    })
                    setLoading(false)
                }, (e) => {
                    setLoading(false)

                })
            }} className='px-6 py-3 bg-amber-600 text-white rounded-2xl cursor-pointer mb-6'>meni top {loading && <div>loading,....</div>}</button>
            <YMaps>
                <Map state={defaultState} style={{
                    width: "100%",
                    height: 400
                }}>
                    {longlat && <Placemark geometry={[longlat.lat, longlat.long]} />}
                </Map>
            </YMaps>
        </div>
    );
}