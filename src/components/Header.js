import React from "react"

import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="images/logo.JPG" alt="Pablo Ramirez" />
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/"><a href="#home" className="nav__link">Home</a></Link></li>
                    <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                    <li className="nav__item"><Link to="/mywork"><a href="#work" className="nav__link">My Work</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header