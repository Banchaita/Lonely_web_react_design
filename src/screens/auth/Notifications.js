import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import gender_bg from '../../images/gender_bg.png'
import six from '../../images/six.png'
import chat from '../../images/chat.png'

const Notifications = () => {
    const history = useNavigate();
    const onConform = () => {
        localStorage.setItem("token", "wueiewdhihjuadskhfa")
        history('/home')
    }

    return (
      <>
            <div className="container-fluid">
                <div className='row' style={{ background: '#000000', minHeight: '100vh' }}>
                    <div className='col-8 offset-2 my-5 d-flex flex-column justify-content-center align-items-center' >
                        <div>
                            <img src={logo} style={{ width: '200px', height: '50px' }} />
                        </div>
                        <div className='mt-5'>
                            <img src={six} style={{ width: '100%', height: '40px' }} />
                        </div>

                        <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                            <h4 className='text'>Enable Notification's</h4>
                            <p className='notification_txt'>Get push-notification when you get the match or receive a message.You can turn this On/Off Later in Settings.</p>
                            <div className='mt-2'>
                                <img src={chat} style={{ width: '140px', height: '140px' }} />
                            </div>
                        </div>

                        <div className='mt-5'>
                            <div onClick={() => onConform()} className="location_btn" style={{ width: '100%' }}><p style={{ padding: '12px 4rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white' }}>I want to be Notified</p></div>
                        </div>
                        <div className='mt-3'>
                            <a className='location' href='#'>Not Now</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Notifications