import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-modal'
import Background from '../bg/white.png'
import SearchInfo from '../components/Searchinfo.js'
import { Post } from '../server.js'

function StarRating({ count, value,
    inactiveColor = '#ddd',
    size = 24,
    activeColor = '#f00', onChange }) {

    const stars = Array.from({ length: count }, () => '★')

    const handleChange = (value) => {
        onChange(value + 1);
    }

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
                        onClick={() => handleChange(index)}>{s}</span>
                )
            })}
        </div>
    )
}

const dateToString = (date) => {

    const dateList = date.toString().split(" ")
    let day = dateList[2]
    let month = ""
    switch(dateList[1]) {
        case "Jan" :
            month = "01"
            break
        case "Feb" :
            month = "02"
            break
        case "Mar" :
            month = "03"
            break
        case "Apr" :
            month = "04"
            break
        case "May":
            month = "05"
            break
        case "Jun":
            month = "06"
            break
        case "Jul":
            month = "07"
            break
        case "Aug":
            month = "08"
            break
        case "Sep":
            month = "09"
            break
        case "Oct":
            month = "10"
            break
        case "Nov":
            month = "11"
            break
        case "Dec":
            month = "12"
            break
        default :
            month = "01"
            break
    }
    let year = dateList[3]
    return day+"-"+month+"-"+year
}

const ShelterItem = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [showSearchInfo, setShowSearchInfo] = useState('')

    const [data_reservation, setDataReservation] = useState({});
    const [showreservation, setShowReservation] = useState(false)
    const [nontOwnerID, setnontOwnerID] = useState('')
    const [nontID, setnontID] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOudDate, setCheckOutDate] = useState('')

    const handleSubmit = (room_id) => {
        props.handleClick(room_id)
    }

    const handleSubmitReserve = (e) => {
        let payload = {}
        payload.nont_owner_id = props.user_id
        payload.nont_id = props.nont_id
        payload.room_id = props.shelter.room_id
        payload.check_in_date = dateToString(props.check_in_date)
        payload.check_out_date = dateToString(props.check_out_date)
        e.preventDefault()
        const fetchData = async () => {
            const result_rooms = await Post("api/reservations/", payload).then((d) => {
                setDataReservation(d)
                props.reRender()
            })
        }
        fetchData()
        setModalIsOpen(true)
    }

    let tmp = props.shelter
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div class="container-left" style={{ width: "45%", border: "1px solid black", margin: "5px", padding: "5px", backgroundColor: "#e1f5fe" }}>
                    <div class="row">
                        <div class="col-sm" style={{ width: "25%" }}>
                            <img src={'http://localhost:8000/' + props.shelter.room_pics[0]} alt="a room" style={{ width: "100%", height: "100px", padding: "2px" }} />
                        </div>
                        <div class="col-sm" style={{ fontSize: "80%", fontWeight: "bold", width: "50%" }}>
                            <div class="row">
                                <label>{props.shelter.room_name}</label>
                            </div>
                            <div class="row">
                                <label>{props.shelter.shelter_name}</label>
                            </div>
                            <div class="row">
                                <label>{props.shelter.room_price}</label>
                            </div>
                            <div class="row">
                                <label style={{ fontWeight: "normal" }}>Room available: {props.shelter.room_available}</label>
                            </div>
                        </div>
                        <div class="col-sm" style={{ textAlign: "right" }}>
                            <div>
                                <StarRating
                                    count={5}
                                    size={12}
                                    value={props.shelter.shelter_star}
                                    activeColor={'#1167b1'}
                                    inactiveColor={'#6a6866'} />
                            </div><br />
                            <div class="row-sm">
                                <button size="sm" onClick={(e) => { handleSubmit(props.shelter.room_id) }} style={{ fontSize: "65%", border: "none", backgroundColor: "unset" }}>
                                    View info »
                                </button>
                            </div>
                            <div class="row-sm">
                                <Button variant="primary" type="submit" size="sm" onClick={(e) => { handleSubmitReserve(e) }}>
                                    Reserve
                                </Button>
                                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                                    style={
                                        {
                                            overlay: {
                                                zIndex: 1000,
                                                position: 'fixed',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                            },
                                            content: {
                                                lineHeight: 2,
                                                textAlign: 'center',
                                                position: 'fixed',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                padding: '20px',
                                                height: "55%",
                                                zIndex: 1000,
                                                backgroundImage: `url(${Background})`,
                                                fontFamily: "Chalkboard SE",
                                                fontSize: '120%'
                                            }
                                        }
                                    }>
                                    <h2>Reservation success!</h2>
                                    <p>Reservation ID : {typeof(data_reservation!=='undefined') && data_reservation.reservation_id}</p>
                                    <p>Pet name : {typeof(data_reservation)!=='undefined' && data_reservation.pet_name}</p>
                                    <p>Shelter : {typeof(data_reservation)!=='undefined' && data_reservation.shelter_name}</p>
                                    <p>Check in date : {typeof(data_reservation)!=='undefined' && data_reservation.check_in_date}</p>
                                    <p>Check out date : {typeof(data_reservation)!=='undefined' && data_reservation.check_out_date}</p>
                                    <div>
                                        <Button svariant="primary" type="submit" onClick={() => setModalIsOpen(false)}>
                                            Close
                                        </Button>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                {showSearchInfo!=='' && <SearchInfo RoomsList={tmp} />}
            </div> */}
        </div>
    );
}

export default ShelterItem;