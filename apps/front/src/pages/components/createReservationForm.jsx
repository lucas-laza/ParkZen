import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SelectTypeForm from './selectTypeForm'
import axios from "axios";
export default function CreateReservationForm() {

    const [type, setType] = useState(null);
    const [citySearch, setCitySearch] = useState("");
    const [addresses, setAddresses] = useState([]);

    function submit(){

    }

    const cityCall = async () => {
        const urlC = `https://api-adresse.data.gouv.fr/search/?q=${citySearch}&autocomplete=1`
        axios.get(urlC)
            .then(response => {
                let datas = response.data.features
                let array = []
                datas.map(c =>
                    array.push({
                        address : c.properties.label,
                        x : c.properties.x,
                        y : c.properties.y,
                    })
                )
                setAddresses(array)
            })
            .catch(error => {
                console.error('Error fetching AQI:', error);
            });
    }

    useEffect(() => {
        if(citySearch.length > 3) {
            setTimeout(() => console.log('Initial timeout!'), 500);
            cityCall()
        } else {
            setAddresses([])
        }
    }, [citySearch]);

    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newReservation">
                Nouvelle reservation
            </button>

            <div className="modal modal-xl fade" id="newReservation" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Chercher une place de parking</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex flex-row justify-content-between flex-wrap'>
                                <div className='col-12 d-flex flex-row justify-content-between flex-nowrap'>
                                    <div className='col-10 me-1'>
                                        <span className='ms-1'>Adresse de location</span>
                                        <input type="text" className='form-control mt-2' value={citySearch} placeholder='Entrez votre adresse' onChange={(value) => (setCitySearch(value.target.value))}/>
                                        {addresses.length > 0 && addresses[0].address != citySearch ?
                                            <ul className="list-group position-absolute col-6" style={{zIndex: 1000, cursor: "pointer"}}>
                                                {addresses.map(address =>
                                                    <li className="list-group-item pointer-event itemcustom" onClick={() => {setCitySearch(address.address); setAddresses([])}}>{address.address}</li>
                                                )}
                                            </ul>
                                            : ''}
                                    </div>
                                    <div className='col-2 ms-1'>
                                        <span className='ms-1'>Rayon de recherche</span>
                                        <select className='form-select mt-2' >
                                            <option value=""> 1 km</option>
                                            <option value=""> 5 km</option>
                                            <option value=""> 10 km</option>
                                            <option value=""> 15 km</option>
                                            <option value=""> > 20 km</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-12 d-flex flex-row justify-content-between flex-nowrap mt-4'>
                                    <div className='col-6 me-1'>
                                        <span className='ms-1'>Date de début</span>
                                        <input type="date" className='form-control mt-2'/>
                                    </div>
                                    <div className='col-6 ms-1'>
                                        <span className='ms-1'>Date de fin</span>
                                        <input type="date" className='form-control mt-2'/>
                                    </div>
                                </div>

                                <div className='col-12 mt-4'>
                                    <span className='ms-1'>Type de place</span>
                                    <div className='mt-2'>
                                        <SelectTypeForm/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Retour</button>
                            <button type="button" className="btn btn-primary" onClick={() => submit()}>Rechercher</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}