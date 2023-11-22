import logo from './logo.svg';
import './App.scss';
import Template from './pages/template'
import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import {faLock, faLockOpen, faWarehouse, faRoad} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


function App() {

  library.add(faLock, faLockOpen, faWarehouse, faRoad);


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
    /*{
      path: "*",
      element: <ErrorPage/>,
    },*/
  ]);
  return <RouterProvider router={router}/>;
}

export default App;
