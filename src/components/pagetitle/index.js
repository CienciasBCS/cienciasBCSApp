import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const PageTitle = (props) => {
    return (
        <div className="wpo-breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            {props.pagesub &&
                                <ul>
                                    <li><Link to="/home">Home</Link></li>

                                    <li><span>{props.pagesub}</span></li>
                                </ul>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;