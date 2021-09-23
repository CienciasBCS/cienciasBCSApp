import React from 'react'
import Logo from '../../images/logo-header.png'
import { Link } from 'react-router-dom'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
import min1 from '../../images/shop/mini-cart/img-1.jpg'
import min2 from '../../images/shop/mini-cart/img-2.jpg'
import './style.css'

const Header = () => {
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="middle-header">
            <HeaderTopbar />
            <div className="header-style-3">
                <div className="container">
                    <div className="header-content">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                <div className="logo">
                                    <Link onClick={ClickHandler} to="/home" title=""><img src={Logo} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 d-lg-block d-none ml-auto">
                                <nav>
                                    <ul>
                                        <li><Link onClick={ClickHandler} className="active" to="/home" title="">Home</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/nosotros" title="">Nosotros</Link></li>
                                        <li><Link onClick={ClickHandler} to="/proyectos" title="">Proyectos</Link>
                                            {/* <ul>
                                                <li><Link onClick={ClickHandler} to="/service" title="">service</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single" title="">service-single</Link></li>
                                            </ul> */}
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/alianzas" title="">Alianzas</Link>
                                            {/* <ul>
                                                <li><Link onClick={ClickHandler} to="/about" title="">About</Link></li>
                                                <li><Link onClick={ClickHandler} to="/shop" title="">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} to="/shop-single" title="">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/donate" title="">Donate</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404" title="">Error 404</Link></li>
                                            </ul> */}
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contacto</Link>
                                            {/* <ul>
                                                <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-left">Blog Left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog full width</Link></li>
                                                <li><i className="fa fa-angle-right"></i><Link onClick={ClickHandler} to="/blog-details" title="">Blog Details</Link>
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} to="/blog-details" title="">Blog single</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-details-left" title="">Blog single Left sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-details-fullwidth" title="">Blog single full width</Link></li>
                                                    </ul>
                                                </li>
                                            </ul> */}
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-2 col-sm-2 col-2">
                                <MobileMenu />
                            </div>
                        </div>

                        <div className="clearfix"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;