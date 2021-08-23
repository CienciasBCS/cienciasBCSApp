import React from 'react'
import { Link } from 'react-router-dom'
import tmr1 from '../../images/prayer-shape/2.png'
import tmr2 from '../../images/prayer-shape/1.png'
import tmr3 from '../../images/prayer-shape/3.png'
import VideoModal from '../ModalVideo'
import './style.css'

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-img-3">
                                <img src={props.aboutImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 colsm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>Sobre nosotros</span>
                                    <h2>Centro Interdisciplinario en Ciencias Aplicadas de Baja California Sur</h2>
                                </div>
                                <p>
                                    Somos una Asociación Civil joven con la misión de Impulsar el bienestar integral de la sociedad y la naturaleza,
                                    aplicando las diversas ramas de la ciencia.
                                </p>
                                <div className="btns">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn" tabIndex="0">Conoce más</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;