import React, { useState, useEffect } from 'react'
import { DropdownButton, Dropdown, Form, Row, Col, Button, ToggleButton, ButtonGroup, Container } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import Showpetinfo from './Showpetinfo'
import { FormGroup } from '@material-ui/core';

import ShowMaxprice from './Showmaxpriceinfo'
import ShowMinprice from './Showminpriceinfo'

import { Link } from 'react-router-dom'

import { Get, Post } from '../server.js'

import ShelterList from './ShelterList'
import ShelterItem from './ShelterItem';
import SearchInfo from './Searchinfo'


function Searchfilter(props) {
    const rawData = [
        {
            name: "Lucky",
            type: "Cat",
            medcer: true
        },
        {
            name: "Kuma",
            type: "Cat",
            medcer: true
        },
        {
            name: "Sarang",
            type: "Dog",
            medcer: false
        },
        {
            name: "Kuro",
            type: "Cat",
            medcer: false
        }
    ]

    const radios = [
        { name: 'Gold', value: 1 },
        { name: 'Silver', value: 2 },
    ]

    const [data_rooms, setDataRooms] = useState([]);
    const [data_pets, setDataPets] = useState([]);
    const [payload_rooms, setPayloadRooms] = useState({})

    //ของจริง
    useEffect(() => {
        const fetchData = async () => {
            // const result_pets = await Get("api/pets/?user_id="+props.userinfo.id).then((d) => {
            const result_pets = await Get("api/pets/?user_id=2").then((d) => {
                setDataPets(d.pets)
                setPetname(d.pets[0].pet_name)
            })
        }
        fetchData()
    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result_pets = await Get("api/pets/").then((d) => {
    //             setDataPets(d.pets)
    //             setPetname(d.pets[0].pet_name)
    //         })
    //     }
    //     fetchData()
    // }, [])

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [petname, setPetname] = useState('');
    const [pettype, setPettype] = useState('');
    const [petid, setPetid] = useState(1);
    const [meals, setMeals] = useState(false);
    const [aircon, setAircon] = useState(false);
    const [pool, setPool] = useState(false);
    const [walking, setWalking] = useState(false);
    const [realPrice, setRealPrice] = useState([2000, 5000]);
    const [slidePrice, setSlidePrice] = useState([20, 50]);
    const [tier, setRadioValue] = useState(1);
    const [showshelterlist, setShowshelterlist] = useState(false)
    const [showshelterinfo, setShowshelterinfo] = useState(false)
    
    const [roomData, setRoomData] = useState({})

    // const selectRoom = (event, roomId) => {
    //     // Find room that have room id = roomId abd return
    //     console.log(roomId + "Addd")
    // }

    const selectRoom = (room_id) => {
        // Find room that have room id = roomId abd return
        setRoomData(data_rooms.filter((room)=> {
            return room.room_id === room_id
        })[0])
    }

    const handlePriceChange = (event, newSlidePrice) => {
        setSlidePrice(newSlidePrice)
        setRealPrice([newSlidePrice[0] * 100, newSlidePrice[1] * 100])
    }

    const handleMealsChange = (event) => {
        setMeals(!meals)
    }

    const handleAirconChange = (event) => {
        setAircon(!aircon)
    }

    const handlePoolChange = (event) => {
        setPool(!pool)
    }

    const handleWalkingChange = (event) => {
        setWalking(!walking)
    }

    const renderpetname = (pet) => {
        return (
            <option>
                {pet.pet_name}
            </option>
        )
    }

    const changetype_medcer = (eachnont) => {
        return eachnont.pet_name === petname
    }

    const handlePetChange = (petname) => {
        setPetname(petname)
        setPetid(data_pets.filter((eachnont) => {
            return eachnont.pet_name===petname
        })[0].petid)
    }

    const handleSubmit = (e) => {
        let payload = {}
        payload.check_in_date = startDate
        payload.check_out_date = endDate
        payload.min_price = realPrice[0]
        payload.max_price = realPrice[1]
        payload.tier = tier
        payload.has_meals = meals
        payload.has_air_con = aircon
        payload.has_pool = pool
        payload.walking = walking
        payload.pet_type = pettype
        payload.pet_id = petid
        // setPayloadRooms(payload)
        e.preventDefault()
        const fetchData = async () => {
            const result_rooms = await Post("api/search-rooms/",payload).then((d) => {
                // console.log(d)
                setDataRooms(d.rooms)
                setRoomData(d.rooms[0])
            })
        }
        fetchData()
        setShowshelterlist(true)
        setShowshelterinfo(true)
    }

    return (
        <div>
            <div style={{
            backgroundColor: "#F1F9FF",
            height: "100%", width: "25%", position: "absolute", top: "20.3%"
            }}>
            <Form>
                <Form inline controlId="select-pet">
                    <Form.Label style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", fontWeight: "bold" }}>
                        Select pet
                    </Form.Label>
                    <Form.Control value={petname} onChange={(e) => { handlePetChange(e) }} as="select" size="sm" style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", borderRadius: "50px", borderColor: "white" }}>
                        {/* {rawData.map(renderpetname)} */}
                        {data_pets.map(renderpetname)}
                    </Form.Control>
                    <Showpetinfo nontinfoList={data_pets.filter(changetype_medcer) } />
                    {/* {data_pets.filter(handletype)} */}
                </Form>

                <Form.Group controlId="select-checkin-checkout-dates">
                    <Form.Label style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", fontWeight: "bold" }}>
                        Check in and Check out dates
                    </Form.Label>
                    <Form inline style={{ marginLeft: "5px" }}>
                        {/*ใส่รูป*/}
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} isClearable placeholderText="XX/XX/XXXX" dateFormat="dd/MM/yyyy" />
                        <DatePicker selected={endDate} onChange={date => setEndDate(date)} isClearable placeholderText="XX/XX/XXXX" dateFormat="dd/MM/yyyy" />
                    </Form>
                </Form.Group>

                <Form.Group controlId="select-shelter-price-range">
                    <Form.Label style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", fontWeight: "bold" }}>
                        Shelter price range
                    </Form.Label>
                    <div style={{ width: "80%", marginLeft: "30px", color: "#2799FB" }}>
                        <Slider
                            value={slidePrice}
                            onChange={handlePriceChange}
                            valueLabelDisplay="off"
                            aria-labelledby="shelter-price-range-slider"
                        // getAriaValueText={valuetext}
                        />
                    </div>
                    <Container>
                        <Row>
                            <Col><ShowMinprice minmaxlist={realPrice} /></Col>
                            <Col><ShowMaxprice minmaxlist={realPrice} /></Col>
                        </Row>
                    </Container>
                </Form.Group>

                <Form.Group controlId="select-facilities">
                    <Form.Label style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", fontWeight: "bold" }}>
                        Facilities
                    </Form.Label>
                    {/* <img src={PetLogo} style={{width: "100%", height: "70px"}}/> */}
                    <Form.Check onChange={(e) => { handleMealsChange(e) }} style={{ color: "#2799FB", marginLeft: "10px", width: "10%" }} type={'switch'} id='facility-meals' label='Meals' />
                    <Form.Check onChange={(e) => { handleAirconChange(e) }} style={{ color: "#2799FB", marginLeft: "10px" }} type={'switch'} id='facility-aircon' label='Air conditioner' />
                    <Form.Check onChange={(e) => { handlePoolChange(e) }} style={{ color: "#2799FB", marginLeft: "10px" }} type={'switch'} id='facility-swimmingpool' label='Swimming pool' />
                    <Form.Check onChange={(e) => { handleWalkingChange(e) }} style={{ color: "#2799FB", marginLeft: "10px" }} type={'switch'} id='facility-walking' label='Walking' />
                </Form.Group>

                <Form.Group controlId="select-shelter-tier">
                    <Form.Label style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", fontWeight: "bold" }}>
                        Shelter Tier
                    </Form.Label>
                    <br></br>
                    <ButtonGroup toggle style={{ marginLeft: "30px" }}>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="primary"
                                name="radio"
                                value={radio.value}
                                checked={tier === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Form.Group>


                {/* <Link to="/Navbar_logout"> */}
                <Button variant="primary" type="submit" size="lg" style={{ fontWeight: "bold", marginLeft: "20px" }} onClick={(e) => { handleSubmit(e) }}>
                    Submit filter
                </Button>
                {/* </Link> */}
            </Form>
            </div>
            <div>
                {/* { showshelterlist && <ShelterList RoomsList={data_rooms} handleClick={selectRoom} nontID={petid} nontownerID={props.userinfo.id}/>} */}
                { showshelterlist && <ShelterList RoomsList={data_rooms} handleClick={selectRoom} />}
                { showshelterlist && typeof(roomData.room_name)!=='undefined' && <SearchInfo RoomsList={roomData} />}
            </div>
        </div>
    );
}

export default Searchfilter;