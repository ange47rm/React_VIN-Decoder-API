import React, {useState, useEffect} from "react"
import VehicleDetails from "../components/VehicleDetails"
import Header from "../components/Header"

const VinDecoder = () => {

    const [vin, setVin] = useState(''); // the VIN that the user will type in

    const [vehicle, setVehicle] = useState(); // after the VIN is submitted, vehicle should be set to API response data

    const getVinDetails = () => {

        console.log ("Obtaining Vehicle Information")
        fetch("https://dealerkit.p.rapidapi.com/api/get-vin/?vin=2T1BU4EE5AC248356", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6e392890c3msh4a0f4ebf4a64798p16d8c8jsn43752bff9cee",
                "x-rapidapi-host": "dealerkit.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(VINdata => {
            setVehicle(VINdata.specification[0])        // this way we get the info we need (vehicle details) and assign it to the vehicle state
            console.log(VINdata.specification[0])       // console log to make sure we're fetching the correct data
        })
        .catch(err => {console.error(err);});
    }

    useEffect(() => {
        console.log ("useEffect triggered")
        getVinDetails();},[])


    if (vehicle){
        return (
            <>
                <Header/>

                <p> Yes Vehicle </p>
            </>
        )
    }

    if (!vehicle){
        return (
            <>
                <Header/>

                <p> No Vehicle </p>
            </>
        )
    }
}

export default VinDecoder;