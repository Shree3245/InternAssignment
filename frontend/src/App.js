import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import Login from "./components/loginPage";
import Index from "./components/payments";


function App() {
  const authBool = useSelector(state => state.auth);

  return (
    <div className="App">
      
      {authBool ? <Index/> :<Login/> }
    </div>
  );
}

export default App;
