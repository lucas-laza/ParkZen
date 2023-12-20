import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SelectTypeForm from './selectTypeForm';
import axios from 'axios';
export default function CreateParkForm(props) {

    const [isPrivate, setIsPrivate] = useState(true);
    const [isOutdoor, setIsOutdoor] = useState(true);
    const [name, setName] = useState(null);
    const [dateBegin, setDateBegin] = useState(null);
    const [price, setPrice] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [postalCode, setPostalCode] = useState(null);
    const [type, setType] = useState(null);


    function submit(){
        fetchData();
    }

    // Définir les headers
    const headers = {
        'Content-Type': 'application/json'
    };

    const axiosConfig = {
        headers: headers
    };

    const fetchData = async () => {
        const datas = {
            name : name,
            priceForOneHour : price,
            rentStartAt : dateBegin,
            renter : {
                firstName : "Antoine",
                lastName : "Gaudry"
            },
            spaceType : {
                id : type
            },
            caracteristics : {
                isPublic : isPrivate,
                isIndoor : isOutdoor
            },
            address : {
                street : address,
                city : city,
                zipCode : postalCode
            }
        };
        console.log(datas);
        try {
            const response = await axios.post('http://localhost:3000/parks', datas, axiosConfig);
            if(response){
                console.log(response);
                props.submit()
                setAddress("")
                setCity("")
                setPostalCode("")
                setName("")
                setDateBegin("")
                setIsOutdoor(true)
                setIsPrivate(true)
                setPrice("")
            }
        } catch (error) {
            console.error(error);
        } finally {
            console.log('Call done');
        }
    };


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
                            <div className="row container mt-2">
                                <div className="mb-3 col-4">
                                    <label htmlFor="name" className="form-label">Nom de la place</label>
                                    <input type="text" className="form-control" value={name} id="name" onChange={(value) => (setName(value.target.value))}/>
                                </div>
                                <div className="mb-3 col-4">
                                    <label htmlFor="dateBegin" className="form-label">Date de mise en location</label>
                                    <input type="date" className="form-control" value={dateBegin} id="dateBegin" onChange={(value) => (setDateBegin(value.target.value))}/>
                                </div> 
                                <div className="mb-3 col-4">
                                    <label htmlFor="price" className="form-label">Prix a l'heure</label>
                                    <input type="number" className="form-control" value={price} id="price" onChange={(value) => (setPrice(value.target.value))}/>
                                </div>
                                <div className="mb-3 col-6">
                                    <label htmlFor="address" className="form-label">Adresse</label>
                                    <input type="text" className="form-control" value={address} id="address" onChange={(value) => (setAddress(value.target.value))}/>
                                </div>
                                <div className="mb-3 col-3">
                                    <label htmlFor="city" className="form-label">Ville</label>
                                    <input type="text" className="form-control" value={city} id="city" onChange={(value) => (setCity(value.target.value))}/>
                                </div>
                                <div className="mb-3 col-3">
                                    <label htmlFor="postalCode" className="form-label">Code postal</label>
                                    <input type="text" className="form-control" value={postalCode} id="postalCode" onChange={(value) => (setPostalCode(value.target.value))}/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="type" className="form-label mb-2">Caracteristiques</label>

                                    <div className="d-flex flex-row">
                                        <input type="checkbox" value={isPrivate} className="btn-check" id="isPrivateCheck" autoComplete="off" />
                                        {isPrivate == true ?
                                            <label id='labelPrivate' className="btn btn-outline-primary" htmlFor="isPrivateCheck" onClick={() => setIsPrivate(false)}>Privé <FontAwesomeIcon icon="fa-solid fa-lock" /></label>
                                            :
                                            <label id='labelPublic' className="btn btn-primary" htmlFor="isPrivateCheck" onClick={() => setIsPrivate(true)}>Public <FontAwesomeIcon icon="fa-solid fa-lock-open" /></label>
                                        }

                                        <input type="checkbox" value={isOutdoor} className="btn-check ms-2" id="isIndoorCheck" autoComplete="off"/>

                                        {isOutdoor == true ?
                                        <label id='labelOutdoor' className="btn btn-outline-primary ms-2" htmlFor="isIndoorCheck" onClick={() => setIsOutdoor(false)}>Extérieur <FontAwesomeIcon icon="fa-solid fa-road" /></label>
                                            :
                                        <label id='labelIndoor' className="btn btn-primary ms-2" htmlFor="isIndoorCheck" onClick={() => setIsOutdoor(true)}>Interieur <FontAwesomeIcon icon="fa-solid fa-warehouse" /></label>
                                        }

                                    </div>
                                </div>
                                <label htmlFor="type" className="form-label">Type de place </label>
                                {/*Ici on peut faire un tableau et un for */}
                                <SelectTypeForm type={type} setType={setType}/>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => submit()}>Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}