import React from 'react';

import './App.css';
import SWAPIComponent from './getNames';
 import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
 import DetailsPage from './DetailsPage';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<SWAPIComponent />} />
        <Route path="details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
