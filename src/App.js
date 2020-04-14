import React, {Fragment} from 'react';
import Sidebar from './Components/Sidebar'
import Home from '../src/Pages/Home'
import Footer from './Components/Footer'


export default function App() {
  return (<>
    <div >
      <Sidebar/>
      <Home/>
      <Footer/>
    </div>
    </>
  );
}

