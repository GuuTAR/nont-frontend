import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-modal'
import Background from '../IMG_2481.jpg'

function StarRating({count, value, 
    inactiveColor='#ddd',
    size=24,
    activeColor='#f00', onChange}) {

  const stars = Array.from({length: count}, () => '★')

  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style=activeColor;
        }
        return (
          <span className={"star"}
            key={index}
            style={{color: style, width:size, height:size, fontSize: size}}
            onClick={()=>handleChange(index)}>{s}</span>
        )
      })}
    </div>
  )
}

const ShelterItem = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div class="container-left" style={{width: "35%", border: "1px solid black", margin: "5px", padding: "5px", backgroundColor: "#e1f5fe"}}>
            <div class="row">
                <div class="col-sm" style={{width: "25%"}}>
                    <img src={'http://localhost:8000/' + props.shelter.room_pics[0]} alt="a room" style={{width: "100%", height: "100px", padding: "2px"}}/>
                </div>
                <div class="col-sm" style={{fontSize: "80%", fontWeight: "bold", width: "50%"}}>
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
                        <label style={{fontWeight: "normal"}}>Room available: {props.shelter.room_available}</label>
                    </div>
                </div>
                <div class="col-sm" style={{textAlign: "right"}}>
                    <div>
                    <StarRating 
                        count={5}
                        size={12}
                        value={props.shelter.shelter_star}
                        activeColor ={'#1167b1'}
                        inactiveColor={'#6a6866'}/>
                    </div><br/>
                    <div class="row-sm">
                        <button size="sm" style={{fontSize: "65%", border: "none", backgroundColor: "unset"}}>
                            View info »
                        </button>
                    </div>
                    <div class="row-sm">
                        <Button variant="primary" type="submit" size="sm" onClick= {() => setModalIsOpen(true)}>
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
                            <p>Reservation ID : {props.shelter.id}</p>
                            <p>Pet name : {props.shelter.petname}</p>
                            <p>Shelter : {props.shelter.shelterName}</p>
                            <p>Room : {props.shelter.roomName}</p>
                            <p>Check in date : {props.shelter.checkindate}</p>
                            <p>Check out date : {props.shelter.checkoutdate}</p>
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
    );
}

export default ShelterItem;