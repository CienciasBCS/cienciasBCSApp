import React from 'react'
import { Link } from 'react-router-dom'
import erimg from '../../images/error-404.png'
import './style.css'

const Error = (props) => {
    return (
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src={erimg} alt="" />
                            </div>
                            <div className="error-message">
                                <h3>Oops! Página no encontrada!</h3>
                                <p>
                                    Lo sentimos, pero no encontramos el sitio que estabas buscando.
                                </p>
                                <Link to="/home" className="theme-btn-s4">Regresar a inicio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;