import React, { useState } from "react"
import VehicleDetails from "./VehicleDetails";


const VinSelector = ({ vehicle, captureVin, invalidVin }) => {       // receive captureVin function from parent component

    // THIS STATE IS USED TO STORE THE USER INPUT ON THIS COMPONENT
    const [inputVin, setInputVin] = useState('');


    // FORM SUBMIT HANDLER
    const handleVinSubmit = (e) => {    // when the form is submitted...
        e.preventDefault();             // ... prevent the page from being refreshed...
        captureVin(inputVin);           // ... run captureVin using the inputVin ...
        e.target.reset();               // ... and finally reset form field.
    } 

    // JSX SYNTAX
    if (vehicle) {
        return (
            <>
                <form onSubmit={handleVinSubmit}>
                    <label htmlFor="vin-selector">Check & Decode Any VIN For Free</label>
                    <input type="text" id="vin-selector" onChange={e => setInputVin(e.target.value)} placeholder="Enter VIN" required></input>
                    <button>Decode VIN</button>
                </form>
                <VehicleDetails vehicle={vehicle}/>
            </>
        )
    } else if (invalidVin) {
        return (
            <>
                <form onSubmit={handleVinSubmit}>
                    <label htmlFor="vin-selector">Check & Decode Any VIN For Free</label>
                    <input type="text" id="vin-selector" onChange={e => setInputVin(e.target.value)} placeholder="Enter VIN" required></input>
                    <button>Decode VIN</button>
                    <p>The VIN you inserted is either invalid, or vehicle details could not be found.</p>
                </form>
            </>
    )} else {
        return (
        <>
            <form onSubmit={handleVinSubmit}>
                <label htmlFor="vin-selector">Check & Decode Any VIN For Free</label>
                <input type="text" id="vin-selector" onChange={e => setInputVin(e.target.value)} placeholder="Enter VIN" required></input>
                <button>Decode VIN</button>
            </form>
        </>
    )
    }



}

export default VinSelector;