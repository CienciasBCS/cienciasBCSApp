import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Hero = (props) => {

    return (
        <section className={`hero ${props.HeroStyleClass}`}>
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-7 slide-caption">
                                <div className="slide-top">
                                    <span>Salud</span>
                                </div>
                                <div className="slide-title">
                                    <h2>Diagnóstico de Salud en menores de edad de Baja California Sur</h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>Queremos saber qué afecciones impactan más a las niñas y niños de Baja California Sur, y tomar mejores decisiones con esa información</p>
                                </div>
                                <div className="btns">
                                    <Link to="/about" className="theme-btn">Conoce más</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-vec">
                        <img src={props.heroImg} alt="" className="shadow rounded" />
                        {/* <div className="right-border">
                            <div className="right-icon"><i className="fi flaticon-quran"></i></div>
                            <div className="right-icon"><i className="fi flaticon-taj-mahal-1"></i></div>
                            <div className="right-icon"><i className="fi flaticon-allah-word"></i></div>
                            <div className="right-icon"><i className="fi flaticon-muhammad-word"></i></div>
                            <div className="right-icon"><i className="fi flaticon-prayer"></i></div>
                            <div className="right-icon"><i className="fi flaticon-business-and-finance"></i></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;