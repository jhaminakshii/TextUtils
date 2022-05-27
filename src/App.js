
import './App.css';
// import About from './components/About';
import Navbar1 from './components/Navbar1';
import TextForm1 from './components/TextForm1';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import Alert from './components/Alert';

function App() {
  const [alert,setAlert] = useState(null);
  const [mode, setMode] = useState("light");

    let showAlert = (message,type) =>{
      setAlert({
        msz:message,
        type:type
      }) 
      setTimeout(()=>{
        setAlert(null);
      },1500)
    }

  let darkMode = ()=>{
     if(mode === "light"){
       setMode("dark");
       document.body.style.backgroundColor="#042743";
       document.title="TextUtils- Darkmode";
       showAlert("dark mode has enabled","success");
     }else{
       setMode("light");
       document.body.style.backgroundColor="white";
        document.title="TextUtils- Lightmode";
        showAlert("enabled light mode","success");
     }
   } 

  return (
    <>
   {/* <Router> */}
   <Navbar1 title="TextUtils" enableMode={mode} darkMode={darkMode} />
   <Alert alert={alert}/>
   <TextForm1 heading = "Try TextUtils - Word counter,Character Counter,Remove extra spaces" enableMode={mode} showAlert={showAlert}/>
     {/* <Routes >
          <Route exact path="/about" element={<About enableMode={mode} />}>
          </Route>
          <Route exact path="/" element={<TextForm1 heading = "Try TextUtils - Word counter,Character Counter,Remove extra spaces" enableMode={mode} showAlert={showAlert}/>}>
             
          </Route>
        </Routes>
   </Router>
    */}
   </>
  );
}

export default App;
