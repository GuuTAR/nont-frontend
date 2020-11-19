import React from 'react'

import ShelterItem from './ShelterItem'

const rawData = [
    {
        id: 1,
        petname: "Cat",
        picture: '../IMG_2481.jpg',
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
        picture: '../logo.svg',
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
                {/* {console.log({shelter})} */}
            </div>
        )
    }

    return (
        <div>
            { rawData.map(renderShelter) }
        </div>
    )
}

export default ShelterList;