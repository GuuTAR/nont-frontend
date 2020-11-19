import React from 'react';
import { Button } from 'react-bootstrap'
import PetLogo from '../pet-house.svg'
import Background from '../rectangle1486.jpg'

function LogoWithLogout() {
    return (
        <div className="container" style={{width: "100%", margin: "5px", padding: "5px"}}>
            <div className="row">
                <div className="col-sm-1">
                    <img src={PetLogo} style={{width: "100%", height: "70px"}}/>
                </div>
                <div className="col-sm">
                    <h1 style={{fontWeight: "bold", fontFamily: "Chalkboard SE", color: "#1560bd", marginTop: "10px"}}>
                        Nont, Community of pet lovers
                    </h1>
                </div>
            </div>
        </div>
    );
}



export default LogoWithLogout;