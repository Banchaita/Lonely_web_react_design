import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import gender_bg from '../../images/gender_bg.png'
import three from '../../images/three.png'
import location from '../../images/location.png'
import { Button } from 'antd'

const Interest = () => {
    const history = useNavigate();

    return (
        <>
        
            <div className='row' style={{ background: '#000000', minHeight: '100vh' }}>
                <div className='col-12 mx-auto  my-5 d-flex flex-column justify-content-center align-items-center' >
                    <div>
                        <img src={logo} style={{ width: '200px', height: '50px' }} />
                    </div>
                    <div className='mt-5'>
                        <img src={three} style={{ width: '100%', height: '40px' }} />
                    </div>

                    <div className='mt-5 d-flex flex-column justify-content-center align-items-center mb-3'>
                        <h4 className='text'>Your Interests</h4>
                        <p className='interest_txt'>Select a few of your interests and let everyone know what you’re passionate about.</p>
                    </div>

                    <div className='row justify-content-center align-items-center mb-3'>
                        <div className='col-md text-white interest_box px-4 p-2  text-center mx-3 mb-2' style={{ border: '1px solid  #00DFDF' }}>
                            <div className='row justify-content-center py-1'>
                                <div className='mx-2' style={{ backgroundColor: 'rgba(0,223,222)', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #00DFDF' }}></div>
                                <div className='mx-2' style={{ backgroundColor: '#f580f0', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #f580f0' }}></div>
                                <div className='mx-2' style={{ background: "linear-gradient(#f580f0,#00DFDF)", borderRadius: '50%', width: '10px', height: '10px', borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)', }}></div>
                            </div>
                            {/* <br /> */}
                            Dominate
                        </div>
                        <div className='col-md text-white interest_box px-4 p-2 text-center mx-3 mb-2' style={{ border: '1px solid #f580f0' }}>
                            <div className='row justify-content-center py-1'>
                                <div className='parentdiv'>
                                <div className='mx-2' style={{ backgroundColor: 'rgba(0,223,222)', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #00DFDF' }}></div>
                                </div>
                                <div className='mx-2' style={{ backgroundColor: '#f580f0', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #f580f0' }}></div>
                                <div className='mx-2' style={{ background: "linear-gradient(#f580f0,#00DFDF)", borderRadius: '50%', width: '10px', height: '10px', borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)', }}></div>
                            </div>
                            Fantasy
                        </div>
                        <div className='col-md text-white interest_box px-4 p-2 text-center mx-3 mb-2' style={{ borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)' }}>
                            <div className='row justify-content-center py-1'>
                                <div className='mx-2' style={{ backgroundColor: 'rgba(0,223,222)', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #00DFDF' }}></div>
                                <div className='mx-2' style={{ backgroundColor: '#f580f0', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #f580f0' }}></div>
                                <div className='mx-2' style={{ background: "linear-gradient(#f580f0,#00DFDF)", borderRadius: '50%', width: '10px', height: '10px', borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)', }}></div>
                            </div>
                            Role Play
                        </div>
                        <div className='col-md text-white interest_box px-4 py-3 text-center mx-3 mb-2'>

                            Cos Play
                        </div>

                    </div>
                    <div className='row justify-content-center align-items-center mb-3'>
                        <div className='col-md text-white interest_box px-4 py-3 text-center mx-3 mb-2'>
                            Dominate
                        </div>
                        <div className='col-md text-white interest_box px-4 py-3 text-center mx-3 mb-2'>
                            Fantasy
                        </div>
                        <div className='col-md text-white interest_box px-4 py-3 text-center mx-3 mb-2'>
                            Role Play
                        </div>
                        <div className='col-md text-white interest_box px-4 py-3 text-center mx-3 mb-2'>
                            Cos Play
                        </div>

                    </div>

                    <div className='mt-5'>
                        <button onClick={() => history('/profile')} className='btn btn-block' style={{ padding: '12px 4rem', height: 'auto', margin: '0', background: '#000', borderRadius: '13px', color: 'white', borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)' }}>Done</button>
                        {/*  <div onClick={() => history('/profile')} className="location_btn" style={{ width: '100%' }}><p className='btn2' style={{ padding: '12px 4rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white' }}>Done</p></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interest