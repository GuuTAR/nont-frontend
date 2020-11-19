import React, { useState, useEffect } from 'react'
import { DropdownButton, Dropdown, Form, Row, Col, Button, ToggleButton, ButtonGroup } from 'react-bootstrap'

import meals from '../bg/bone.svg'
import aircon from '../bg/air-conditioner.svg'
import pool from '../bg/swimming-pool.svg'
import walking from '../bg/walking-with-dog.svg'

function StarRating({ count, value,
    inactiveColor = '#ddd',
    size = 24,
    activeColor = '#f00', onChange }) {

    const stars = Array.from({ length: count }, () => '★')

    return (
        <div>
            {stars.map((s, index) => {
                let style = inactiveColor;
                if (index < value) {
                    style = activeColor;
                }
                return (
                    <span className={"star"}
                        key={index}
                        style={{ color: style, width: size, height: size, fontSize: size }}
                        >{s}</span>
                )
            })}
        </div>
    )
}

const Searchinfo = (props) => {

    const hadmeal = () => {
        if (props.RoomsList.had_meals) {
            return (
                <div class="col" style={{ width: "25%", height: "25%"}}>
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25%", height: "25%" , marginTop: "15px"}}>
                        <img src={meals} style={{ width: "100%", height: "100%"}}></img>
                    </div>
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25%", height: "25%" ,marginTop: "15px", color: "#2799FB", fontWeight: "bold", textAlign: "center"}}>
                        <p>Meals</p>
                    </div>
                </div>
            )
        }
    }

    const hadaircon = () => {
        if (props.RoomsList.had_air_con) {
            return (
                <div class="col" style={{ width: "25%", height: "25%"}}>
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25%", height: "25%" , marginTop: "15px"}}>
                        <img src={aircon} style={{ width: "100%", height: "100%"}}></img>
                    </div>
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25%", height: "25%" ,marginTop: "15px", color: "#2799FB", fontWeight: "bold", textAlign: "center"}}>
                        <p>Air conditioner</p>
                    </div>
                </div>
            )
        }
    }

    const hadpool = () => {
        if (props.RoomsList.had_pool) {
            return (
                <div class="col" style={{ width: "25%", height: "25%"}}>
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25%", height: "25%" , marginTop: "15px"}}>
                        <img src={pool} style={{ width: "100%", height: "100%"}}></img>
                    </div>
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25%", height: "25%" ,marginTop: "15px", color: "#2799FB", fontWeight: "bold", textAlign: "center"}}>
                        <p>Swimming pool</p>
                    </div>
                </div>
            )
        }
    }

    const hadwalking = () => {
        if (props.RoomsList.had_walking) {
            return (
                <div class="col" style={{ width: "25%", height: "25%"}}>
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25%", height: "25%" , marginTop: "15px"}}>
                        <img src={walking} style={{ width: "100%", height: "100%"}}></img>
                    </div>
                    <div class="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "25%", height: "25%" ,marginTop: "15px", color: "#2799FB", fontWeight: "bold", textAlign: "center"}}>
                        <p>Walking</p>
                    </div>
                </div>
            )
        }
    }

    const checkundefined = () => {
        if (props.RoomsList !== undefined) {
            return (
                <div style={{
                    backgroundColor: "#F1F9FF",
                    height: "100%", width: "25%", position: "absolute", top: "20.9%", left: "75%"
                    }}>
                    <div>
                        <Col>
                            <Row style={{ color: "#2799FB", marginLeft: "20px", marginTop: "10px", fontWeight: "bold" }}>
                                {props.RoomsList.room_name}
                            </Row>
                            <Row>
                                <img src={'http://localhost:8000/' + props.RoomsList.room_pics[0]} style={{ width: "80%", height: "200px", marginLeft: "35px" }}></img>
                            </Row>
                            <Row>
                                <Col style={{ color: "#2799FB", marginLeft: "20px", marginTop: "10px", fontWeight: "bold" }}>
                                    Acceptable pet : {props.RoomsList.room_pet_type == 1 ? "Dog" : "Cat"}
                                </Col>
                                <Col style={{ color: "#2799FB", marginLeft: "20px", marginTop: "10px", fontWeight: "bold" }}>
                                    Room capacity : 5
                                </Col>
                            </Row>
                            <Row style={{ color: "#2799FB", marginLeft: "20px", marginTop: "10px", fontWeight: "bold" }}>
                                Require medical certificate : {props.RoomsList.required_medical_cert ? "Yes" : "No"}
                            </Row>
                            <Row style={{ color: "#2799FB", marginLeft: "20px", marginTop: "10px", fontWeight: "bold" }}>
                                Shelter bussiness license : {props.RoomsList.had_bussiness_license ? "Yes" : "No"}
                            </Row>
                            <Row style={{ color: "#2799FB", marginLeft: "20px", marginTop: "10px", fontWeight: "bold" }}>
                                Facilities provided
                            </Row>
                        </Col>
                    </div>
                    <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                        <div class="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", 
                            backgroundColor: "white", borderRadius: "20px", borderColor: "white", width: "90%" }}>
                            {hadmeal()}
                            {hadaircon()}
                            {hadpool()}
                            {hadwalking()}
                        </div>
                    </div>
                <div>
                <Row style={{ color: "#2799FB", marginLeft: "20px", marginTop: "10px", fontWeight: "bold" }}>
                            Stars and Comments
                </Row>
                        {props.RoomsList.comments.map((each) => (
                            <Row>
                                <Col>
                                    <img src={'http://localhost:8000/' + each.pet_pic} style={{ marginLeft: "20px", marginRight: "20px", marginTop: "10px", height: "80%", width: "80%" }} />
                                </Col>
                                <Col>
                                    <Row style={{ color: "#2799FB", marginLeft: "20px", marginTop: "10px", fontWeight: "bold" }}>
                                        {each.pet_name}
                                    </Row>
                                    <Row style={{ color: "#2799FB", marginLeft: "20px", marginTop: "10px", fontWeight: "bold" }}>
                                        {each.review_comment}
                                    </Row>
                                </Col>
                                <Col style={{ marginTop: "10px" }}>
                                    <StarRating
                                        count={5}
                                        size={12}
                                        value={each.review_star}
                                        activeColor={'#1167b1'}
                                        inactiveColor={'#6a6866'}
                                    />
                                </Col>
                            </Row>
                        ))}
            
                </div>
            </div>
            )
        }
        else {
            return ""
        }
    }
    return (
        checkundefined()
    )
}

export default Searchinfo;