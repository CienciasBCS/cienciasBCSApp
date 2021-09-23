import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Service2 from '../../components/Service2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import service1 from '../../images/service/img-3.png'
import LCCFLogo from '../../images/alianzas/LCCF-Logo.png'
import ICMLogo from '../../images/alianzas/ICM-Logo.png'


const ProjectPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const proyectos = {
        title: 'Proyectos', subTitle: 'Qué hacemos', secTitle: 'Nuestros proyectos',
        contenido: [
            { simg: service1, title: 'Diagnóstico de Salud', link: '/proyecto_y_servicio' },
            { simg: service1, title: 'Plataforma de Encuestas, Visualización y Análisis', link: '/proyecto_y_servicio' },
            { simg: service1, title: 'Observatorio de transición energética', link: '/proyecto_y_servicio' }
        ]
    }


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={proyectos.title} pagesub={proyectos.title} />
            <div className={`service-area-2 s2`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-section-title">
                                <span>Proyectos</span>
                                <h2>Nuestros proyectos</h2>
                            </div>
                        </div>
                    </div>
                    <div className="service-wrap">
                        <div className="row d-flex justify-content-center">
                            {proyectos.contenido.map((item, i) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 custom-grid col-12" key={i}>
                                    <div className="service-single-item">
                                        <div className="p-3">
                                            {/* <img src={item.simg} alt="" /> */}
                                            <div className="d-flex justify-content-center align-items-center">
                                                <i className="fi flaticon-quran align-self-center"></i>
                                            </div>
                                        </div>
                                        <div className="service-text">
                                            <h2><Link onClick={ClickHandler} to={item.link}>{item.title}</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer footerClass={'wpo-ne-footer-2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectPage;
