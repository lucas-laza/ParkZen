import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SelectTypeForm from './selectTypeForm';
import axios from 'axios';
export default function DeleteParkForm(props) {

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
        try {
            console.log(props.id);
            const response = await axios.delete('http://localhost:3000/parks', { data: { id: props.id } });
            if(response){
                console.log(response);
                props.submit()
            }
        } catch (error) {
            console.error(error);
        } finally {
            console.log('Call done');
        }
    };


    return(
        <>
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#exampleModal" + props.id}>
                <FontAwesomeIcon color={'red'} icon="fa-solid fa-trash" />
            </button>

            <div className="modal fade" id={"exampleModal" + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Êtes-vous sur de vouloir supprimer la place de parking ?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Non</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => submit()}>Oui</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}