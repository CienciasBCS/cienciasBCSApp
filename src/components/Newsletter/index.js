import React from 'react'
import './style.css'

const Newsletter = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <section className="wpo-news-letter-section">
            <div className="container">
                <div className="wpo-news-letter-wrap">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1 col-md-8 offset-md-2">
                            <div className="wpo-newsletter">
                                <h3>Suscríbete a nuestro Newsletter</h3>
                                <p>No compartiremos tus datos con nadie, jamás.</p>
                                <div className="wpo-newsletter-form">
                                    <form onSubmit={SubmitHandler}>
                                        <div>
                                            <input type="text" placeholder="Ingresa tu email" className="form-control" />
                                            <button type="submit">Suscríbete</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;