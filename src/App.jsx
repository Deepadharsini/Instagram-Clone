import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Suggestions from './Suggestions';

/* w-25 w-50 w-100 w-75*/
function App() {
  return (
 
    <div className="d-flex  vh-100">
      <div className="w-20">
        <Sidebar/>
      </div>
      <div className ="w-50 "><Feed/></div>
      <div className="w-30"><Suggestions/></div>
    </div>

  )
}

export default App