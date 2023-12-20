import { Outlet } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import ParkingSingle from '../components/parking'
import CreateParkForm from '../components/createParkForm'
export default function Parking() {


    return(
        <div className="parkings p-4">
            <h1 className="parkings__title mt-2 mb-2">Vos places de parkings</h1>
            <div className="row parkings__head ">
                <div className="col-10 parkings__head__search mt-2">
                    <input type="text" className="form-control" placeholder='Chechez une de vos place de parking'/>
                </div>
                <div className="col-2 d-flex flex-row justify-content-end align-items-center">
                    <CreateParkForm/>
                </div>
                <div>
                    <ParkingSingle/>
                </div>
            </div>
        </div>
    )
}