/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import img from "../assets/logo.png"

export default function Landing() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6" id="l-in">
                <br/>
                <center><img src={img} height="340" width="340" className="rounded-circle"/></center>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 box" id="r-in">
                <span style={{fontWeight: "bolder"}} id="welcome">
                    Welcome to the Universal Language Hub.
                </span>
                <hr/>
                <div className="mt-2 text-muted">
                    "Learn a New Language and Get a New Soul"
                </div>
                <a href="#" style={{marginTop: "14px"}} className="btn btn-dark btn-md">Get in touch</a>
            </div>
        </div>
    </div>
    )
}
