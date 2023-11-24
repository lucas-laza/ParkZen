import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function CreateReservationForm() {

    const [type, setType] = useState(null);


    return(
        <div className="createParkForm__radios">
            <div id="radio1" className={type == 1 ? 'radio_active createParkForm__radios__radio createParkForm__radios__radio__active' : 'createParkForm__radios__radio'}  onClick={() => setType(1)}>
                <img src="/bike.svg" alt=""/>
            </div>
            <div id="radio2" className={type == 2 ? 'radio_active createParkForm__radios__radio createParkForm__radios__radio__active' : 'createParkForm__radios__radio'}  onClick={() => setType(2)}>
                <img src="/scooter.svg" alt=""/>
            </div>
            <div id="radio3" className={type == 3 ? 'radio_active createParkForm__radios__radio createParkForm__radios__radio__active' : 'createParkForm__radios__radio'}  onClick={() => setType(3)}>
                <img src="/car.svg" alt=""/>
            </div>
            <div id="radio4" className={type == 4 ? 'radio_active createParkForm__radios__radio createParkForm__radios__radio__active' : 'createParkForm__radios__radio'}  onClick={() => setType(4)}>
                <img src="/pickup.svg" alt=""/>
            </div>
        </div>
    )
}