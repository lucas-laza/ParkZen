import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function CreateParkForm() {

    const [type, setType] = useState(null);
    const [isPrivate, setIsPrivate] = useState(true);
    const [isOutdoor, setIsOutdoor] = useState(true);
    const [name, setName] = useState(null);
    const [dateBegin, setDateBegin] = useState(null);
    const [price, setPrice] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [postalCode, setPostalCode] = useState(null);

    //@TODO A degager pour ternaires dans css
    useEffect(() => {
        if(type != null){
            var elements = document.querySelectorAll(".createParkForm__radios__radio__active");

            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove("createParkForm__radios__radio__active");
            }
            document.getElementById('radio' + type).classList.add('createParkForm__radios__radio__active')
        }
    }, [type]);

    useEffect(() => {
        if(isPrivate == true){
            document.getElementById('labelPrivate').classList.remove('d-none')
            document.getElementById('labelPublic').classList.add('d-none')
        } else {
            document.getElementById('labelPrivate').classList.add('d-none')
            document.getElementById('labelPublic').classList.remove('d-none')
        }
    }, [isPrivate]);

    useEffect(() => {
        console.log(isOutdoor)
        if(isOutdoor == false){
            document.getElementById('labelIndoor').classList.remove('d-none')
            document.getElementById('labelOutdoor').classList.add('d-none')
        } else {
            document.getElementById('labelOutdoor').classList.remove('d-none')
            document.getElementById('labelIndoor').classList.add('d-none')
        }
    }, [isOutdoor]);

    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                +
            </button>

            <div className="modal modal-xl fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ajouter une place de parking</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row createParkForm container mt-2">
                                <div className="mb-3 col-4">
                                    <label htmlFor="name" className="form-label">Nom de la place</label>
                                    <input type="text" className="form-control" id="name" onChange={(value) => (setName(value.target.value))}/>
                                </div>
                                <div className="mb-3 col-4">
                                    <label htmlFor="dateBegin" className="form-label">Date de mise en location</label>
                                    <input type="date" className="form-control" id="dateBegin" onChange={(value) => (setDateBegin(value.target.value))}/>
                                </div>
                                <div className="mb-3 col-4">
                                    <label htmlFor="price" className="form-label">Prix a l'heure</label>
                                    <input type="number" className="form-control" id="price" onChange={(value) => (setPrice(value.target.value))}/>
                                </div>
                                <div className="mb-3 col-6">
                                    <label htmlFor="address" className="form-label">Adresse</label>
                                    <input type="text" className="form-control" id="address" onChange={(value) => (setAddress(value.target.value))}/>
                                </div>
                                <div className="mb-3 col-3">
                                    <label htmlFor="city" className="form-label">Ville</label>
                                    <input type="text" className="form-control" id="city" onChange={(value) => (setCity(value.target.value))}/>
                                </div>
                                <div className="mb-3 col-3">
                                    <label htmlFor="postalCode" className="form-label">Code postal</label>
                                    <input type="text" className="form-control" id="postalCode" onChange={(value) => (setPostalCode(value.target.value))}/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="type" className="form-label mb-2">Caracteristiques</label>

                                    <div className="d-flex flex-row">
                                        <input type="checkbox" className="btn-check" id="isPrivateCheck" autoComplete="off" />
                                        <label id='labelPrivate' className="btn btn-outline-primary" htmlFor="isPrivateCheck" onClick={() => setIsPrivate(false)}>Privé <FontAwesomeIcon icon="fa-solid fa-lock" /></label>
                                        <label id='labelPublic' className="btn btn-primary d-none" htmlFor="isPrivateCheck" onClick={() => setIsPrivate(true)}>Public <FontAwesomeIcon icon="fa-solid fa-lock-open" /></label>

                                        <input type="checkbox" className="btn-check ms-2" id="isIndoorCheck" autoComplete="off"/>

                                        <label id='labelIndoor' className="btn btn-primary ms-2 d-none" htmlFor="isIndoorCheck" onClick={() => setIsOutdoor(true)}>Interieur <FontAwesomeIcon icon="fa-solid fa-warehouse" /></label>
                                        <label id='labelOutdoor' className="btn btn-outline-primary ms-2" htmlFor="isIndoorCheck" onClick={() => setIsOutdoor(false)}>Extérieur <FontAwesomeIcon icon="fa-solid fa-road" /></label>

                                    </div>
                                </div>
                                <label htmlFor="type" className="form-label">Type de place </label>
                                {/*Ici on peut faire un tableau et un for */}
                                <div className="createParkForm__radios">
                                    <div id="radio1" className="createParkForm__radios__radio" onClick={() => setType(1)}>
                                        <img src="/Ride a bicycle-amico.svg" alt=""/>
                                    </div>
                                    <div id="radio2" className="createParkForm__radios__radio" onClick={() => setType(2)}>
                                        <img src="/Take%20Away-amico.svg" alt=""/>
                                    </div>
                                    <div id="radio3" className="createParkForm__radios__radio" onClick={() => setType(3)}>
                                        <img src="/By%20my%20car-amico.svg" alt=""/>
                                    </div>
                                    <div id="radio4" className="createParkForm__radios__radio" onClick={() => setType(4)}>
                                        <img src="/Pick%20up%20truck-amico.svg" alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
                            <button type="button" className="btn btn-primary">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}