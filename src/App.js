import React, {Fragment} from 'react';
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";



export default function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      
      <Sidebar/>
      <Routes/>
      <Footer/>
     
      </BrowserRouter>
     
     
    </div>
  );
}



