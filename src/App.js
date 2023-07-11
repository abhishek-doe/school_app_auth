import React from "react"
import {Routes, Route} from "react-router-dom"
import CreateAccount from "./components/CreateAccount" 
import ChoosePwd from "./components/ChoosePwd"
import ChooseStaff from "./components/ChooseStaff"
import Login from "./components/Login"
import Home from "./components/Home"
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/createAccount" element={<CreateAccount />}/>
        <Route exact path="/choosePwd" element={<ChoosePwd />}/>
        <Route exact path="/chooseStaff" element={<ChooseStaff />}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>

    </>
  );
}

export default App;
