import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import gender_bg from '../../images/gender_bg.png'
import four from '../../images/four.png'
import profile_pic from '../../images/profile_pic.png'

const Profile = () => {
    const history = useNavigate();

    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: '#000000', minHeight: '100vh' }}>
                <div className='d-flex flex-column justify-content-center align-items-center' >
                    <div>
                        <img src={logo} style={{ width: '200px', height: '50px' }} />
                    </div>
                    <div className='mt-5'>
                        <img src={four} style={{ width: '100%', height: '40px' }} />
                    </div>

                    <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                        <h4 className='text'>Profile Details</h4>
                        <div className='mt-2'>
                            <img src={profile_pic} style={{ width: '140px', height: '140px' }} />
                        </div>
                        <div className='mt-2'>
                            <a className='profile' href='#'>Add Profile Pic</a>
                        </div>
                    </div>

                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className='d-flex flex-wrap gender_select_input mt-4'>
                            <div className='col-6 gender_input'>
                                <input className={"form-control whiteInput"} type="text" placeholder="Enter Username/Nickname" style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '3rem', fontSize: '14px', borderRadius: '1rem' }} />
                            </div>
                            <div className='col-6 gender_input'>
                                <input className={"form-control whiteInput"} type="text" placeholder="xxx-xxx-xxxx" style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '3rem', fontSize: '14px', borderRadius: '1rem' }} />
                            </div>
                        </div>

                        <div className='d-flex flex-wrap gender_select_input mt-4'>
                            <div className='col-6 gender_input'>
                                <input className={"form-control whiteInput"} type="text" placeholder="Enter Email" style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '3rem', fontSize: '14px', borderRadius: '1rem' }} />
                            </div>
                            <div className='col-6 gender_input'>
                                <input className={"form-control whiteInput"} type="text" placeholder="Select Your gender" style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '3rem', fontSize: '14px', borderRadius: '1rem' }} />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <div className='col-12'>
                                <input className={"form-control colorInput"} type="text" placeholder="Choose birthday date" style={{ marginBottom: 10, border: '2px solid #00F1F14D', color: '#00F1F1', backgroundColor: '#00F1F1', height: '3rem', fontSize: '14px', borderRadius: '1rem' }} />
                            </div>
                        </div>

                        <div className='mt-4' style={{width : '100%'}}>
                            <div className='col-12'>
                                <textarea className={"form-control textareaInput"} type="textarea" placeholder="Enter Bio" style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '3rem', fontSize: '14px', borderRadius: '1rem' }} />
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div onClick={() => history('/location')} className="profile_btn" style={{ width: '100%' }}><p style={{ padding: '12px 8rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white' }}>Confirm</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile