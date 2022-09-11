import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Auth from '../../components/common/Auth'

const Otp = () => {
    const history = useNavigate();

    const [otp1, setOtp1] = useState("")
    const [otp2, setOtp2] = useState("")
    const [otp3, setOtp3] = useState("")
    const [otp4, setOtp4] = useState("")
    const [bgcolor, setbgColor] = useState("")
    const [color, setcolor] = useState("")

    var changeInput = (e, inputbox) => {
        switch (inputbox) {
            case "one":
                setOtp1(e.target.value)
                // const box = document.getElementById('box1');
                // box.style.backgroundColor = "#FA81F0 !important"
                // box.style.color = "white !important"
                break;
            case "two":
                setOtp2(e.target.value)
                // e.target.style.backgroundColor = "#FA81F0 !important"
                // e.target.style.color = "white !important"
                break;
            case "three":
                setOtp3(e.target.value)
                // e.target.style.backgroundColor = "#FA81F0 !important"
                // e.target.style.color = "white !important"
                break;
            case "four":
                setOtp4(e.target.value)
                // e.target.style.backgroundColor = "#FA81F0 !important"
                // e.target.style.color = "white !important"
                break;
            default:
                break;
        }
    }

    // useEffect(() => {
    //     if (otp1 != "") {
    //         const box = document.getElementById('box1');
    //         box.style.backgroundColor = "#FA81F0 !important"
    //         box.style.color = "white !important"
    //     }
    //     if (otp2 != "") {
    //         const box = document.getElementById('box2');
    //         box.style.backgroundColor = "#FA81F0 !important"
    //         box.style.color = "white !important"
    //     }
    //     if (otp3 != "") {
    //         const box = document.getElementById('box3');
    //         box.style.backgroundColor = "#FA81F0 !important"
    //         box.style.color = "white !important"
    //     }
    //     if (otp4 != "") {
    //         const box = document.getElementById('box4');
    //         box.style.backgroundColor = "#FA81F0 !important"
    //         box.style.color = "white !important"
    //     }
    // }, [otp1, otp2, otp3, otp4])


    return (
        <div className="container-fluid p-0">
            <div className="" style={{ height: '100vh' }}>
                <Auth />
                <div className="px-0 col-12 col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-between signup_right" style={{ background: "#1A1717" }}>
                    <div style={{ width: '100%', marginTop: '2rem' }}>
                        <Link to={'/login'} style={{ marginLeft: '1rem' }}><img src="plugins/images/Group 17194.png" /></Link>
                    </div>
                    <div className="col-10 p-5 " style={{ borderRadius: 5, color: 'white', textAlign: 'center' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem', borderRadius: 20 }}>
                            <img class="img-fluid" style={{ maxHeight: '200px', width: '200px' }} src='plugins/images/Mask Group 19@2x.png' />
                        </div>
                        <h4 style={{ color: 'white', fontSize: '19px', marginBottom: '2rem' }}>00:42</h4>
                        <div className='d-flex flex-column justify-content-center align-items-center' style={{ padding: '0 0 2rem 0' }}>
                            <p className='login-text' style={{ fontWeight: '100', width: '45%' }}>Type the verificaton code we've set you.</p>
                        </div>
                        <div className='d-flex justify-content-center' style={{ textAlign: 'center' }}>
                            <input value={otp1} onChange={(e) => changeInput(e, "one")} max="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" className={"form-control phoneInput otpInput "} id="box1" type="number" placeholder="0" style={{ textAlign: 'center', backgroundColor: otp1!="" ? "#FA81F0" : 'black', color : otp1!="" ? color : "white" }} />
                            <input value={otp2} onChange={(e) => changeInput(e, "two")} max="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" className={"form-control phoneInput otpInput "} id="box2" type="number" placeholder="0" style={{ textAlign: 'center' }} />
                            <input value={otp3} onChange={(e) => changeInput(e, "three")} max="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" className={"form-control phoneInput otpInput "} id="box3" type="number" placeholder="0" style={{ textAlign: 'center' }} />
                            <input value={otp4} onChange={(e) => changeInput(e, "four")} max="1" oninput="this.value=this.value.replace(/[^0-9]/g,'');" className={"form-control phoneInput otpInput "} id="box4" type="number" placeholder="0" style={{ textAlign: 'center' }} />
                        </div>
                        <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', marginTop: '4rem' }}>
                            <div onClick={() => history('/gender_select')} className="signlog_login_btn" style={{ width: '60%' }}><p style={{ padding: '1rem 4rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white' }}>Confirm</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otp

