import React from "react"
import "./ChoosePwd.css"
import shadow1 from "./images/shadow1.png"
import shadow2 from "./images/shadow2.png"
import progress from "./images/progress1.png"

export default function ChoosePwd() {

    return (
        <>
         <img src={shadow1} className="cp-upper-img"/>
            <form className="choosePwd">
            <h1 className="cp-main-heading"> Choose your Password </h1>
                <div className="cp-form-input">
                    <label className="cp-label">Choose a password</label><br />
                    <input 
                        type="password"
                        className="cp-input"
                    /><br />
                    <label className="cp-label">Confirm password</label><br />
                    <input 
                        type="password"
                        className="cp-input"
                    />
                </div>
                <p className="cp-note">Must be at least 8 characters.</p>
                <button className="cp-submit-btn">Next</button>
            <img src={progress} className="cp-progress"/>
            </form>
            <img src={shadow2} className="cp-lower-img"/>
        </>
    )
}