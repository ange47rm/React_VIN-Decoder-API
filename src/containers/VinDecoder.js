import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import VinSelector from "../components/VinSelector";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import About from "../components/About";
import Contact from "../components/Contact";
import VinInfo from "../components/VinInfo";


const VinDecoder = () => {

    const [vin, setVin] = useState(''); // the VIN that the VinSelector component will "pass up"

    const [invalidVin, setInvalidVin] = useState(false);

    const [vehicle, setVehicle] = useState(); // after the VIN is submitted, vehicle should be set to API response data

    const getVinDetails = () => {
        if (vin){                             // if there is no vin, function will not run
        console.log ("Obtaining Vehicle Information")
        fetch(`https://dealerkit.p.rapidapi.com/api/get-vin/?vin=${vin}`, {
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
        .catch(err =>                   // in case of any error
            {console.error(err);        // console log the error
            setInvalidVin(true)
            setVehicle(null)});      // set invalidVin to "true"
        }
    }

    useEffect(() => {
        console.log ("useEffect triggered")                                                                                                                                     // eslint-disable-next-line
        getVinDetails();},[vin])            // run getVinDetails when vin state changes


    // CONDITIONAL RENDERING
    return (
                <Router>
                    <>
                        <Header/>
                        <Navbar/>
                        <Switch>
                            <Route exact path ="/" render={() => <VinSelector vehicle={vehicle} captureVin={bananaVin => setVin(bananaVin)} invalidVin={invalidVin}/>}/>  {/* the form submission will trigger the function, and pass the inserted vin as a parameter */}
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/vin-information" component={VinInfo}/>
                        </Switch>
                    </>
                </Router>
        )
}
        




export default VinDecoder;