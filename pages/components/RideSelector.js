import {useEffect , useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../../data/carList'

const RideSelector = ({pickupCordinates,dropoffCordinates}) => {

    const [rideDuration,setRideDuration] = useState(0)

    useEffect(() => {
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCordinates[0]},${pickupCordinates[1]};${dropoffCordinates[0]},${dropoffCordinates[1]}?access_token=pk.eyJ1Ijoia3J1c2hubmEiLCJhIjoiY2t2cDQ0cnk0MHdoNjJvcWg3cmE1eW04ZSJ9.LA_6HbaSMPOk6CgjBvpOgg`)
        .then(res=>res.json())
        .then(data=>{
            setRideDuration(data.routes[0].duration / 100)
        })
         
    }, [pickupCordinates,dropoffCordinates])

    return (
        <Wrapper>
            <Title> choose a ride , or swipe up for more</Title>

            <CarList>
                {carList.map((car,index)=>(

                <Car key={index}>
                    <CarImage src={car.imgUrl} />
                    <CarDetails> 
                        <CarType>
                            {car.service}
                        </CarType>
                        <Time>5 min away</Time>
                    </CarDetails>
                    <Price>
                        {'₹'+(rideDuration*car.multiplier).toFixed(2)}
                    </Price>
                    

                </Car>
                ))}
                
            </CarList>
        </Wrapper>
    )
}

export default RideSelector


const CarImage = tw.img`
h-14 mr-5
`

const CarDetails = tw.div`
flex-1 `

const CarType = tw.div`
font-medium
`

const Time = tw.div`
text-xs text-blue-500

`

const Price = tw.div``

const Car = tw.div`
flex  p-4 items-center  q

`

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div` 
text-gray-500 text-center text-xs py-2  border-b 
`

const CarList = tw.div`
overflow-y-scroll `