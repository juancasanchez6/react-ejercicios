import React from 'react'
import CrudApp from "./componentes/CrudApp";
import SongSearch from './componentes/SongSearch';
//import CrudApi from './componentes/CrudApi';

function App() {
  return (
    < >
     <h1>Ejercicios con React</h1>
      <hr /> 
      <SongSearch />
    {/* <CrudApi /> */}
     <hr />
     <CrudApp />
    </>
  );
}

export default App;
