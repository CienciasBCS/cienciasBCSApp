import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-lg.png'
import Newsletter from '../Newsletter'
import './style.css'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`wpo-ne-footer ${props.footerClass}`}>
            <Newsletter />
            <footer className="wpo-site-footer">
                <div className="wpo-upper-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-12">
                                <div className="widget about-widget">
                                    <div className="logo widget-title">
                                        <img src={Logo} alt="" />
                                    </div>
                                    <ul>
                                        <li><a href="https://www.facebook.com/CIENCIASBCS"><i className="ti-facebook"></i></a></li>
                                        {/* <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li> */}
                                        <li><a href="https://www.instagram.com/cienciasbcs/"><i className="ti-instagram"></i></a></li>
                                        {/* <li><Link onClick={ClickHandler} to="/"><i className="ti-google"></i></Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Service</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/service-single">Artículos</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service-single">Eventos</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">Newsletter</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Aviso de privacidad</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event">Consejo Directivo</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-2 col-md-6 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/about">Nosotros</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service-single">Proyectos</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event">Servicios</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">Alianzas</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">Contacto</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 offset-lg-1 col-md-6 col-12">
                                <div className="widget market-widget wpo-service-link-widget">
                                    <div className="widget-title">
                                        <h3>Contacto</h3>
                                    </div>
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="fi ti-location-pin"></i>La Paz, B.C.S, México</li>
                                            <li><i className="fi flaticon-envelope"></i>hola@cienciasbcs.org</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-lower-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xs-12">
                                <p className="copyright">&copy; 2021 CienciasBCS. Todos los derechos reservados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;