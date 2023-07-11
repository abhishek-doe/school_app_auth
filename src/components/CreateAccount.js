import React from "react"
import shadow1 from "./images/shadow1.png"
import shadow2 from "./images/shadow2.png"
import "./CreateAccount.css"

export default function CreateAccount() {

    return (
        <>
         <img src={shadow1} className="upper-img"/>
            <form className="createAccount">
            <h1 className="heading-main"> create your school account </h1>
                <p className="heading-primary">It is our great pleasure to <br /> <p className="primary-2"> have you on board! </p></p>
                <div className="ca-form-input-1">
                    <input 
                        type="text"
                        className="chooseState"
                        placeholder="Enter the name of State"
                    /><br />
                    <input 
                        type="number"
                        className="phone"
                        placeholder="Enter the Phone number "
                    /><br />
                    <input 
                        type="text"
                        className="otp"
                        placeholder="OTP"
                    />
                </div>
                <button className="submit-btn-1">Next</button>
                <p className="already">Already have an account? <span className="already-1"> Sign up </span></p>
            </form>
            <img src={shadow2} className="lower-img"/>
        </>
    )
}