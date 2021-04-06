import React from 'react'

const VehicleDetails = ({ vehicle }) => {
    return (
        <>
            <h2>{ vehicle.year } { vehicle.make } { vehicle.model }</h2>

            <p>Make: <i>{ vehicle.make }</i></p>
            <p>Model: <i>{ vehicle.model }</i></p>
            <p>Year: <i>{ vehicle.year }</i></p>
            <p>Trim: <i>{ vehicle.trim }</i></p>
            <p>Type: <i>{ vehicle.style }</i></p>
            <p>Engine: <i>{ vehicle.engine }</i></p>
            <p>Drivetrain: <i>{ vehicle.drive_type }</i></p>
            <p>Transmission: <i>{ vehicle.transmission }</i></p>

        </>
    )
}

export default VehicleDetails
