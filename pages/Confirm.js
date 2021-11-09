import { useEffect,useState } from 'react'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
import { useRouter } from 'next/router'
import { route } from 'next/dist/server/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {

    const router = useRouter()
    const {pickup ,dropoff} = router.query

    console.log("p",pickup);
    console.log("d",dropoff);

    const [pickupCordinates ,setPickupCordinates] = useState([0,0])
    const [dropoffCordinates ,setDropoffCordinates] = useState([0,0])

    function getPickupCordinates(pickup) {
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoia3J1c2hubmEiLCJhIjoiY2t2cDQ0cnk0MHdoNjJvcWg3cmE1eW04ZSJ9.LA_6HbaSMPOk6CgjBvpOgg",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                
                setPickupCordinates(data.features[0].center);
            })
    }

    const getDropoffCordinates=(dropoff)=>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
        new URLSearchParams({
            access_token: "pk.eyJ1Ijoia3J1c2hubmEiLCJhIjoiY2t2cDQ0cnk0MHdoNjJvcWg3cmE1eW04ZSJ9.LA_6HbaSMPOk6CgjBvpOgg",
            limit:1 

        })
        )
        .then(response=>response.json())
        .then(data=>{
            
            setDropoffCordinates(data.features[0].center);
        })

    }

    useEffect(() => {
        getPickupCordinates(pickup);
        getDropoffCordinates(dropoff);
      
    }, [pickup,dropoff])

    return (
        <Wrapper>
            <Link href="/Search" >
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
            <Map 
            pickupCordinates = {pickupCordinates}
            dropoffCordinates = {dropoffCordinates} 
            />
            
              
              <RideContainer>
                 <RideSelector 
                 pickupCordinates = {pickupCordinates}
                 dropoffCordinates = {dropoffCordinates} 
                  />
                  <ConfirmButtonContainer>
                        <ConfirmButton>

                        Confirm UberX
                        </ConfirmButton>
                      </ConfirmButtonContainer>
                  
                
              </RideContainer>
        </Wrapper>
    )
}

export default Confirm



const ConfirmButton = tw.div`
bg-black p-3 my-3 mx-6 text-white text-center text-2xl
`

const Wrapper = tw.div`
flex flex-col h-screen`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2

`

const BackButton = tw.img`
bg-white w-10 h-10 rounded-full mr-2  absolute top-4 left-4 z-10 shadow-md cursor-pointer
`

const ConfirmButtonContainer = tw.div`
font



`