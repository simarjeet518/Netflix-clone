import React from 'react';
import Row from './componets/Row';
import requests from './request';
function App() {
  return (
    <div className="App">
     <h1>Netflix</h1>
    
     <Row 
     title="Netflix Originals" 
     fetchUrl={requests.fetchNetflixOriginals}
     />
    
     <Row 
     title="Treanding Now" 
     fetchUrl={requests.fetchTrending}
     />
    </div>
  );
}

export default App;
