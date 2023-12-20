import { Outlet } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import CreateParkForm from '../components/createParkForm'
export default function Home() {


    return(
        <div className="ms-2 mt-2 home">
            <h1 className="home__title mt-2 mb-2">Vos places de parking</h1>
            <div className="row home__head ">
                <div className="col-11 home__head__search mt-2">
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-1 d-flex flex-row justify-content-end">
                    <CreateParkForm/>
                </div>
            </div>
        </div>
    )
}