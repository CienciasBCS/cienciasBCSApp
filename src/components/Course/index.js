import React from 'react'
import icon1 from '../../images/course/icon1.png'
import icon2 from '../../images/course/icon2.png'
import icon3 from '../../images/course/icon3.png'
import icon4 from '../../images/course/icon4.png'
import icon5 from '../../images/course/icon5.png'
import icon6 from '../../images/course/icon6.png'

import './style.css'

const Course = (props) => {

    const courses = [
        {
            cIcon: icon1,
            heading: "Diagnóstico de Salud en menores de edad",
            pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor erat quis quam luctus, nec consequat nunc mattis. In convallis commodo mi ac euismod. Nullam.",
        },
        {
            cIcon: icon2,
            heading: "Observatorio de transición energética",
            pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor erat quis quam luctus, nec consequat nunc mattis. In convallis commodo mi ac euismod. Nullam.",
        },
        {
            cIcon: icon3,
            heading: "Plataforma de Encuestas, Visualización y Análisis",
            pra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor erat quis quam luctus, nec consequat nunc mattis. In convallis commodo mi ac euismod. Nullam.",
        },
    ]
    return (
        <div className="courses-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            {/* <span>Top Courses</span> */}
                            <h2>Proyectos y servicios</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {courses.map((cource, i) => (
                        <div className="col-lg-4 col-md-6 custom-grid col-12" key={i}>
                            <div className="courses-item">
                                <div className="course-icon">
                                    <span><img src={cource.cIcon} alt="" /></span>
                                </div>
                                <div className="course-text">
                                    <h2>{cource.heading}</h2>
                                    <p>{cource.pra}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Course;