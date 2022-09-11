import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import girl1 from '../../images/girl1.png'
import about from '../../images/about.png'
import whyUsBg from '../../images/whyUsBg.png'
import whyUs from '../../images/whyUs.png'
import btmImg from '../../images/btmImg.png'
import googlePlay from '../../images/googlePlay.png'
import appStore from '../../images/appStore.png'
import aboutUs from '../../images/aboutUs.png'
import pinterest from '../../images/pinterest.png'
import right from '../../images/right.png'
import right2 from '../../images/right2.png'
import idCard from '../../images/idCard.png'
import cross from '../../images/cross.png'
import refresh from '../../images/refresh.png'
import msg from '../../images/msg.png'
import bigRight from '../../images/bigRight.png'
import jacob from '../../images/jacob1.png'
import jacob24 from '../../images/jacob,24.png'
import premium from '../../images/premium.png'
import logo1 from '../../images/logo2.png'
import bg from '../../images/background2.png'
import bg1 from '../../images/background3.png'
import bg2 from '../../images/background4.png'

const Home = () => {
    const history = useNavigate();

    return (
        <>
            <div className='container-fluid' style={{ background: '#000000', padding: '0px 84px' }}>
                <div className='row p-5' style={{ background: '#000000' }}>
                    <div className='col-md-7 '>
                        <div className='row bg-white' style={{ borderRadius: '20px' }}>
                            <div className='col-md-7 px-4 mt-4'>
                                <div>

                                </div>
                                <img src={girl1} style={{ width: '100%', height: '500px', marginTop: '20px' }} />
                            </div>
                            <div className='col-md-4 mt-3'>
                                <h4 onClick={() => history('/profileone')} style={{ marginTop: '20px', fontWeight: 'bold' }}>Emma, 30 <img src={pinterest} style={{ width: '20px' }} /></h4>
                                <img src={right} style={{ width: '30px', height: '30px' }} />
                                <img src={right2} style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                                <img src={idCard} style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                                <div className='mt-3'>
                                    <button className='profile-btn-one' style={{  }}>Rough</button>
                                    <button style={{ background: '#FA81F0', border: '1px solid white', color: 'white', width: '60px', height: '30px', borderRadius: '6px', marginRight: '10px' }}>Fetish</button>
                                    <button style={{ background: '#FA81F0', border: '1px solid white', color: 'white', width: '60px', height: '30px', borderRadius: '6px', marginRight: '10px' }}>S & M</button>
                                </div>
                                <div className='mt-3'>
                                    <button style={{ background: 'linear-gradient(to right, #FA81F0 , #00DFDF)', border: '1px solid white', color: 'white', width: '90px', height: '30px', borderRadius: '6px', marginRight: '10px' }}>Gentle Choking</button>
                                    <button style={{ background: 'linear-gradient(to right, #00DFDF , #FA81F0)', border: '1px solid white', color: 'white', width: '80px', height: '30px', borderRadius: '6px', marginRight: '10px' }}>Role Play</button>
                                </div>
                                <div className='mt-3'>
                                    <p style={{ fontSize: '16px', paddingRight: '10px' }}>My name is Emma and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
                                </div>
                            </div>
                            <div className='col-md-12 text-center p-1'>
                                <img src={cross} style={{ width: '95px', marginLeft: '10px' }} />
                                <img src={refresh} style={{ width: '95px', marginLeft: '10px' }} />
                                <img src={msg} style={{ width: '95px', marginLeft: '10px' }} />
                                <img src={bigRight} style={{ width: '95px', marginLeft: '10px' }} />
                            </div>

                        </div>

                        
                    </div>
                    <div className='col-md-1'></div>
                    <div className="col-md-4">
                        {/* <div className='whiteSmallBox text-center'> */}
                        <div className='whiteSmallBox row m-0'>
                            <div className='col-3 text-left' style={{ padding: '0' }}>
                                <img src={jacob} className="p-3" style={{ width: '100%' }} />
                            </div>
                            <div className='col-8 text-left mt-2' style={{ padding: '0' }}>
                                <h4 style={{ marginTop: '20px', fontWeight: 'bold' }}>Emma, 30 <img src={pinterest} style={{ width: '20px' }} /></h4>
                                <img src={right} style={{ width: '30px', height: '30px' }} />
                                <img src={right2} style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                                <img src={idCard} style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                            </div>
                        </div>
                        {/* </div> */}
                        <div className=' mt-4'>
                            <button onClick={() => history('/profile')} className='btn btn-block d-flex align-items-center' style={{ height: 'auto', margin: '0', background: '#000', borderRadius: '13px', color: 'white', borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)' }}>
                                <div className='col-md-3 text-left p-2' style={{ padding: '0' }}>
                                    <img src={logo1} style={{ width: '85%' }} />
                                </div>
                                <div className='col-md-7 text-left justify-content-center mt-2' style={{ padding: '0' }}>
                                    <h4 style={{ fontWeight: 'bold', color: 'wheat', fontSize: '100%' }}>Get Permium Access</h4>
                                </div>
                                
                            </button>
                        </div>
                        <div className='whiteMediumBox text-center mt-4'>
                            <img src={girl1} style={{ width: '50%', height: '315px', marginTop: '15px', marginBottom: '15px' }} />
                        </div>
                    </div>
                    {/* <div className='col-md-12 bg-danger'>

                    </div> */}

                </div>
            </div>
            <div className='container-fluid' style={{ background: '#000000' }}>
                <div className='row' style={{ background: '#0D0D0D' }}>
                    <div className='col-md-4'>
                        <div className='blackBox text-center'>
                            <h5 style={{ color: 'white', padding: '60px', borderRight: '3px solid black' }}>#1 Trusted Dating App</h5>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='blackBox text-center'>
                            <h5 style={{ color: 'white', padding: '60px', borderRight: '3px solid black' }}>#1 Trusted Dating App</h5>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='blackBox text-center'>
                            <h5 style={{ color: 'white', padding: '60px' }}>#1 Trusted Dating App</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ background: '#000000' }}>
                <div className='row' style={{ background: '#000000' }}>z
                    <div className='col-md-5' style={{ textAlign: 'end' }}>
                        {/* <div className=' text-center'> */}
                        <img src={about} style={{ width: '60%' }} className='m-5' />
                        {/* </div> */}
                    </div>
                    <div className='col-md-5 text-left justify-content-center' style={{ marginTop: '140px' }} >
                        <div className=''>
                            <h2 style={{ color: 'white' }}>About <span style={{ color: '#FA81F0' }}>Us</span></h2>
                            <p style={{ color: '#FFFFFF' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
                            <p style={{ color: '#FFFFFF' }}>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            <div className='mt-5'>
                                <button  onClick={() => history('/aboutus')} className="green_btn">Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% 100%', marginTop: '20px' }}>
                <div className='row'>

                    <div className='col-md-5 text-left justify-content-center m-auto' >
                        <div className='ml-5' style={{ marginTop: '100px', marginBottom: '125px' }}>
                            <h2 style={{ color: 'white' }}>Why <span style={{ color: '#FA81F0' }}>Us</span></h2>
                            <p style={{ color: '#FFFFFF' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
                            <p style={{ color: '#FFFFFF' }}>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                            <div className='mt-5 mb-5'>
                                <button onClick={() => history('/whyus')} className="green_btn">Know More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className=' text-center' style={{ marginTop: '80px', marginBottom: '125px' }}>
                            <img src={whyUs} style={{ width: '40%' }} className='m-5' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ background: '#000000' }}>
                <div className='row' style={{ background: '#000000' }}>z
                    <div className='col-md-12' style={{ textAlign: 'center' }}>
                        <h2 style={{ color: 'white', fontWeight: 'bold' }}>Download the App <span style={{ color: '#00DFDF' }}>Now</span></h2>
                    </div>
                    <div className='col-md-8 mx-auto'>
                        <img src={btmImg} style={{ width: '100%' }} />
                    </div>
                    <div className='col-md-12 text-center mt-4'>
                        <img src={googlePlay} style={{ width: '350px', padding: '20px' }} />
                        <img src={appStore} style={{ width: '350px', padding: '20px' }} />
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ backgroundImage: `url(${bg2})`, backgroundSize: '100% 100%', marginTop: '20px' }}>
                <div className='row text-center'>
                    <div className='col-md-12'>
                    <h2 style={{ color: 'white', marginTop:'160px' }}>About <span style={{ color: '#FA81F0' }}>Us</span></h2>
                    <p style={{ color: '#FFFFFF', textAlign: 'center', marginBottom:'35px' }}>We’re incredibly happy and proud to have sparked thousands of encounters and beautiful <br/>love stories. So please share your story with us! We need our a daily love fix. 😉</p>
                    </div>
                    <div className='col-md-12'>
                    <img src={aboutUs} style={{ width: '100%', height:'72%' }} />
                    <button onClick={() => history('/profileone')} className="pink_btn" style={{marginTop:'50px', marginBottom:'35px'}}>Learn More</button>
                    </div>
                    <div className='col-md-12'>
                    
                    </div>
                    {/* <div className='col-md-12'>

                    </div> */}
                </div>
            </div>
            <div className='container-fluid' style={{ background: '#000000' }}>
                <div className='row text-center'>
                    <div className='col-md-12'>
                    <h2 className='mb-4' style={{ color: 'white', marginTop:'70px' }}>We're here for <span style={{ color: '#FA81F0' }}>You!</span></h2>
                    <p style={{ color: '#FFFFFF', textAlign: 'center', marginBottom:'60px' }}>When it comes to love, everyone has questions. That’s why our Customer Care team is here to <br/>answer any questions you may have about Lonely AF. The FAQ section is extensive and a great option <br/>for autonomous troubleshooting too. So let us help, because this journey is worth it.</p>
                    </div>
                    <div className='col-md-12'>
                        <button onClick={() => history('/contactus')}  className="green_btn" style={{ marginBottom:'60px' }}>Contact Us</button>
                    </div>
                </div>
                <img src="plugins/images/Group 17018.png" style={{width: '100%', transform: `translateY(56px)`}}/>
            </div>
            <FooterOne bgColor={"#161616"}/>
        </>
    )
}

export default Home