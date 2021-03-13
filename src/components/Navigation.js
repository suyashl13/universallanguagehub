/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Navigation() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
            <span style={{
                textAlign: "center",
                fontFamily: 'Manrope, serif',
                fontWeight: "400",
            }}>
            <center style={{
                fontWeight: "bolder", marginLeft: "12px", letterSpacing: "01px"
            }}>Universal<br/>Language<br/>Hub</center>
          </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Our Courses<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">FAQ</a>
                <a className="dropdown-item" href="#">Success Stories</a>
                <a className="dropdown-item" href="#">Gift Certificates</a>
                <a className="dropdown-item" href="#">Our Teachers</a>
              </div>
            </li>
          </ul>
        </div>
    </nav>
    )
}
