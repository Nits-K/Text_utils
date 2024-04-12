import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
function App() {
  const[mode,setmode]=useState('light'); 
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>
    {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  
  const toggleMode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#090521'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
      
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert  alert={alert}/>
      <div className="container my-3" mode={mode}>
      <Routes>
          <Route exact path="/about" element={ <About />}>
           
          </Route>
          <Route exact path="/"
          element={
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          }>
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
