import React from 'react';
import Navbar from './Components/Navbar';
import ContentSpace from './Components/ContentSpace';
import AdminContent from './Components/AdminContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AdminContent/>
      {/* <ContentSpace /> */}

    </div>
  );
}

export default App;
