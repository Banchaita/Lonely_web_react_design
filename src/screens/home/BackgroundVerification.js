import React from 'react'
import shield from '../../images/shield.png'


const BackgroundVerification = () => {
    return (
        <>
            <div className='' style={{ background: '#000000', color: 'white' }}>
                <div style={{ padding: '3rem 0' }}>
                    <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Background Verification</p>
                </div>
                <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className=" d-flex flex-column  verificationarea" style={{ background: '#fff', width: '70%', borderRadius: '10px', padding: '8%' }}>
                            <div className="img-area">
                                <img src={shield} alt="" />
                            </div>
                            <div className="text-area">
                                <h5 className='verification-title my-4' style={{ fontWeight: '600' }}>Background Check Verification</h5>
                                <p className='text-black' style={{ color: '#2D2D2D', fontWeight: '400' }}>
                                    Your Background Check Verification has been Completed. Your Background Check Verification is verified.                                
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BackgroundVerification
