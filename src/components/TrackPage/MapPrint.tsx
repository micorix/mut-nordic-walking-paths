import L from "leaflet";
import "leaflet-easyprint";
import { useEffect } from "preact/compat";
import { useMap } from "react-leaflet";

const MapPrint = (props: any) => {
  const map = useMap();
  useEffect(() => {
    const control = (L as any).easyPrint({
      ...props,
    });
    map.addControl(control);
    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
}

export default MapPrint;
