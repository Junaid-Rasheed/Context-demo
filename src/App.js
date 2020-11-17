import React from 'react'
import Parent from './Parent'
import ValueContext from './ValueContext';
function App() {

let value=45;

  return (
     <ValueContext.Provider value={value}>
      <div>
    Hello World
   <Parent></Parent>
    </div>
    </ValueContext.Provider>

 

  );

}

export default App;
