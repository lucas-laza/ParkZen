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

    function submit(){
        console.log(name, dateBegin, price, address, city, postalCode)
    }

    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Ajouter une place
            </button>

            <div className="modal modal-xl fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ajouter une place de parking</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                        {isPrivate == true ?
                                            <label id='labelPrivate' className="btn btn-outline-primary" htmlFor="isPrivateCheck" onClick={() => setIsPrivate(false)}>Privé <FontAwesomeIcon icon="fa-solid fa-lock" /></label>
                                            :
                                            <label id='labelPublic' className="btn btn-primary" htmlFor="isPrivateCheck" onClick={() => setIsPrivate(true)}>Public <FontAwesomeIcon icon="fa-solid fa-lock-open" /></label>
                                        }

                                        <input type="checkbox" className="btn-check ms-2" id="isIndoorCheck" autoComplete="off"/>

                                        {isOutdoor == true ?
                                        <label id='labelOutdoor' className="btn btn-outline-primary ms-2" htmlFor="isIndoorCheck" onClick={() => setIsOutdoor(false)}>Extérieur <FontAwesomeIcon icon="fa-solid fa-road" /></label>
                                            :
                                        <label id='labelIndoor' className="btn btn-primary ms-2" htmlFor="isIndoorCheck" onClick={() => setIsOutdoor(true)}>Interieur <FontAwesomeIcon icon="fa-solid fa-warehouse" /></label>
                                        }

                                    </div>
                                </div>
                                <label htmlFor="type" className="form-label">Type de place </label>
                                {/*Ici on peut faire un tableau et un for */}
                                <div className="createParkForm__radios">
                                    <div id="radio1" className={type == 1 ? 'radio_active createParkForm__radios__radio' : 'createParkForm__radios__radio'}  onClick={() => setType(1)}>
                                        <img src="/bike.svg" alt=""/>
                                    </div>
                                    <div id="radio2" className={type == 2 ? 'radio_active createParkForm__radios__radio' : 'createParkForm__radios__radio'}  onClick={() => setType(2)}>
                                        <img src="/scooter.svg" alt=""/>
                                    </div>
                                    <div id="radio3" className={type == 3 ? 'radio_active createParkForm__radios__radio' : 'createParkForm__radios__radio'}  onClick={() => setType(3)}>
                                        <img src="/car.svg" alt=""/>
                                    </div>
                                    <div id="radio4" className={type == 4 ? 'radio_active createParkForm__radios__radio' : 'createParkForm__radios__radio'}  onClick={() => setType(4)}>
                                        <img src="/pickup.svg" alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
                            <button type="button" className="btn btn-primary" onClick={() => submit()}>Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}