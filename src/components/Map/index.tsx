import { useMemo } from 'react';

import GoogleMapReact from 'google-map-react';
import { IoStorefrontSharp } from 'react-icons/io5';

import Config from '../../Config';
import { useStores } from '../../hooks/Stores';
import { MapContainer } from './styles';

interface IMapMarkerProps {
    lat: number;
    lng: number;
    isAboveMinRevenue: boolean;
}

const MapMarker: React.FC<IMapMarkerProps> = ({ isAboveMinRevenue }) => (
    <IoStorefrontSharp
        size={20}
        color={isAboveMinRevenue ? '#16a085' : '#d32f2f'}
    />
);

const Map: React.FC = () => {
    const { filteredStores, numericMinValue } = useStores();

    const defaultProps = useMemo(
        () => ({
            center: {
                lat: -23.565972,
                lng: -46.650859,
            },
            zoom: 11,
        }),
        []
    );

    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: Config.services.googleMaps.apiKey ?? '',
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {filteredStores.map(store => (
                    <MapMarker
                        key={store.id}
                        lat={store.latitude}
                        lng={store.longitude}
                        isAboveMinRevenue={store.revenue >= numericMinValue}
                    />
                ))}
            </GoogleMapReact>
        </MapContainer>
    );
};

export default Map;
