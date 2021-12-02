import React,{useEffect,useState,useRef}  from "react";
import mapboxgl from "mapbox-gl";
import classes from './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';


const Map=(props)=>{
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
         if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });

        if (!map.current) return; // wait for map to initialize
map.current.on('move', () => {
setLng(map.current.getCenter().lng.toFixed(4));
setLat(map.current.getCenter().lat.toFixed(4));
setZoom(map.current.getZoom().toFixed(2));
});

        
        });

        const click=(e)=>{
            
            console.log(mapContainer.current)
            map.current.on('click', () => {
                setLng(map.current.getCenter().lng);
                setLat(map.current.getCenter().lat);
                setZoom(map.current.getZoom().toFixed(2));
                });
            console.log( map.current)
           // mapboxgl.LngLat()
        }

       
    mapboxgl.accessToken = 'pk.eyJ1IjoidmFsaW1hbnNvdXI0MCIsImEiOiJja3cwd2R3MW4xMzBhMnhub3FkMmJtbWxpIn0.as6cR7RlgpnrO4-A3kPhvA';
    return(
    <div style={{position:'relative'}}>
        <div className={classes.sidebar}>
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
    <div onClick={(e)=>click(e)}  ref={mapContainer} className={classes.map_container} />
    </div>
    )
}

export default Map;