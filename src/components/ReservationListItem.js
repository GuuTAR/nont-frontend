import React from 'react'
import { Button } from 'react-bootstrap'

const ReserveItem = (props) => {

    const ReserveStatusBooked = () => {
        return (
            <td>
                <Button variant="primary" size="sm" style={{ padding: "0px", color: "white", borderRadius: "50px", marginLeft: "10px", width: "100px", height: "20px" }}>
                    Reject
                </Button>
                <Button variant="primary" size="sm" style={{ padding: "0px", color: "white", borderRadius: "8px", marginLeft: "10px", width: "100px", height: "20px" }}>
                    Check in
                </Button>
            </td>
        )
    }
    const ReserveStatusCheckIn = () => {
        return (
            <td>
                <Button variant="primary" size="sm" style={{ padding: "0px", color: "white", borderRadius: "8px", marginLeft: "10px", width: "100px", height: "20px" }}>
                    Check out
                </Button>
            </td>
        )
    }
    return (
        <tr key={props.index} style={{ color: "#2699FB" }}>
            <td>{props.reserve.reservation_id}</td>
            <td>{props.reserve.shelter_name}</td>
            <td>{props.reserve.room_name}</td>
            <td>{props.reserve.pet_name}</td>
            <td>{props.reserve.owner_name}</td>
            <td>{props.reserve.check_in_date}</td>
            <td>{props.reserve.check_out_date}</td>
            <td>{props.reserve.status}</td>
            {(props.reserve.is_checked_in && ReserveStatusCheckIn())}
            {(!props.reserve.is_checked_in && !props.reserve.is_checked_out && ReserveStatusBooked())}
            {console.log(props.reserve)}
        </tr>
    )
}

export default ReserveItem