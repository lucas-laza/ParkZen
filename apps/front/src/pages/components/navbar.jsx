import Button from "react-bootstrap/Button";
import {Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Navbar() {


    return(
        /*<div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px", height: "100vh"}}>
            <a href="/" className="d-flex align-items-center justify-content-center link-dark text-decoration-none">
                <img src="/logoPark.svg" style={{width: "90%"}} alt=""/>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <NavLink className='nav-link' activeClassName="active" to="/">Parkzen</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link' activeClassName="active" to="/parkings">Vos locations</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' activeClassName="active" to="/rents">Vos places</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' activeClassName="active" to="/profil">Vos informations</NavLink>
                </li>
            </ul>
            <hr/>
        </div>*/
        <nav className="navbar" style={{backgroundColor: "white"}}>
            <div className="container-fluid p-2">
                <img src="/logoPark.svg" className="ms-4" style={{width: "10%"}} alt=""/>
                <div className="d-flex me-4" role="search">
                    <div className="dropstart">
                        <a className="text-dark " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon size={"2xl"} icon="fa-solid fa-bars" />
                        </a>

                        <ul className="dropdown-menu">
                            <li className="dropdown-item">
                                <NavLink className='nav-link' activeClassName="active" to="/parkings">Vos locations</NavLink>
                            </li>
                            <li className="dropdown-item">
                                <NavLink className='nav-link' activeClassName="active" to="/rents">Vos places</NavLink>
                            </li>
                            <li className="dropdown-item">
                                <NavLink className='nav-link' activeClassName="active" to="/profil">Vos informations</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

