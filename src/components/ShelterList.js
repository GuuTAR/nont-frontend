import React from 'react'

import ShelterItem from './ShelterItem'

const ShelterList = (props) => {

    const renderShelter = (shelter, index) => {
        return (
            <div>
                <ShelterItem shelter = {shelter} handleClick={props.handleClick} nont_id={props.nont_id} user_id={props.user_id} check_in_date={props.check_in_date} check_out_date={props.check_out_date} reRender={props.reRender}/>
            </div>
        )
    }

    return (
        <div>
            { props.RoomsList.length!==0 && props.RoomsList.map(renderShelter) }
        </div>
    )
}

export default ShelterList;