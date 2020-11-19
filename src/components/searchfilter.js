import React, { useState, useEffect } from 'react'
import {Form, Row, Col,Button,ToggleButton,ButtonGroup, Container } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
// import Slider from '@material-ui/core/Slider';

import Showpetinfo from '../components/showpetinfo'

import ShowMaxprice from '../components/showmaxpriceinfo'
import ShowMinprice from '../components/showminpriceinfo'

import { Link } from 'react-router-dom'

import { Get } from '../server.js'

function Searchfilter(props) {
    const rawData = [
        {
            name: "Lucky",
            type: "Cat",
            medcer : true
        },
        {
            name: "Kuma",
            type: "Cat",
            medcer : true
        },
        {
            name: "Sarang",
            type: "Dog",
            medcer : false
        },
        {
            name: "Kuro",
            type: "Cat",
            medcer : false
        }
    ]

    const radios = [
        { name: 'Gold', value: '1' },
        { name: 'Silver', value: '2' },
    ]

    const [data_rooms, setDataRooms] = useState([]);
    const [data_pets, setDataPets] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [petname, setPetname] = useState('');
    const [pettype, setPettype] = useState('');
    const [petmed, setPetmed] = useState('');
    const [meals, setMeals] = useState(false);
    const [aircon, setAircon] = useState(false);
    const [pool, setPool] = useState(false);
    const [walking, setWalking] = useState(false);
    const [realPrice, setRealPrice] = useState([2000, 5000]);
    const [slidePrice, setSlidePrice] = useState([20, 50]);
    const [radioValue, setRadioValue] = useState('1');

    useEffect(async ()=> {
        const fetchData = async () => {
            const result_pets = await Get("api/pets")  
            setDataPets(result_pets.pets)
            setPetname(result_pets.pets[0].pet_name)
        }
        fetchData()
    }, [])
    
    

    const handlePriceChange = (event, newSlidePrice) => {
        setSlidePrice(newSlidePrice)
        setRealPrice([newSlidePrice[0]*100,newSlidePrice[1]*100])
    }

 
    // const renderpetname = (pet) => {
    //     return (
    //         <option>
    //             {pet.name}
    //         </option>
    //     )
    // }

    const renderpetname = (pet) => {
        return (
            <option>
                {pet.pet_name}
            </option>
        )
    }

    const changetype_medcer = (eachnont) => {
        return eachnont.pet_name===petname
    }

    const submitTest = (e) => {
        let payload = {}
        payload.meals = meals
        payload.aircon = aircon
        payload.pool = pool
        payload.walking = walking
        console.log(JSON.stringify(payload))
        //Get(payload)
        //result
        //handleData
        //send prop to book com
        e.preventDefault()
    }

    return (
        <div style={{backgroundColor:"#F1F9FF",
                height: "100%", width: "25%", position: "absolute", top: "20%", left: "15%"}}>
            <Form onSubmit={(e) => submitTest(e)}>
            <Form inline controlId="select-pet">
                <Form.Label style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", fontWeight:"bold" }}>
                    Select pet
                </Form.Label>
                <Form.Control value={petname} onChange={(e) => { setPetname(e.target.value) }} as="select" size="sm" style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", borderRadius: "50px", borderColor: "white" }}>
                    {/* {rawData.map(renderpetname)} */}
                    {data_pets.map(renderpetname)}
                </Form.Control>
                <Showpetinfo nontinfoList={data_pets.filter(changetype_medcer)}/>
            </Form>
            
            <Form.Group controlId="select-checkin-checkout-dates">
                <Form.Label style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", fontWeight:"bold" }}>
                    Check in and Check out dates
                </Form.Label>    
                <Form inline>
                    {/*ใส่รูป*/}
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} isClearable placeholderText="XX/XX/XXXX" dateFormat="dd/MM/yyyy"/>
                    <DatePicker selected={endDate} onChange={date => setEndDate(date)} isClearable placeholderText="XX/XX/XXXX" dateFormat="dd/MM/yyyy"/>
                </Form>
            </Form.Group>

            <Form.Group controlId="select-shelter-price-range">            
                <Form.Label style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", fontWeight:"bold" }}>
                    Shelter price range
                </Form.Label>            
                <div style={{ width:"80%", marginLeft: "30px", color: "#2799FB" }}> 
                    {/* <Slider
                        value={slidePrice}
                        onChange={handlePriceChange}
                        valueLabelDisplay="off"
                        aria-labelledby="shelter-price-range-slider"
                        // getAriaValueText={valuetext}
                    /> */}
                </div>
                <Container>
                    <Row>
                        <Col><ShowMinprice minmaxlist={realPrice} /></Col>
                        <Col><ShowMaxprice minmaxlist={realPrice} /></Col>
                    </Row>
                </Container>
            </Form.Group>

            <Form.Group controlId="select-facilities">
                <Form.Label style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", fontWeight:"bold" }}>
                    Facilities
                </Form.Label>
                {/* <img src={PetLogo} style={{width: "100%", height: "70px"}}/> */}
                <Form.Check onChange={() => {setMeals(!meals)}} style={{ color: "#2799FB", marginLeft: "10px"}} type={'switch'} id='facility-meals' label='Meals'/>
                <Form.Check onChange={() => {setAircon(!aircon)}} style={{ color: "#2799FB", marginLeft: "10px"}} type={'switch'} id='facility-aircon' label='Air conditioner'/>
                <Form.Check onChange={() => {setPool(!pool)}} style={{ color: "#2799FB", marginLeft: "10px"}} type={'switch'} id='facility-swimmingpool' label='Swimming pool'/>
                <Form.Check onChange={() => {setWalking(!walking)}} style={{ color: "#2799FB", marginLeft: "10px"}} type={'switch'} id='facility-walking' label='Walking'/>
            </Form.Group>

            <Form.Group controlId="select-shelter-tier">
                <Form.Label style={{ color: "#2799FB", marginLeft: "30px", marginTop: "10px", fontWeight:"bold" }}>
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
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                    {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>                    
            </Form.Group>
            
            {/* <Link to="/Navbar_logout"> */}
                <Button variant="primary" type="submit" size="lg" style={{fontWeight: "bold",marginLeft: "20px"}}>
                    Submit filter
                </Button>
            {/* </Link> */}

            </Form>
            {/* {console.log(data_rooms)}
            {console.log(data_pets)} */}
        </div>
    );
}

export default Searchfilter;