import React from "react"

function Footer() {
    return(
        <footer className="footer">
            <a href="mailto:pabloa1311@gmail.com" className="footer__link">pabloa1311@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/pablo-andres-ramirez-lopez-b1bb59a0/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com/pabloa1311">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/pabloa1311">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer