import {GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {useEffect, useRef} from "preact/compat";
import MapPrint from "./MapPrint";

const center = [52.2573, 20.8824]

const Map = ({geoJSON}) => {
    const mapRef = useRef<L.Map>()
    const geoJSONRef = useRef<L.GeoJSON>()

    useEffect(() => {
        if(mapRef.current) {
            mapRef.current.invalidateSize()
            if(geoJSONRef.current)
                mapRef.current.fitBounds(geoJSONRef.current.getBounds())
        }
    }, [])
    return (
        <MapContainer ref={mapRef} center={center} zoom={15}  style={{ height: "100%", minHeight: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapPrint position="topleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Print" />
            <GeoJSON ref={geoJSONRef} data={geoJSON} />
        </MapContainer>
    )
}
export default Map