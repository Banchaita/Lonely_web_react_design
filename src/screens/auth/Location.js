import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import gender_bg from '../../images/gender_bg.png'
import five from '../../images/five.png'
import location from '../../images/location.png'

const Location = () => {
    const history = useNavigate();

    return (
        <>
            <div className="container-fluid">
                <div className='row' style={{ background: '#000000', minHeight: '100vh' }}>
                    <div className='col-8 offset-2 my-5 d-flex flex-column justify-content-center align-items-center' >
                        <div>
                            <img src={logo} style={{ width: '200px', height: '50px' }} />
                        </div>
                        <div className='mt-5'>
                            <img src={five} style={{ width: '100%', height: '40px' }} />
                        </div>

                        <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                            <h4 className='text'>Enable Location</h4>
                            <p className='location_txt'>We need your permission to access your location.</p>
                            <div className='mt-2'>
                                <img src={location} style={{ width: '140px', height: '140px' }} />
                            </div>
                        </div>

                        <div className='mt-5'>
                            <div onClick={() => history('/notifications')} className="location_btn" style={{ width: '100%' }}><p style={{ padding: '12px 4rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white' }}>Allow Location</p></div>
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

export default Location