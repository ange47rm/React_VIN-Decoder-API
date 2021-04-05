import React, { useState } from "react"


const VinSelector = ({ captureVin }) => {

    const [inputVin, setInputVin] = useState('');

    const handleVinSubmit = (e) => {
        e.preventDefault();
        captureVin(inputVin);
    } 

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