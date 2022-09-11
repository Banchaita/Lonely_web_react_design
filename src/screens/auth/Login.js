import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { socialLogin } from '../../actions/auth'
import Auth from '../../components/common/Auth'
import { useDispatch } from 'react-redux'
import GoogleLogin from 'react-google-login';
import SocialButton from "./SocialButton";

const Login = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const [phone, setPhone] = useState()

    const handleSocialLogin = (user) => {
        // console.log(user);
        dispatch(socialLogin({
            email: user._profile.email,
            f_name: user._profile.firstName,
            l_name: user._profile.lastName,
            profile_pic: user._profile.profilePicURL,
            device_id: 123456,
            login_source: user._provider,
            fb_uid: user._profile.id,
            os: "web",
            fcm_token: "na"
        }))
    };

    const handleSocialLoginFailure = (err) => {
        console.error(err);
    };

    const responseGoogle = (user) => {
        console.log(user);
        dispatch(socialLogin({
            email: user.profileObj.email,
            f_name: user.profileObj.givenName,
            l_name: user.profileObj.familyName,
            profile_pic: user.profileObj.imageUrl,
            device_id: 123456,
            login_source: "google",
            google_id: user.profileObj.googleId,
            os: "web",
            fcm_token: "na"
        }))
    }

    const responseGoogleErr = (response) => {
        console.log(response);
    }

    const onConform = () => {
        history('/otp')
    }

    return (
        <div className="container-fluid p-0">
            <div className="auto-height" style={{ height: '100vh' }}>
                <Auth />
                <div className="px-0 col-12 col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-between signup_right" style={{ background: "#1A1717" }}>
                    <div style={{ width: '100%', marginTop: '2rem' }}>
                        <Link to={'/'} style={{ marginLeft: '1rem' }}><img src="plugins/images/Group 17194.png" /></Link>
                    </div>
                    <div className="col-10 p-5 " style={{ borderRadius: 5, color: 'white', textAlign: 'center' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem', borderRadius: 20 }}>
                            <img class="img-fluid" style={{ maxHeight: '200px', width: '200px' }} src='plugins/images/Mask Group 19@2x.png' />
                        </div>
                        <h4 style={{ color: 'white', fontSize: '19px', marginBottom: '2rem' }}>My Mobile</h4>
                        <div className='d-flex flex-column justify-content-center align-items-center' style={{padding: '0 0 2rem 0'}}>
                            <p className='login-text' style={{ fontWeight: '100', width: '45%' }}>Please enter your valid phone number. We will send you a 4-digit code to verify your account.</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className={"form-control phoneInput login-button-adj"} type="number" placeholder="XXX-XXX-XXXX" style={{ marginBottom: 10, border: '2px solid #04CACA', height: '3rem', fontSize: '14px', borderRadius: '1rem', width : '50%' }} />
                        </div>
                        <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', marginTop: '4rem' }}>
                            <div  onClick={() => onConform()} className="signlog_login_btn login-button-adj" style={{ width: '50%' }}><p style={{ padding: '1rem 4rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white' }}>Confirm</p></div>
                        </div>
                        <p style={{ padding: '2rem 0' }}>----- or sign In With -----</p>
                        <div className='d-flex justify-content-center' style={{ width: '100%' }}>
                            <SocialButton
                                provider="facebook"
                                appId="675130930412270"
                                onLoginSuccess={handleSocialLogin}
                                onLoginFailure={handleSocialLoginFailure}
                                className="btn btn-block signlog_login_btn login-button-adj"
                                style={{ background: `#4267B2`, color: 'white', width: '50%', height: '60px', padding: '1rem 0' }}
                            >
                                Login with Facebook
                            </SocialButton>
                        </div>
                        <div className='d-flex justify-content-center' style={{ width: '100%', marginTop: '2rem' }}>
                            <GoogleLogin
                                clientId="913640013088-b1rglvmrs8k1crafk5umt1c9410mmqmp.apps.googleusercontent.com"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogleErr}
                                className="btn btn-block googleBtn login-button-adj"
                                background="#4267B2"
                                style={{ background: `#4267B2`, color: 'white', width: '100%', height: '60px' }}
                            >
                                Login with Google
                            </GoogleLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login

