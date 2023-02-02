
import './App.css';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [Mode,setMode] = useState("light"); //whether dark mode is enaled or not
  // Alert is prop and alert is state variable
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },3000);
  }
  

  const toggleMode = () =>{
    if(Mode === "light"){
      setMode("dark"); 
      document.body.style.backgroundColor = "#273568";
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - DarkMode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success"); document.title = "TextUtils - LightMode";
    }
  };
  return (
    <>
    <Router>
    <Navbar title="Project" mode ={Mode} toggleMode = {toggleMode}/>
    <Alerts Alert ={alert}/> 
    <div className='container my-3'>
    <Routes>
          <Route path="/about"
            element = {<About/>}/>
          <Route path="/" element ={<TextForm/>}/>
    </Routes>
    </div>
    </Router>
    
    </>
  );
}

export default App;
