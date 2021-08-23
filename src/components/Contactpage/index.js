import React from 'react';
import ContactForm from '../ContactFrom'
import './style.css'

const Contactpage = () => {

    return (
        <section className="wpo-contact-form-map section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contact-form">
                                    <h2>Envía tu duda o sugerencia</h2>
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contact-map">
                                    <iframe title="contact-map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14565.023699160196!2d-110.34769778087298!3d24.127648841074265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ae2cd034e21377%3A0xa9371cb229797b5b!2sDe%20La%20Langosta%20140%2C%20La%20Selva%20Fidepaz%2C%2023097%20La%20Paz%2C%20B.C.S.!5e0!3m2!1ses!2smx!4v1629744043679!5m2!1ses!2smx"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-info">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="info-item">
                                        <h2>hola@cienciasbcs.org</h2>
                                        <div className="info-wrap">
                                            <div className="info-icon-2">
                                                <i className="fi flaticon-envelope"></i>
                                            </div>
                                            <div className="info-text">
                                                <span>Correo oficial</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contactpage;
