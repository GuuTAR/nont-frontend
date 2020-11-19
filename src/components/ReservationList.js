import React from 'react'
import { Table } from 'react-bootstrap'

import ReserveItem from './ReservationListItem'

const ReservationList = (props) => {

    const renderReservation = (reserve, index) => {
        return (
            <ReserveItem key={index} reserve ={reserve} index={index}/>
        )
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr style={{textAlign:"center", color:"#2699FB", backgroundColor:"#D3ECFF", }}>
                    <th style={{width:"150px"}}>Reservation ID</th>
                    <th style={{width:"250px"}}>Shelter</th>
                    <th style={{width:"80px"}}>Room</th>
                    <th style={{width:"150px"}}>Nont name</th>
                    <th style={{width:"250px"}}>Owner name</th>
                    <th style={{width:"150px"}}>Check in date</th>
                    <th style={{width:"150px"}}>Check out date</th>
                    <th style={{width:"100px"}}>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.reserveList.map(renderReservation)}
            </tbody>
        </Table>
    )
}

export default ReservationList