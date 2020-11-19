import React from 'react'

import ShelterItem from './ShelterItem'

const rawData = [
    {
        id: 1,
        petname: "Cat",
        picture: 'media/place1-1.jpg',
        roomName: "Room_A",
        shelterName: "Shelter_Raksud",
        price: "60$",
        available: "12",
        rating: "4",
        checkindate: "13/06/2021",
        checkoutdate: "14/06/2021"
    },
    {
        id: 2,
        petname: "Dog",
        picture: 'media/place1-2.jpg',
        roomName: "Room_A",
        shelterName: "Shelter_Raksud",
        price: "60$",
        available: "1",
        rating: "3",
        checkindate: "17/06/2021",
        checkoutdate: "18/06/2021"
    }

]

const ShelterList = (props) => {

    const renderShelter = (shelter, index) => {
        return (
            <div>
                <ShelterItem shelter = {shelter}/>
                {console.log({shelter})}
            </div>
        )
    }

    return (
        <div>
            { props.RoomsList.length!==0 && props.RoomsList.map(renderShelter) }
            {console.log(33)}
        </div>
    )
}

export default ShelterList;