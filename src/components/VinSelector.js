import React, { useState } from "react"


const VinSelector = ({ captureVin }) => {       // receive captureVin function from parent component

    // THIS STATE IS USED TO STORE THE USER INPUT ON THIS COMPONENT
    const [inputVin, setInputVin] = useState('');


    // FORM SUBMIT HANDLER
    const handleVinSubmit = (e) => {    // when the form is submitted...
        e.preventDefault();             // ... prevent the page from being refreshed...
        captureVin(inputVin);           // ... run captureVin using the inputVin ...
        e.target.reset();               // ... and finally reset form field.
    } 

    // JSX SYNTAX
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

export default VinSelector;