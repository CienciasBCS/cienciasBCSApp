import React, { Fragment } from 'react';
import erimg from '../../images/en-construccion.jpg'


const ConstructionPage = () => {
    return (
        <Fragment>
            <section className="error-404-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="content clearfix">
                                <div className="error">
                                    <img src={erimg} alt="" className="rounded shadow" />
                                </div>
                                <div className="error-message">
                                    <h3>Página web en construcción!</h3>
                                    <p>
                                        ¡Espérala pronto!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};
export default ConstructionPage;

