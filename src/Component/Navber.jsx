import React from 'react'
import PropTypes from 'prop-types'
import { Link} from "react-router-dom";

export default function Navber(props) {
    const colorst={
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        objectFit: 'cover',
        padding: '0px',
        overflow: 'hidden',
        border: 'none',
        marginRight:'1rem'
    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navber-${props.mode} bg-${props.mode} `} >
                <div className="container-fluid" >
                    <Link className={`navbar-brand text-${props.color}`} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${props.color}`} aria-current="page" to="/"  >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link active text-${props.color}`} to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-outline-success" type="submit">Search</button>
                      </form> */}

                        <input type="color" style={colorst} onChange={props.changcolor} id='colr' />
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
                            <label className={`form-check-label text-${props.color}`} htmlFor="flexSwitchCheckDefault" onClick={props.togglemode}>{props.modeText}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


Navber.prototypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
Navber.defaultProps = {
    title: "TextUtails",
    about: "About Us"
}