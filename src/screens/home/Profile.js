import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'

const Profile = () => {
    const history = useNavigate();

    return (
        <>
            <div className='row mr-0 pt-5' style={{ background: '#000000', minHeight: '100vh', color: 'white' }}>
                <div className='d-flex flex-column justify-content-center align-items-center' >
                    <div className='pl-5 pr-5 profile-detials'>
                        <div className='d-flex justify-content-center align-items-center' style={{ width: '100%' }}><img src="plugins/images/Group 17090.png" className='profile-pic' /></div>
                        <div className='p-5 center-data flex-column'>
                            <div className='d-flex'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <p className='mb-0'><span style={{ fontSize: '25px', fontWeight: '700' }}>Ash Peterson , 26</span>(Model)</p>
                                </div>
                                <div className='d-flex justify-content-center align-items-center ml-3' style={{ borderRadius: '8px', background: '#002D2D', padding: '10px 15px' }}>
                                    <img src="plugins/images/Group 163282x.png" style={{ width: '8px', height: '14px' }} />
                                    <p className='ml-2 mb-0' style={{ fontSize: '10px' }}>15 km</p>
                                </div>
                            </div>
                            <div>
                                <img className='profile_verify_icons' src="plugins/images/Group 17048@2x.png" />
                                <img className='profile_verify_icons' src="plugins/images/Group 17057@2x.png" />
                                <img className='profile_verify_icons' src="plugins/images/id-card@2x.png" />
                            </div>
                            <div className='d-flex flex-wrap center-data'>
                                <div onClick={() => history('/edit_profile')} className="signlog_login_btn" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>Edit Profile</p></div>
                                <div onClick={() => history('/')} className="signlog_login_btn ml-2" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>Preview Profile</p></div>
                            </div>
                            <p style={{ padding: '2rem 0' }}><span style={{ fontWeight: '700', fontSize: '20px' }}>Location : </span><span>140308</span></p>
                            <p style={{ fontWeight: '700', fontSize: '20px' }}>About </p>
                            <p style={{ width: '70%' }}>My name is Ash and I enjoy meeting new people and finding ways
                                to help them have an uplifting experience. I enjoy reading.
                                Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo.
                            </p>
                            <p className='mt-5' style={{ fontWeight: '700', fontSize: '20px' }}>Interests </p>
                            <div className='d-flex flex-wrap center-data' style={{ width: "100%" }}>
                                <Button style={{ width: '130px', height: '40px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Adventurous</Button>
                                <Button className='ml-2' style={{ width: '130px', height: '40px', backgroundImage: `linear-gradient(to right, #fa81f0, #aaa8ff, #0fc5ff, #00d6ff, #00dfdf)`, color: 'white', borderRadius: '10px', border: '0px solid transparent' }}>Love</Button>
                                <Button className='ml-2' style={{ width: '130px', height: '40px', background: '#FA81F0', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Swingers</Button>
                            </div>
                            <p className='mt-5' style={{ fontWeight: '700', marginTop: '1rem', fontSize: '20px' }}>Security Contact </p>
                            <div className='d-flex flex-wrap center-data'>
                                <div onClick={() => history('/')} className="signlog_login_btn" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>Jack Reacher</p></div>
                                <div onClick={() => history('/')} className="signlog_login_btn ml-2" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>John Wick</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-gallery' style={{marginBottom : '4rem'}}>
                        <p style={{ textAlign: 'center', fontSize: '2em', fontWeight: '600' }}>Gallery</p>
                        <div className='profile-gallery-pic'>
                            <div className='profile-gallery-pic' >
                                <img src="plugins/images/pexels-chloe-1043474.png" className='gallery-pic-per' />
                                <img src="plugins/images/pexels-julian-jagtenberg-103123.png" className='gallery-pic-per' />
                            </div>
                            <div className='profile-gallery-pic'>
                                <img src="plugins/images/pexels-mostafa-sannad-868113.png" className='gallery-pic-one' />
                                <img src="plugins/images/pexels-samad-ismayilov-1270076.png" className='gallery-pic-one' />
                                <img src="plugins/images/pexels-marlene-leppänen-1183266.png" className='gallery-pic-one' />
                            </div>
                        </div>
                        <div className='d-flex flex-wrap justify-content-center align-items-center p-4' style={{width: '100%'}}>
                            <div onClick={() => history('/edit_profile')} className="signlog_login_btn" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>Edit Profile</p></div>
                            <div onClick={() => history('/')} className="signlog_login_btn ml-2" ><p style={{ padding: '1rem 2rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white', fontSize: '10px' }}>Preview Profile</p></div>
                        </div>
                    </div>
                    <div className='pt-5 pb-5 d-flex flex-column justify-content-center align-items-center' style={{background: '#161616'}}>
                        <img src="plugins/images/Group 17018.png" style={{width: '100%', transform: `translateY(-84px)`}}/>
                        <p style={{ textAlign: 'center', fontSize: '2em', fontWeight: '600' }}>We're here for <span style={{ color: '#FA81F0' }}>You!</span></p>
                        <p style={{ textAlign: 'center', width : '50%' }}>When it comes to love, everyone has questions. That’s why our Customer Care team is here to answer any questions you may have about Lonely AF.
                            The FAQ section is extensive and a great option for autonomous troubleshooting too. So let us help, because this journey is worth it.</p>
                        <div className='d-flex flex-wrap justify-content-center align-items-center p-4' style={{ width: '100%' }}>
                            <Button onClick={() => history('/contactus')} style={{ width: '130px', height: '40px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Contact Us</Button>
                        </div>
                        <img src="plugins/images/Group 17018.png" style={{width: '100%', transform: `translateY(100px)`}}/>
                    </div>
                </div>
            </div>
            <FooterOne bgColor={"black"}/>
        </>
    )
}

export default Profile