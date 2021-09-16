import React, { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'

function App() {
  const [searchDate, setSearchDate] = useState('');

  return (
    <div className="App">
      <Navbar/>
      <Header setSearchDate={setSearchDate}/>
    </div>
  );
}

export default App;
