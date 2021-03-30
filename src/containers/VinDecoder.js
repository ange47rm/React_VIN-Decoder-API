import React, {useState, useEffect} from "react"
import VehicleDetails from "../components/VehicleDetails"

const VinDecoder = () => {

    const [vin, setVin] = useState(''); // the VIN that the user will type in

    const [vehicle, setVehicle] = useState(null); // after the VIN is submitted, vehicle should be set to API response data

    const getVinDetails = () => {

        console.log ("Obtaining Vehicle Information")
        fetch("https://vindecoder.p.rapidapi.com/v2.0/decode_vin?vin=JNKCA31A61T027494", {
	        "method": "GET",
            "headers": {
                "x-rapidapi-key": "6e392890c3msh4a0f4ebf4a64798p16d8c8jsn43752bff9cee",
                "x-rapidapi-host": "vindecoder.p.rapidapi.com"
	        }
        })
        .then(response => {console.log(response);})
        .catch(err => {console.error(err);});
    }

    useEffect(() => {
        console.log ("useEffect triggered")
        getVinDetails();},[])

    return (
        <>
            <h1>VIN Decoder</h1>
        </>
    )
}

export default VinDecoder;