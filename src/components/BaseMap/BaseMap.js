import {React,useEffect, useRef, } from 'react';
import ReactMapboxGl, { Layer, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const BaseMap=(props)=>{
    const ali= useRef();
    const vali = useRef();

useEffect(()=>{
       
       
},[vali])

    const Map = ReactMapboxGl({
        
        accessToken:
        'pk.eyJ1IjoidmFsaW1hbnNvdXI0MCIsImEiOiJja3cwd2R3MW4xMzBhMnhub3FkMmJtbWxpIn0.as6cR7RlgpnrO4-A3kPhvA'
    });

     

    return(
        
           <div ref={ali}>
            <Map
            onDataLoading={e=>{
                e.setCenter(props.center)
                
            }}
            onDblClick={props.click?(_,event) => {
                props.click(event.lngLat);
              }:null}
              ref={vali}
              onZoom={(e)=>{
                
              }}
              
        
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: props.size?'90vh': '20vh',
    width: '100%'
  }}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    
  

  </Layer>
  
  {props.popup?<Popup
  coordinates={props.popup}
  offset={{
    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
  }}>
  <h1>انتخاب شد</h1>
</Popup>:null}


</Map>
      </div>  
    )
}
export default BaseMap;
// in render()
