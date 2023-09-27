import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { useRouter } from 'next/router';
import L from 'leaflet';

type Location = {
    latitude: number;
    longitude: number;
    title: string;
    url?: string;
};


var myIcon = L.icon({
    iconUrl: '/pin.svg',
    iconSize: [25, 35],
    iconAnchor: [13, 33]
});



const Map: React.FC<{ locations: Location[], loading?:boolean }> = ({ locations, loading }) => {

    const [isMounted, setMounted] = useState<boolean>(false);

    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isMounted || !locations || !locations.length) {
        return null;
    }

    let center: [number, number];
    let zoom: number = 3;
    if (locations.length === 1) {
        center = [locations[0].latitude, locations[0].longitude];
        zoom = 14;
    } else {

        if (window.outerWidth < 900) {
            zoom = 1
        }

        const latitudes = locations.map(location => location.latitude);
        const longitudes = locations.map(location => location.longitude);

        const latitudeMin = Math.min(...latitudes);
        const latitudeMax = Math.max(...latitudes);
        const longitudeMin = Math.min(...longitudes);
        const longitudeMax = Math.max(...longitudes);

        center = [(latitudeMin + latitudeMax) / 2, (longitudeMax + longitudeMin) / 2]
    }
    
    if (loading){
        return(
            <div className='h-60 lg:h-120 bg-stone-200' />
        )
    }

    return (
        <MapContainer
            className='h-60 lg:h-120'
            center={center}
            zoom={zoom}
        >

            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {locations.map(item => (
                <Marker
                    icon={myIcon}
                    key={item.title}
                    position={[item.latitude, item.longitude]}
                    eventHandlers={{
                        click: () => {
                            item.url ? router.push(item.url) : undefined
                        },
                    }}
                >
                    <Tooltip>{item.title}</Tooltip>
                </Marker>
            ))
            }

        </MapContainer>
    )
}

export default Map;