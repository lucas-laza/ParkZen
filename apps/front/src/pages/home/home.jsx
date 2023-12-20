import { Outlet } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import CreateParkForm from '../components/createParkForm'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import customCarIcon from '../../assets/caricon.svg';
import customMarkerIcon from '../../assets/marker-icon-2x.png';
import CreateReservationForm from "../components/createReservationForm";
import React, {useState, useEffect} from "react";
import axios from "axios";
import DeleteParkForm from "../components/deleteParkForm";
export default function Home() {
    const [parks, setParks] = useState([]);
    const position = [50.633333, 3.066667];

    const customIcon = new L.Icon({
        iconUrl: customMarkerIcon,
        iconSize: [32, 32], // Ajustez la taille de l'icône selon vos besoins
        iconAnchor: [16, 32], // Ajustez l'ancre de l'icône selon vos besoins
        popupAnchor: [0, -32], // Ajustez l'ancre du popup selon vos besoins
    });

    const carIcon = new L.Icon({
        iconUrl: customCarIcon,
        iconSize: [32, 32], // Ajustez la taille de l'icône selon vos besoins
        iconAnchor: [16, 32], // Ajustez l'ancre de l'icône selon vos besoins
        popupAnchor: [0, -32], // Ajustez l'ancre du popup selon vos besoins
    });

    useEffect(() => {
        getParks();
    }, []);


    const getParks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/parks');
            if(response){
                setParks(response.data);
                console.log('response : ' + JSON.stringify(response.data));
            }
        } catch (error) {
            console.error(error);
        } finally {
            console.log('Call done');
        }
    };

    return(
        <div className=" home">
            <div className="home_widgets bg-light">
                <div className="home_widgets_account">
                    <span>Nom prenom</span>
                    <span>Vehicules</span>
                    <span>1</span>
                    <span>2</span>
                </div>
                <div className="home_widgets_parks d-flex flex-column">
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                            <span className="home_widgets_parks_title">Vos places de parking</span>
                        <CreateParkForm submit={getParks}/>
                    </div>
                    <div className='home_widgets_parks_content'>
                        
                        {parks.length > 0 ?
                            parks.map((park, index) => (
                                <div key={index} className="addressContainer">
                                    <div className="d-flex flex-column align-items-start justify-content-between">
                                        <span className="addressContainer_address">{park.address.street}, {park.address.city} {park.address.zipCode}</span>
                                        <span className="addressContainer_renter mt-1">Publié par Antoine Gaudry</span>
                                    </div>
                                    <DeleteParkForm submit={getParks} id={park.id}/>
                                </div>
                            ))
                            :
                            <span className="home_widgets_parks_subtitle text-secondary">Vous n'avez aucune place de parking en location, n'hesitez pas a en ajouter une ! dx </span>
                        }
                    </div>


                </div>
                <div className="home_widgets_rents d-flex flex-column">
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <span className="home_widgets_rents_title">Vos réservations</span>
                        <CreateReservationForm/>
                    </div>
                    <span className="home_widgets_rents_subtitle text-secondary">Vous n'avez aucune réservation actuellement, n'hesitez pas a faire une recherche pour en trouver une ! dx </span>
                </div>
            </div>
            <div className="home_map">
                <div className='test'>
                    <div className="home_map_header">
                        <div className='d-flex flex-row align-items-center justify-content-between'>
                            <span className='home_map_header_title '>Les parkings a proximité</span>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newReservation">
                                Recherche
                            </button>
                        </div>
                    </div>
                    <MapContainer center={position} zoom={13} className='map' style={{ flex: 1, width: '100%'}}>
                        <TileLayer
                            url="https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=54YF1jntc9MOdhlE2wlZEEhPUkB8BUhAdYYLWWNdtpjJL5hsogfIeWHAaslFg3Md"
                            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position} icon={customIcon}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                        <Marker position={[50.653433, 3.066677]} icon={carIcon}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}