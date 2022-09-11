import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import gender_bg from '../../images/gender_bg.png'
import two from '../../images/two.png'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from '../../images/05.png'
import slider2 from '../../images/06.png'
import slider3 from '../../images/01.png'

const TypesOfConnection = () => {
    const history = useNavigate();
    const _renderItem = () => {

    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        // centerPadding: '50px',
        focusOnSelect: true,
        // arrows:false,
        useCSS: true
    };

    return (
        <>
            <div className="container-fluid p-0">
                <div className='row' style={{ background: '#000000', minHeight: '100vh' }}>
                    <div className='col-8 offset-2 my-5 d-flex flex-column justify-content-center align-items-center' >
                        <div>
                            <img src={logo} style={{ width: '200px', height: '50px' }} />
                        </div>
                        <div className='mt-5'>
                            <img src={two} style={{ width: '100%', height: '40px' }} />
                        </div>
                        <h4 className='text mt-3'>Types of Connection</h4>
                    </div>
                    <div className='col-md-12'>
                        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                            {/* <div className='row mt-4'> */}
                            <div className='w-100 text-center' onClick={() => history('/interest')}>
                                <Slider {...settings}  className='slider'>
                                    <div style={{ textAlign: 'center', opacity: '0.6' }} ><img style={{ opacity: '0.2', marginLeft: '15%', marginTop:'5%' }} className="img w-75" src={slider1} /><p className="legend text-white text-center pt-3">Loca1 Hookup</p></div>
                                    <div style={{ textAlign: 'center', }} ><img className="img w-75" style={{ opacity: '0.2', marginLeft: '15%', marginTop:'5%' }} src={slider2} /><p className="legend text-white text-center pt-3">Loca1 Hookup</p></div>
                                    <div style={{ textAlign: 'center' }} ><img className="img w-75" style={{ opacity: '0.2', marginLeft: '15%', marginTop:'5%' }} src={slider3} /><p className="legend text-white text-center pt-3">Loca1 Hookup</p></div>
                                    <div style={{ textAlign: 'center' }} ><img className="img w-75" style={{ opacity: '0.2', marginLeft: '15%', marginTop:'5%' }} src={slider1} /><p className="legend text-white text-center pt-3">Loca1 Hookup</p></div>
                                    <div style={{ textAlign: 'center' }}><img className="img w-75" style={{ opacity: '0.2', marginLeft: '15%', marginTop:'5%' }} src={slider2} /><p className="legend text-white text-center pt-3">Loca1 Hookup</p></div>
                                    <div style={{ textAlign: 'center' }}><img className="img w-75" style={{ opacity: '0.2', marginLeft: '15%', marginTop:'5%' }} src={slider3} /><p className="legend text-white text-center pt-3">Loca1 Hookup</p></div>
                                </Slider>

                                {/* <OwlCarousel items={3} margin={25} loop nav autoplay={true} className="owl-theme" autoFocus={true} stopOnHover={true}   >
                                    <div ><img className="img" src={slider1} /><p className="legend text-white text-center">Loca1 Hookup</p></div>
                                    <div><img className="img" src={slider1} /><p className="legend text-white text-center">Friendship</p></div>
                                    <div><img className="img" src={slider1} /><p className="legend text-white text-center">Dating</p></div>
                                    <div><img className="img" src={slider1} /><p className="legend text-white text-center">Loca1 Hookup</p></div>
                                    <div><img className="img" src={slider1} /><p className="legend text-white text-center">Friendship</p></div>
                                </OwlCarousel> */}
                                {/* </div> */}
                                {/* <Carousel variant="dark" className='m-5'>
                                    <Carousel.Item style={{margin:'ai'}}>
                                        <img
                                            className="d-block w-100"
                                            src={slider2}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h5>First slide label</h5>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block"
                                            src={slider1}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <h5>Second slide label</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={slider1}
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                            <h5>Third slide label</h5>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel> */}
                            </div>
                        </div>

                        {/* <div className='mt-5'>
                            <h4 onClick={() => history('/interest')} className='text'>Local Hookup</h4>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TypesOfConnection
