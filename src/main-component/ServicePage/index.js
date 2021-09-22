import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Service2 from '../../components/Service2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import service1 from '../../images/service/img-3.png'
import LCCFLogo from '../../images/alianzas/LCCF-Logo.png'
import ICMLogo from '../../images/alianzas/ICM-Logo.png'


const ServicePage = (props) => {

    const mainContent = {
        proyectos: {
            title: 'Proyectos', subTitle: 'Qué hacemos', secTitle: 'Nuestros proyectos',
            contenido: [
                { simg: service1, title: 'Diagnóstico de Salud', link: '/proyecto_y_servicio' },
                { simg: service1, title: 'Plataforma de Encuestas, Visualización y Análisis', link: '/proyecto_y_servicio' },
                { simg: service1, title: 'Observatorio de transición energética', link: '/proyecto_y_servicio' }
            ]
        },
        nosotros: {
            title: 'Nosotros', subTitle: 'Conócenos', secTitle: 'Quiénes somos',
            contenido: [
                { simg: service1, title: 'Miembro #1', link: '#' },
                { simg: service1, title: 'Miembro #2', link: '#' },
                { simg: service1, title: 'Miembro #3', link: '#' }
            ]
        },
        alianzas: {
            title: 'Alianzas', subTitle: 'Conócelos', secTitle: 'Nuestros aliados',
            contenido: [
                { simg: LCCFLogo, title: 'LCCF', link: '#' },
                { simg: ICMLogo, title: 'ICM', link: '#' },
            ]
        },
    }

    let section = mainContent[props.section]

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={section.title} pagesub={section.title} />
            <Service2 serviceClass={'s2'} content={section} />
            <Footer footerClass={'wpo-ne-footer-2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
