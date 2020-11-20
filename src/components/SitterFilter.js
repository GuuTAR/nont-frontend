import React, { useState, useEffect, createContext} from 'react'
import {Nav, Navbar, Button, Form, Col} from 'react-bootstrap'
import Background from '../bg/rectangle1486.jpg'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../css/SitterFilter.css";

import ReservationList from './ReservationList'
import {searchFilter, getStatus} from "../services/SitterFilterService"

import {Get} from "../server"

export const SitterFilterContext = createContext();

const SitterFilter = (props) => {
    const [ status, setStatus ] = useState("All status")
    const [ reserveID, setReserveID ] = useState("")
    const [ owner, setOwner ] = useState("")
    const [ startDate, setStartDate ] = useState("");
    const [ endDate, setEndDate ] = useState("");
    const [ data, setData ] = useState([]);

    const fetchData = async () => {
        const result = await Get("api/search-reservations/?id=" + props.user_id)
        result.reservations.sort((a, b)=> 
            a.reservation_id - b.reservation_id
        )
        result.reservations.map((reserve)=>{
            return reserve.status = getStatus(reserve.reservation_status) 
        })
        setData(result.reservations)
    }

    useEffect(()=> {
        fetchData()
    }, [])

    const reRender = () => {
        fetchData()
    }

    const SearchKeyword = () => {
        if (startDate === null) setStartDate("")
        if (endDate === null) setEndDate("")
        else if (startDate!==null && status.toString() === "All status" && 
                reserveID.toString() === "" && owner.toString() === "" && 
                startDate.toString() === "" && endDate.toString() === "") {
            return data
        }
        
        return searchFilter(data, reserveID, owner, status, startDate, endDate)
    }

    const clearData = () => {
        setStatus("All status")
        setReserveID("")
        setOwner("")
        setStartDate("")
        setEndDate("")
    }

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref" style={{ color: "White" }}>
                    Select Status
                </Form.Label>
                <Col sm="0">
                    <Form.Control value={status} onChange={(e) => { setStatus(e.target.value) }} as="select" size="sm" style={{ color: "#2699FB", borderRadius: "50px"}}>
                        <option>All status</option>
                        <option>Checked in</option>
                        <option>Checked out</option>
                        <option>Booked</option>
                    </Form.Control>
                </Col>
                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref" style={{color: "White", marginLeft: "20px" }}>
                    Reservation ID
                </Form.Label>
                <Col sm="0">
                    <Form.Control maxLength="20" value={reserveID} onChange={(e) => { setReserveID(e.target.value) }} size="sm" style={{ color: "#2699FB", borderRadius: "50px"}} />
                </Col>
                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref" style={{ color: "White", marginLeft: "20px" }}>
                    Owner name
                </Form.Label>
                <Col sm="0" >
                    <Form.Control maxLength="20" value={owner} onChange={(e) => { setOwner(e.target.value) }} size="sm" style={{ color: "#2699FB", borderRadius: "50px"}} />
                </Col>
                <table style={{color: "white", tableLayout: "auto",textAlign: "center"}}>
                    <thead>
                        <tr>
                            <td colSpan="3" style={{width: "0px"}}>
                                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref" style={{ color: "White" }}>
                                    Check in and Check out dates
                                </Form.Label>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <DatePicker dateFormat="dd/MM/yyyy" closeOnScroll={true} selected={startDate} selectsStart startDate={startDate} endDate={endDate} onChange={date => setStartDate(date)} isClearable placeholderText="XX/XX/XXXX" />
                            </td>
                            <td >
                                to
                            </td>
                            <td>
                                <DatePicker dateFormat="dd/MM/yyyy" closeOnScroll={true} selected={endDate} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} onChange={date => setEndDate(date)} isClearable placeholderText="XX/XX/XXXX" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Button onClick={clearData} type="reset" variant="light" style={
                    {backgroundImage: `url(${Background})`,
                    fontWeight: "bold",
                    color: "#1560bd",
                    borderRadius: "10px"}}>
                    Clear fields
                </Button>
                <Nav>
                <Nav.Link href="/login">
                <Button variant="light" style={
                    {backgroundImage: `url(${Background})`,
                    fontWeight: "bold",
                    color: "#1560bd",
                    borderRadius: "10px"}}>
                    Logout
                </Button>
                </Nav.Link>
            </Nav>
            </Navbar>
            <ReservationList reserveList={SearchKeyword()} reRender={reRender}/>
        </div>
    )
}

export default SitterFilter