import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PetLogo from '../pet-house.svg'

function Logo() {
    return (
        <div class="container" style={{width: "100%", margin: "5px", padding: "5px"}}>
            <div class="row">
                <div class="col-sm-1">
                    <img src={PetLogo} style={{width: "100%", height: "70px"}}/>
                </div>
                <div class="col-sm">
                    <h1 style={{fontWeight: "bold", fontFamily: "Chalkboard SE", color: "#1560bd", marginTop: "10px"}}>
                        Nont, Community of pet lovers
                    </h1>
                </div>
            </div>
        </div>
    );
}



export default Logo;