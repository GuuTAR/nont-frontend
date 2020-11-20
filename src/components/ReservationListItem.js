import React from 'react'
import { Button } from 'react-bootstrap'
import {Delete, Patch} from '../server'

const ReserveItem = (props) => {

    const handleReject = () => {
        const fetchData = async () => {
            console.log(props)
            const result = await Delete("api/reservations/" + props.reserve.reservation_id + "/")
            props.reRender()
        }
        fetchData()
    }

    const handleCheckIn = () => {
        const fetchData = async () => {
            let payload = {"reservation_id": props.reserve.reservation_id, "status": 2}
            const result = await Patch("api/reservations/" + props.reserve.reservation_id + "/", payload)
            props.reRender()
        }
        fetchData()
    }

    const handleCheckOut = () => {
        const fetchData = async () => {
            let payload = {"reservation_id": props.reserve.reservation_id, "status": 3}
            const result = await Patch("api/reservations/" + props.reserve.reservation_id + "/", payload)
            props.reRender()
        }
        fetchData()
    }

    const ReserveStatusBooked = () => {
        return (
            <td>
                <Button onClick={()=>{handleReject()}} variant="primary" size="sm" style={{ padding: "0px", color: "white", borderRadius: "50px", marginLeft: "10px", width: "100px", height: "20px" }}>
                    Reject
                </Button>
                <Button onClick={()=>{handleCheckIn()}} variant="primary" size="sm" style={{ padding: "0px", color: "white", borderRadius: "8px", marginLeft: "10px", width: "100px", height: "20px" }}>
                    Check in
                </Button>
            </td>
        )
    }
    const ReserveStatusCheckIn = () => {
        return (
            <td>
                <Button onClick={()=>{handleCheckOut()}} variant="primary" size="sm" style={{ padding: "0px", color: "white", borderRadius: "8px", marginLeft: "10px", width: "100px", height: "20px" }}>
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
            {(props.reserve.status==="Checked in" && ReserveStatusCheckIn())}
            {(props.reserve.status==="Booked"  && ReserveStatusBooked())}
        </tr>
    )
}

export default ReserveItem