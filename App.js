import React, {Fragment} from 'react';
import Sidebar from './Components/Sidebar'
import Home from '../src/Pages/Home/Home'

import './App.css';

function App() {
  return (<>
    <div className="App">
      <Sidebar/>
      <Home/>
    </div>
    </>
  );
}

export default App;
