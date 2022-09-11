import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo1 from '../../images/logo2.png'
import { Switch } from 'antd';
import FooterOne from '../../components/footerOne/index'



const Setting = () => {
    const history = useNavigate();

    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }

    const logout = () => {
        localStorage.removeItem("token")
        history('/')
    }

    return (
        <>
            <div className='' style={{ background: '#000000', color: 'white' }}>
                <div style={{ padding: '3rem 0' }}>
                    <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Settings</p>
                </div>
                <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className="setting-btn-area">
                            <div className='setting-btn' onClick={() => history('/subscriptions')}>
                                <span className='btn-logo'>
                                    <img src={logo1} alt=""
                                        style={{ width: '50px' }}
                                    />
                                </span>
                                <span className='btn-text'>
                                    Get Permium Access
                                </span>
                                <span className='btn-icon'>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '3rem 0' }}>
                    <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Account Settings</p>
                </div>

                <div className='col-8 offset-2 my-5 d-flex flex-column justify-content-center align-items-center' >
                    <div className='container'>
                        <div>
                            <div className='row mt-2'>
                                <div className='col-md-6 account-area'>
                                    <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Phone Number</label>
                                    <div className='account-btn'>
                                        <select name="area-code" id="area-code">
                                            <option value="(+1)">(+1)</option>
                                            <option value="(+2)">(+2)</option>
                                        </select>
                                        <span className='phonenumber'>123 456 7890</span>
                                    </div>

                                </div>
                                <div className='col-md-6'>
                                    <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Notification</label>
                                    <div className='account-btn'>
                                        Enable Notification
                                        <span className='account-btn-logo'>
                                            <img src={logo1} alt="" style={{ width: '50px' }} />
                                        </span>
                                        <span className='switch'>
                                            <Switch defaultChecked onChange={onChange} />
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Location</label>
                                    <div className='account-btn'>
                                        Enable Location
                                        <span className='account-btn-logo'>
                                            <img src={logo1} alt="" style={{ width: '50px' }} />
                                        </span>
                                        <span className='switch'>
                                            <Switch defaultChecked onChange={onChange} />
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Map Location</label>
                                    <div className='account-btn'>
                                        Hide Profile On Map
                                        <span className='account-btn-logo'>
                                            <img src={logo1} alt="" style={{ width: '50px' }} />
                                        </span>
                                        <span className='switch'>
                                            <Switch defaultChecked onChange={onChange} />
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Chat Messages</label>
                                    <div className='account-btn'>
                                        Allow Connection Only
                                        <span className='account-btn-logo'>
                                            <img src={logo1} alt="" style={{ width: '50px' }} />
                                        </span>
                                        <span className='switch'>
                                            <Switch checke unCheckedChildren="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Invisible</label>
                                    <div className='account-btn'>
                                        Invisible Mode
                                        <span className='account-btn-logo'>
                                            <img src={logo1} alt="" style={{ width: '50px' }} />
                                        </span>
                                        <span className='switch'>
                                            <Switch checke unCheckedChildren="" />
                                        </span>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='account-btn-two'>
                                        Safety Share Location
                                        <span className='account-btn-icon'>
                                            <i class="fa-solid fa-angle-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='account-btn-two'>
                                        Safety Features
                                        <span className='account-btn-icon'>
                                            <i class="fa-solid fa-angle-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='account-btn-two'>
                                        Blocked
                                        <span className='account-btn-icon'>
                                            <i class="fa-solid fa-angle-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: '3rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Contact Us</p>
                    </div>
                    <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                            <div className='row mt-2'>
                                <div className='col-md-6'>
                                    <div className='contact-btn-two'>
                                        Help & Support
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='contact-btn-two'>
                                        Message The CEO
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
                <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} onClick={logout}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className="setting-btn-area">
                            <div className='setting-logout-btn'>
                                Log out
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <FooterOne bgColor={"black"} />
        </>
    )
}

export default Setting
