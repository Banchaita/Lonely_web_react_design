import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import uploadImage from '../../images/uploadImage.png'
import { Button } from 'antd';
import add from '../../images/add.png'
import colors from '../../images/colors.png'
import delet from '../../images/delete_icon.png'

const EditProfile = () => {
    const history = useNavigate();

    return (
        <>
            <div className='row m-0' style={{ background: '#000000', minHeight: '100vh' }}>
                <div className='col-8 offset-2 my-5 d-flex flex-column justify-content-center align-items-center' >
                    <div className='container'>
                        <div className='form'>
                            <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                                <h2 className='text'>Edit Profile Details</h2>
                            </div>
                            <div>

                                <div className='row mt-2'>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Username/Nickname</label>
                                        <input className={"form-control blackInput"} type="text" value="Ash" style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '4rem', fontSize: '14px', borderRadius: '1rem' }} />
                                    </div>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Email</label>
                                        <input className={"form-control blackInput"} type="email" value="Enter Email" style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '4rem', fontSize: '14px', borderRadius: '1rem' }} />
                                    </div>

                                </div>
                                <div className='row mt-2'>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Occupation</label>
                                        <input className={"form-control blackInput"} type="text" value="Model" style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '4rem', fontSize: '14px', borderRadius: '1rem' }} />
                                    </div>
                                    <div className='col-md-6'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Gender</label>
                                        <input className={"form-control blackInput"} type="text" value="Model" style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '4rem', fontSize: '14px', borderRadius: '1rem' }} />
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-12'>
                                        <label style={{ transform: `translate(13px, 22px)`, background: 'black', color: 'white', padding: '5px' }}>Bio</label>
                                        <textarea className={"form-control textareaBlackInput"} type="textarea" value="My name is Ash and I enjoy meeting new people and finding ways to help them have an uplifting experience. I enjoy reading. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo." style={{ marginBottom: 10, border: '2px solid white', color: 'white', height: '3rem', fontSize: '14px', borderRadius: '1rem' }} />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='interests mt-5'>
                            <h5 className='text'>Interests</h5>
                            <div className='row justify-content-center align-items-center mb-3'>
                                <div className='col-md text-white interest_box px-4 p-2  text-center mx-3 mb-2' style={{ border: '1px solid  #00DFDF' }}>
                                    {/* <Button type='danger' style={{ transform: 'translate(126px, -17px)', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button> */}
                                    <div className='row justify-content-center py-1 position-relative'>
                                        <div className='mx-2' style={{ backgroundColor: 'rgba(0,223,222)', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #00DFDF' }}></div>
                                        <div className='mx-2' style={{ backgroundColor: '#f580f0', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #f580f0' }}></div>
                                        <div className='mx-2' style={{ background: "linear-gradient(#f580f0,#00DFDF)", borderRadius: '50%', width: '10px', height: '10px', borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)', }}></div>
                                        <Button type='danger' style={{ position: "absolute", top: '-25px', right: '-20px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>
                                    </div>
                                    {/* <br /> */}
                                    Dominate
                                </div>
                                <div className='col-md text-white interest_box px-4 p-2 text-center mx-3 mb-2' style={{ border: '1px solid #f580f0' }}>
                                    {/* <Button type='danger' style={{ transform: 'translate(126px, -17px)', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button> */}
                                    <div className='row justify-content-center py-1 position-relative'>
                                        <div className='parentdiv'>
                                            <div className='mx-2' style={{ backgroundColor: 'rgba(0,223,222)', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #00DFDF' }}></div>
                                        </div>
                                        <div className='mx-2' style={{ backgroundColor: '#f580f0', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #f580f0' }}></div>
                                        <div className='mx-2' style={{ background: "linear-gradient(#f580f0,#00DFDF)", borderRadius: '50%', width: '10px', height: '10px', borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)', }}></div>
                                        <Button type='danger' style={{ position: "absolute", top: '-25px', right: '-20px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>
                                    </div>

                                    Fantasy
                                </div>
                                <div className='col-md text-white interest_box px-4 p-2 text-center mx-3 mb-2' style={{ borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)' }}>
                                    {/* <Button type='danger'  style={{ transform:'translate(126px, -17px)', background: 'white', color: 'white', padding: '5px', borderRadius:'50%', height:'30px', width:'30px',textAlign:'-webkit-center'}}><img src={delet} style={{height:'17px',display:'flex', alignItems:'center0', justifyContent:'center'}}></img></Button> */}
                                    <div className='row justify-content-center py-1 position-relative'>
                                        <div className='mx-2' style={{ backgroundColor: 'rgba(0,223,222)', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #00DFDF' }}></div>
                                        <div className='mx-2' style={{ backgroundColor: '#f580f0', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #f580f0' }}></div>
                                        <div className='mx-2' style={{ background: "linear-gradient(#f580f0,#00DFDF)", borderRadius: '50%', width: '10px', height: '10px', borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)', }}></div>
                                            <Button type='danger' style={{ position: "absolute", top: '-25px', right: '-20px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>
                                    </div>
                                    Role Play
                                </div>
                                <div className='col-md text-white interest_box px-4 p-2  text-center mx-3 mb-2' style={{ border: '1px solid  #00DFDF' }}>
                                    {/* <Button type='danger' style={{ transform: 'translate(126px, -17px)', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button> */}
                                    <div className='row justify-content-center py-1 position-relative'>
                                        <div className='mx-2' style={{ backgroundColor: 'rgba(0,223,222)', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #00DFDF' }}></div>
                                        <div className='mx-2' style={{ backgroundColor: '#f580f0', borderRadius: '50%', width: '10px', height: '10px', border: '1px solid #f580f0' }}></div>
                                        <div className='mx-2' style={{ background: "linear-gradient(#f580f0,#00DFDF)", borderRadius: '50%', width: '10px', height: '10px', borderImage: 'linear-gradient(to right, #0083c5 0%, #0083c5 33%, #ec4a26 66%, #ec4a26 100%)', }}></div>
                                        <Button type='danger' style={{ position: "absolute", top: '-25px', right: '-20px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>
                                    </div>
                                    {/* <br /> */}
                                    Dominate
                                </div>
                            </div>
                        </div>
                        <div className='gallery'>
                            <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                                <h2 className='text'>Edit Images</h2>
                            </div>
                            <div>
                                <div className='row mt-2'>
                                    <div className='col-md-3 pb-2' >
                                        <div className='position-relative' style={{ width: 'fit-content' }}>
                                            <img src={img1} style={{ width: '200px', height: '250px' }} />
                                            <Button type='danger' style={{ position: "absolute", top: '0px', right: '0px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>

                                        </div>
                                        {/* <Button type='danger'  style={{ transform:'translate(-37px, -104px)', background: 'white', color: 'white', padding: '5px', borderRadius:'50%', height:'30px', width:'30px',textAlign:'-webkit-center'}}><img src={delet} style={{height:'17px',display:'flex', alignItems:'center0', justifyContent:'center'}}></img></Button> */}
                                    </div>
                                    <div className='col-md-3 pb-2'>
                                        <div className='position-relative' style={{ width: 'fit-content' }}>
                                            <img src={img2} style={{ width: '200px', height: '250px' }} />
                                            <Button type='danger' style={{ position: "absolute", top: '0px', right: '0px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>

                                        </div>
                                    </div>
                                    <div className='col-md-3 pb-2'>
                                        <div className='position-relative' style={{ width: 'fit-content' }}>
                                            <img src={img3} style={{ width: '200px', height: '250px' }} />
                                            <Button type='danger' style={{ position: "absolute", top: '0px', right: '0px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>

                                        </div>
                                    </div>
                                    <div className='col-md-3 pb-2'>
                                        <div className='position-relative' style={{ width: 'fit-content' }}>
                                            <img src={img4} style={{ width: '200px', height: '250px' }} />
                                            <Button type='danger' style={{ position: "absolute", top: '0px', right: '0px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>

                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-4 pb-2'>
                                    <div className='col-md-3 pb-2'>
                                        <div className='position-relative' style={{ width: 'fit-content' }}>
                                            <img src={img5} style={{ width: '200px', height: '250px' }} />
                                            <Button type='danger' style={{ position: "absolute", top: '0px', right: '0px', background: 'white', color: 'white', padding: '5px', borderRadius: '50%', height: '30px', width: '30px', textAlign: '-webkit-center' }}><img src={delet} style={{ height: '17px', display: 'flex', alignItems: 'center0', justifyContent: 'center' }}></img></Button>

                                        </div>
                                    </div>
                                    <div className='col-md-3 pb-2'>
                                        <img src={uploadImage} style={{ width: '200px', height: '250px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div onClick={() => history('/location')} className="about_btn" style={{ width: '100%' }}><p style={{ padding: '12px 8rem', height: 'auto', margin: '0', background: '#00DFDF', borderRadius: '13px', color: 'white' }}>Save</p></div>
                    </div>
                </div>
            </div>
            <FooterOne bgColor={"black"}/>
        </>
    )
}

export default EditProfile