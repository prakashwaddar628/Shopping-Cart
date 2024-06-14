import React from 'react';
import Navbar from './Components/navbar/Navbar';
import DynamicOffer from './Components/DynamicOffer/DynamicOffer';
import { Container } from './Components/container/Container';
import { Popular } from './Components/popular/Popular';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <DynamicOffer/>
      <Container/>
      <Popular/>
    </div>
  );
}

export default App;