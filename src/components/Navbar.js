import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsPedia</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general"> General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business"> Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science"> Science </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health"> Health </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology"> Technology </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports"> Sports </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar