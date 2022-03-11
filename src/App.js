import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router,Switch,Route,Routes,Link} from "react-router-dom";


function App() {

  const [mode, setMode]=useState('light')
  const [alert,setAlert]=useState(null)
 
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
    /*    showAlert("Dark Mode has been Enabled","success")
        
        setInterval(()=>{
          document.title='TextManipulator - Dark Mode'
        },2000)*/
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been Enabled","success")
  /*      setInterval(()=>{
          document.title='TextManipulator - Light Mode'
        },2000)*/
    }
};

const showAlert=(message,type)=>{

  setAlert({
    msg:message,
    type:type
  })


  setTimeout(()=>{
    setAlert(null);

  },2000)
}

  return (
    <>
  {/* <Navbar title="Anmol" />
   <div className="container my-3">*/}

   <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert} />

   <div className="container my-3">
     <Routes>
     
       <Route path="/about" element={<About mode={mode}/>} />
      

       <Route path="/" element={ <Textform showAlert={showAlert} heading="Your Friendly Text Manipulator" mode={mode}/>} />
  

     </Routes>
     </div>
   </Router>
   
  

    </>
  );
}

export default App;
