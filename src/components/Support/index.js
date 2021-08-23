import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Support = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="support-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="support-text">
                            <span>Apóyanos</span>
                            <h2>Únete a nuestra causa</h2>
                            <p>
                                Tus donaciones hacen posible que podamos seguir trabajando por el bienestar de las y
                                los sudcalifornianos. Todas las aportaciones son deducibles de impuestos.
                            </p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/donate" className="theme-btn-s3">Dona</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;