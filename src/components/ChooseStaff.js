
import React from "react"
import "./ChooseStaff.css"
import shadow1 from "./images/shadow1.png"
import shadow2 from "./images/shadow2.png"
import progress from "./images/progress1.png"

export default function ChoosePwd() {

    return (
        <>
         <img src={shadow1} className="cs-upper-img"/>
            <form className="chooseStaff">
            <h1 className="cs-heading-main">  Choose your staffs </h1>
                <div className="cs-form-input">
                    <input 
                        type="password"
                        placeholder="Number of staff"
                        className="cs-input"
                    /><br />
                    <input 
                        type="password"
                        placeholder="School address"
                        className="cs-input"
                    />
                </div>
                <button className="cs-submit-btn">Next</button>
                <p className="cs-note">Must be at least 8 characters.</p>
                <img src={progress} className="cs-progress"/>
            </form>
            <img src={shadow2} className="cs-lower-img"/>
        </>
    )
}
    