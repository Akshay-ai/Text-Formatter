// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Switch,Route
}from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333333';
      showAlert('Dark mode has been enabled','Success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','Success');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode}
        toggle = {toogleMode}/>

        <Alert alert={alert}/>

        <Switch>

          <Route exact path="/about">
          <div className="container my-3">
            <About mode={mode}/>
          </div>
          </Route>

          <Route path="/">
            <div className="container my-3">
              <TextForm heading = "Enter your Text" mode={mode} showAlert=
              {showAlert}/>
            </div>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
