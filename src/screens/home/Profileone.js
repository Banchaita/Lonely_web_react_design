import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';
import FooterOne from '../../components/footerOne/index'
import gril from '../../images/girl1.png'
import correction from '../../images/correction.png'
import shield from '../../images/shield.png'
import licence from '../../images/licence .png'
import wrong from '../../images/wrong.png'
import message from '../../images/message.png'
import bigRight from '../../images/bigRight.png'
import girlprofile from '../../images/girlprofile.png'
import girlprofile2 from '../../images/girlprofile2.png'
import girlprofiletwo from '../../images/girlprofiletwo.png'




const Profileone = () => {
    const history = useNavigate();
    return (
        <> <div className='row mr-0 pt-5' style={{ background: '#000000', minHeight: '100vh', color: 'white' }}>
            <div className='d-flex flex-column justify-content-center align-items-center' >
                <div className='pl-5 pr-5 profile-detials'>
                    <div className='d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
                        <img src={gril} className='profile-pic' />
                    </div>
                    <div className='p-5 center-data flex-column'>
                        <div className='d-flex'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p className='mb-0 profile-title'>Emma, 30</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center ml-3' style={{ borderRadius: '8px', background: '#002D2D', padding: '10px 15px' }}>
                                <img src="plugins/images/Group 163282x.png" style={{ width: '8px', height: '14px' }} />
                                <p className='ml-2 mb-0' style={{ fontSize: '10px' }}>15 km</p>
                            </div>
                        </div>
                        <div>
                            <img className='profile_verify_icons' src={correction} />
                            <img className='profile_verify_icons' src={shield} />
                            <img className='profile_verify_icons' src={licence} />
                        </div>

                        <p style={{ padding: '2rem 0' }}><span style={{ fontWeight: '700', fontSize: '20px' }}>Location : </span><span>140308</span></p>
                        <p style={{ fontWeight: '700', fontSize: '20px' }}>About </p>
                        <p style={{ width: '70%' }}>
                            About My name is Emma and I enjoy meeting new people and finding ways to help them have an uplifting experience.
                            I enjoy reading. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.
                        </p>
                        <p className='mt-5' style={{ fontWeight: '700', fontSize: '20px' }}>Interests </p>

                        <div className='d-flex flex-wrap center-data my-4' style={{ width: "100%" }}>
                            <Button style={{ width: '130px', height: '40px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Adventurous</Button>
                            <Button className='ml-2' style={{ width: '130px', height: '40px', backgroundImage: `linear-gradient(to right, #fa81f0, #aaa8ff, #0fc5ff, #00d6ff, #00dfdf)`, color: 'white', borderRadius: '10px', border: '0px solid transparent' }}>Love</Button>
                            <Button className='ml-2' style={{ width: '130px', height: '40px', background: '#FA81F0', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Swingers</Button>
                        </div>
                        <div className='d-flex flex-wrap center-data'>
                            <div>
                                <img className='profile_verify_icons_two' src={wrong} />
                                <img className='profile_verify_icons_two' src={message} />
                                <img className='profile_verify_icons_two' src={bigRight} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile-gallery' style={{ marginBottom: '4rem' }}>
                    <p style={{ textAlign: 'center', fontSize: '2em', fontWeight: '600' }}>Gallery</p>
                    <div className='profile-gallery-pic'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 my-4">
                                        <img src={girlprofile} className='gallery-pic-per-two' />
                                    </div>
                                    <div className="col-md-6 my-4">
                                        <img src={girlprofile2} className='gallery-pic-per-two' />
                                    </div>
                                    <div className="col-md-6 my-4">
                                        <img src={girlprofiletwo} className='gallery-pic-per-two' />
                                    </div>
                                    <div className="col-md-6  my-4">
                                        <img src={gril} className='gallery-pic-per-two' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                  
                </div>
                <div className='pt-5 pb-5 d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex flex-wrap justify-content-center align-items-center p-4' style={{ width: '100%' }}>
                        <Button style={{ width: '192px', height: '50px', background: '#FF5959', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Block User</Button>
                    </div>
                </div>
            </div>
        </div>


            <FooterOne bgColor={"black"} />
        </>
    )
}

export default Profileone