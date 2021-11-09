
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia3J1c2hubmEiLCJhIjoiY2t2cDQ0cnk0MHdoNjJvcWg3cmE1eW04ZSJ9.LA_6HbaSMPOk6CgjBvpOgg';

export const Map = (props) => {
    console.log(props)

    

    useEffect(() => {
   
        const Map  = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',   
        center: [-20.5937 ,78.96292],
        zoom: 3,

        
      })

      if(props.pickupCordinates){
        addToMap(Map, props.pickupCordinates)
    }
    if(props.dropoffCordinates){
        addToMap(Map, props.dropoffCordinates)
    }

    if(props.pickupCordinates && props.dropoffCordinates){
        Map.fitBounds([
            props.dropoffCordinates ,
            props.pickupCordinates
        ],{
            padding :40
        })

    }

      
      
    },[props.pickupCordinates,props.dropoffCordinates])

    const addToMap=(Map,coordinates)=>{
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(Map);

    }

    

    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}
export default Map

const Wrapper = tw.div`
flex-1 h-1/2

`

