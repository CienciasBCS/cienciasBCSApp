import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                {/* <li><i className="fi flaticon-call"></i>+000123456789</li> */}
                                <li><i className="fi flaticon-envelope"></i>hola@cienciasbcs.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li className="d-none">login</li>
                                <li className="d-none">sigin</li>
                                <li className="p-2"><Link className="theme-btn" to="/donate">Dona aquí</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;