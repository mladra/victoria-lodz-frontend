import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { memo, useState } from "react";

const API_KEY = "--replace-with-proper-key---";

const containerStyle = {
    width: "400px",
    height: "400px"
};

// 51.6993408,19.4111804
const center = {
    lat: 0,
    lng: 0
};

const GoogleMapsContainer = (props) => {
    const [map, setMap] = useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <LoadScript googleMapsApiKey={API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}>
                    {/* markers */}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default memo(GoogleMapsContainer);