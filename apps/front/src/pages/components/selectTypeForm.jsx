import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function CreateReservationForm(props) {

    return(
        <div className="createParkForm__radios">
            <div id="radio1" className={props.type == 1 ? 'radio_active createParkForm__radios__radio createParkForm__radios__radio__active' : 'createParkForm__radios__radio'}  onClick={() => props.setType(1)}>
                <img src="/bike.svg" alt=""/>
            </div>
            <div id="radio2" className={props.type == 2 ? 'radio_active createParkForm__radios__radio createParkForm__radios__radio__active' : 'createParkForm__radios__radio'}  onClick={() => props.setType(2)}>
                <img src="/scooter.svg" alt=""/>
            </div>
            <div id="radio3" className={props.type == 3 ? 'radio_active createParkForm__radios__radio createParkForm__radios__radio__active' : 'createParkForm__radios__radio'}  onClick={() => props.setType(3)}>
                <img src="/car.svg" alt=""/>
            </div>
            <div id="radio4" className={props.type == 4 ? 'radio_active createParkForm__radios__radio createParkForm__radios__radio__active' : 'createParkForm__radios__radio'}  onClick={() => props.setType(4)}>
                <img src="/pickup.svg" alt=""/>
            </div>
        </div>
    )
}