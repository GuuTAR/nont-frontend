import React, { useState, useEffect } from 'react'
import { DropdownButton, Dropdown, Form, Row, Col,Button,ToggleButton,ButtonGroup } from 'react-bootstrap'

const ShowMinprice = (props) => {
    return (
        <div style={{backgroundColor:"white", borderRadius: "10px", borderColor: "white",
        height: "100%", width: "100%"}}>
            <label style={{ marginLeft: "20px"}}>min price <br></br> ฿ {props.minmaxlist[0]}</label>
        </div>
    )
}

export default ShowMinprice