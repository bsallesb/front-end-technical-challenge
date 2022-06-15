import GoogleMapReact from 'google-map-react';
import { IoStorefrontSharp } from 'react-icons/io5';

import Config from '../../Config';
import { useStores } from '../../hooks/Stores';

interface MapMarkerProps {
    lat: number;
    lng: number;
    isAboveMinRevenue: boolean;
}

const MapMarker: React.FC<MapMarkerProps> = ({ isAboveMinRevenue }) => (
    <div>
        <IoStorefrontSharp
            size={20}
            color={isAboveMinRevenue ? '#16a085' : '#d32f2f'}
        />
    </div>
);

const Map: React.FC = () => {
    const { filteredStores, numericMinValue } = useStores();

    const defaultProps = {
        center: {
            lat: -23.565972,
            lng: -46.650859,
        },
        zoom: 11,
    };

    return (
        <div style={{ height: '630px' }}>
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
        </div>
    );
};

export default Map;
