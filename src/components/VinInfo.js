import React from 'react'

const VinInfo = () => {
    return (
        <>
            <h2>What is a VIN Number (Vehicle Identification Number)?</h2>
            <p>A vehicle identification number (VIN) is a unique code assigned to every motor vehicle when it's manufactured. 
            The VIN is a 17-character string of letters and numbers without intervening spaces or the letters Q (q), I (i), and O (o); 
            these are omitted to avoid confusion with the numerals 0 and 1. Each section of the VIN provides a specific piece of information about the vehicle, 
            including the year, country, and factory of manufacture; the make and model; and the serial number. 
            VINs are usually printed in a single line.</p>
            <br/>
            <h2>How to Find the Vehicle's VIN Number</h2>
            <p>On most passenger cars, you may find the VIN number on the front of the dashboard on the driver's side. 
               The best way to see it is to look through the windshield from outside the car. You may also find the VIN number on the driver's side door pillar. 
               Open the door and look around the area where the door latches to the car. A motorcycle's VIN is usually on the steering neck below the handlebars, 
               although sometimes it's on the motor or on the frame near the motor. A semitrailer's VIN is located on the front part of the semitrailer on the 
               left side. If you can't find the VIN number on the vehicle, you should also be able to locate it on your vehicle's title/logbook or 
               liability insurance documents.</p>
            <img src="../assets/WhereIsMyVIN.jpg" alt="Where To Find VIN"></img>
        </>
    )
}

export default VinInfo
