import React from "react"
import shadow1 from "./images/shadow1.png"
import shadow2 from "./images/shadow2.png"
import "./Login.css"

export default function CreateAccount() {

    return (
        <>
         <img src={shadow1} className="login-upper-img"/>
            <form className="login">
            <h1 className="login-heading-main"> Welcome, Log into you account </h1>
                <p className="login-heading-primary">It is our great pleasure to <br /> <p className="login-primary-2"> have you on board! </p></p>
                <div className="login-form-input">
                    <input 
                        type="text"
                        className="login-chooseState"
                        placeholder="Enter the name of State"
                    /><br />
                    <input 
                        type="number"
                        className="login-phone"
                        placeholder="Enter the Phone number "
                    />
                </div>
                <button className="login-submit-btn">Next</button>
                <p className="login-already">Already have an account? <span className="login-already-1"> Sign up </span></p>
            </form>
            <img src={shadow2} className="login-lower-img"/>
        </>
    )
}