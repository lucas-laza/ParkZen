import logo from './logo.svg';
import './App.scss';
import Template from './pages/template'
import Home from './pages/home'
import Parking from './pages/parking'
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import {faLock, faLockOpen, faWarehouse, faRoad, faBars} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


function App() {

  library.add(faLock, faLockOpen, faWarehouse, faRoad, faBars);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template/>,
      children:[
        {
          index: true,
          element: <Home/>
        }
      ]
    },
    {
      path: "/parkings",
      element: <Template/>,
      children:[
        {
          index: true,
          element: <Parking/>
        }
      ]
    },
    {
      path: "/rents",
      element: <Template/>,
      children:[
        {
          index: true,
          element: <Parking/>
        }
      ]
    },
    {
      path: "/profil",
      element: <Template/>,
      children:[
        {
          index: true,
          element: <Parking/>
        }
      ]
    },
    /*{
      path: "*",
      element: <ErrorPage/>,
    },*/
  ]);
  return <RouterProvider router={router}/>;
}

export default App;
