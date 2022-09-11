import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterOne from '../../components/footerOne/index'
import { Form, FormControl } from 'react-bootstrap';
import connection1 from '../../images/connection1.png'
import connection2 from '../../images/connection2.png'
import connection3 from '../../images/connection3.png'
import connection4 from '../../images/connection4.png'
import messageIcon from '../../images/messageIcon.png'
import deleteIcon from '../../images/deleteIcon.png'

const Connection = () => {
    const history = useNavigate();

    return (
        <>
            <div className='row m-0' style={{ background: '#161616' }}>
                <div className='col-md-12 my-5 d-flex flex-column justify-content-center align-items-center' >
                    <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                        <h4 className='text mb-3'>Connection</h4>
                        <p className='interest_txt' style={{marginBottom:'80px'}}>See Who Wants To Connect</p>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                            <button onClick={() => history('/profile')} className='btn btn-block mb-2' style={{ padding: '12px 4rem', height: 'auto', margin: '0', background: '#000', borderRadius: '13px', color: 'white', borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)' }}>Received</button>
                            </div>
                            <div className='col-md-4'>
                            <button onClick={() => history('/profile')} className='btn btn-block mb-2' style={{ padding: '12px 4rem', height: 'auto', margin: '0', background: 'linear-gradient(to right, #4bd6e1 , #ea87ef)', borderRadius: '13px', color: 'white', borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)' }}>Sent</button>
                            </div>
                            <div className='col-md-4'>
                            <button onClick={() => history('/profile')} className='btn btn-block text-center mb-2   ' style={{ padding: '12px 4rem', height: 'auto', margin: '0', background: '#000', borderRadius: '13px', color: 'white', borderColor: '#f580f0 #f580f0 #00DFDF rgba(0,223,222)' }}>Connections</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{
                                    background: 'black',
                                    border: '2px solid white',
                                    borderRadius: '12px',
                                    color: 'white',
                                    marginLeft: '1rem'
                                }}
                            />
                            <img src='plugins/images/Group 17268 (1).png' style={{ width: '40px', height: '40px', transform: `translateX(-20px)` }} />
                        </Form>
                    </div>
                    <div className='container mt-5'>
                    <div className='row'>
                    <div className='col-md-5 mx-auto my-3' style={{borderRadius:'15px', background:'#000000'}}>
                        <div className='row'>
                        <div className='col-md-3 p-4 text-center'>
                            <img src={connection1} style={{ width: '110px' }}></img>
                        </div>
                        <div className='col-md-4 text-center m-auto'>
                            <h5 style={{ color: 'white' }}>Adriane,24</h5>
                        </div>
                        <div className='col-md-4 text-center m-auto pb-3 px-3'>
                            <img src={messageIcon} style={{ width: '50px' }}></img>
                            <img src={deleteIcon} style={{ width: '50px', marginLeft: '25px' }}></img>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-5 mx-auto my-3' style={{borderRadius:'15px', background:'#000000'}}>
                        <div className='row'>
                        <div className='col-md-3 p-4 text-center'>
                            <img src={connection2} style={{ width: '110px' }}></img>
                        </div>
                        <div className='col-md-4 text-center m-auto'>
                            <h5 style={{ color: 'white' }}>Eva,24</h5>
                        </div>
                        <div className='col-md-4 text-center m-auto pb-3 px-3'>
                            <img src={messageIcon} style={{ width: '50px' }}></img>
                            <img src={deleteIcon} style={{ width: '50px',marginLeft: '25px' }}></img>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-5 mx-auto my-3' style={{borderRadius:'15px', background:'#000000'}}>
                        <div className='row'>
                        <div className='col-md-3 p-4 text-center'>
                            <img src={connection3} style={{ width: '110px' }}></img>
                        </div>
                        <div className='col-md-4 text-center m-auto'>
                            <h5 style={{ color: 'white' }}>Eva,24</h5>
                        </div>
                        <div className='col-md-4 text-center m-auto pb-3 px-3'>
                            <img src={messageIcon} style={{ width: '50px' }}></img>
                            <img src={deleteIcon} style={{ width: '50px',marginLeft: '25px' }}></img>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-5 mx-auto my-3' style={{borderRadius:'15px', background:'#000000'}}>
                        <div className='row'>
                        <div className='col-md-3 p-4 text-center'>
                            <img src={connection4} style={{ width: '110px' }}></img>
                        </div>
                        <div className='col-md-4 text-center m-auto'>
                            <h5 style={{ color: 'white' }}>Eva,24</h5>
                        </div>
                        <div className='col-md-4 text-center m-auto pb-3 px-3'>
                            <img src={messageIcon} style={{ width: '50px' }}></img>
                            <img src={deleteIcon} style={{ width: '50px',marginLeft: '25px' }}></img>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-5 mx-auto my-3' style={{borderRadius:'15px', background:'#000000'}}>
                        <div className='row'>
                        <div className='col-md-3 p-4 text-center'>
                            <img src={connection1} style={{ width: '110px' }}></img>
                        </div>
                        <div className='col-md-4 text-center m-auto'>
                            <h5 style={{ color: 'white' }}>Eva,24</h5>
                        </div>
                        <div className='col-md-4 text-center m-auto pb-3 px-3'>
                            <img src={messageIcon} style={{ width: '50px' }}></img>
                            <img src={deleteIcon} style={{ width: '50px',marginLeft: '25px' }}></img>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-5 mx-auto my-3' style={{borderRadius:'15px', background:'#000000'}}>
                        <div className='row'>
                        <div className='col-md-3 p-4 text-center'>
                            <img src={connection2} style={{ width: '110px' }}></img>
                        </div>
                        <div className='col-md-4 text-center m-auto'>
                            <h5 style={{ color: 'white' }}>Eva,24</h5>
                        </div>
                        <div className='col-md-4 text-center m-auto pb-3 px-3'>
                            <img src={messageIcon} style={{ width: '50px' }}></img>
                            <img src={deleteIcon} style={{ width: '50px',marginLeft: '25px' }}></img>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    {/* <div className='mt-5 d-flex flex-wrap justify-content-center align-items-center' style={{ width: '100%' }}>
                        <div className='col-6'>
                            <div className='row' style={{ background: 'black', marginRight: '20px', height: '160px', borderRadius: '25px' }}>
                                <div className='col-3 text-center' style={{ padding: '10px' }}>
                                    <img src={connection1} style={{ width: '110px', marginTop: '16px', marginLeft: '10px' }}></img>
                                </div>
                                <div className='col-4 text-left mt-2' style={{ padding: '60px' }}>
                                    <h5 style={{ color: 'white' }}>Adriane,24</h5>
                                </div>
                                <div className='col-5 text-center' style={{ paddingTop: '38px' }}>
                                    <img src={messageIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                    <img src={deleteIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row' style={{ background: 'black', marginRight: '20px', height: '160px', borderRadius: '25px' }}>
                                <div className='col-3 text-center' style={{ padding: '10px' }}>
                                    <img src={connection2} style={{ width: '110px', marginTop: '16px', marginLeft: '10px' }}></img>
                                </div>
                                <div className='col-4 text-left mt-2' style={{ padding: '60px' }}>
                                    <h5 style={{ color: 'white' }}>Adriane,24</h5>
                                </div>
                                <div className='col-5 text-center' style={{ paddingTop: '38px' }}>
                                    <img src={messageIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                    <img src={deleteIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <div className='row' style={{ background: 'black', marginRight: '20px', height: '160px', borderRadius: '25px' }}>
                                <div className='col-3 text-center' style={{ padding: '10px' }}>
                                    <img src={connection3} style={{ width: '110px', marginTop: '16px', marginLeft: '10px' }}></img>
                                </div>
                                <div className='col-4 text-left mt-2' style={{ padding: '60px' }}>
                                    <h5 style={{ color: 'white' }}>Eva,21</h5>
                                </div>
                                <div className='col-5 text-center' style={{ paddingTop: '38px' }}>
                                    <img src={messageIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                    <img src={deleteIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <div className='row' style={{ background: 'black', marginRight: '20px', height: '160px', borderRadius: '25px' }}>
                                <div className='col-3 text-center' style={{ padding: '10px' }}>
                                    <img src={connection4} style={{ width: '110px', marginTop: '16px', marginLeft: '10px' }}></img>
                                </div>
                                <div className='col-4 text-left mt-2' style={{ padding: '60px' }}>
                                    <h5 style={{ color: 'white' }}>Jassica,25</h5>
                                </div>
                                <div className='col-5 text-center' style={{ paddingTop: '38px' }}>
                                    <img src={messageIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                    <img src={deleteIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <div className='row' style={{ background: 'black', marginRight: '20px', height: '160px', borderRadius: '25px' }}>
                                <div className='col-3 text-center' style={{ padding: '10px' }}>
                                    <img src={connection1} style={{ width: '110px', marginTop: '16px', marginLeft: '10px' }}></img>
                                </div>
                                <div className='col-4 text-left mt-2' style={{ padding: '60px' }}>
                                    <h5 style={{ color: 'white' }}>Adriane,24</h5>
                                </div>
                                <div className='col-5 text-center' style={{ paddingTop: '38px' }}>
                                    <img src={messageIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                    <img src={deleteIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <div className='row' style={{ background: 'black', marginRight: '20px', height: '160px', borderRadius: '25px' }}>
                                <div className='col-3 text-center' style={{ padding: '10px' }}>
                                    <img src={connection2} style={{ width: '110px', marginTop: '16px', marginLeft: '10px' }}></img>
                                </div>
                                <div className='col-4 text-left mt-2' style={{ padding: '60px' }}>
                                    <h5 style={{ color: 'white' }}>Adriane,24</h5>
                                </div>
                                <div className='col-5 text-center' style={{ paddingTop: '38px' }}>
                                    <img src={messageIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                    <img src={deleteIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <div className='row' style={{ background: 'black', marginRight: '20px', height: '160px', borderRadius: '25px' }}>
                                <div className='col-3 text-center' style={{ padding: '10px' }}>
                                    <img src={connection3} style={{ width: '110px', marginTop: '16px', marginLeft: '10px' }}></img>
                                </div>
                                <div className='col-4 text-left mt-2' style={{ padding: '60px' }}>
                                    <h5 style={{ color: 'white' }}>Eva,21</h5>
                                </div>
                                <div className='col-5 text-center' style={{ paddingTop: '38px' }}>
                                    <img src={messageIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                    <img src={deleteIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <div className='row' style={{ background: 'black', marginRight: '20px', height: '160px', borderRadius: '25px' }}>
                                <div className='col-3 text-center' style={{ padding: '10px' }}>
                                    <img src={connection4} style={{ width: '110px', marginTop: '16px', marginLeft: '10px' }}></img>
                                </div>
                                <div className='col-4 text-left mt-2' style={{ padding: '60px' }}>
                                    <h5 style={{ color: 'white' }}>Jassica,25</h5>
                                </div>
                                <div className='col-5 text-center' style={{ paddingTop: '38px' }}>
                                    <img src={messageIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                    <img src={deleteIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <div className='row' style={{ background: 'black', marginRight: '20px', height: '160px', borderRadius: '25px' }}>
                                <div className='col-3 text-center' style={{ padding: '10px' }}>
                                    <img src={connection1} style={{ width: '110px', marginTop: '16px', marginLeft: '10px' }}></img>
                                </div>
                                <div className='col-4 text-left mt-2' style={{ padding: '60px' }}>
                                    <h5 style={{ color: 'white' }}>Adriane,24</h5>
                                </div>
                                <div className='col-5 text-center' style={{ paddingTop: '38px' }}>
                                    <img src={messageIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                    <img src={deleteIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <div className='row' style={{ background: 'black', marginRight: '20px', height: '160px', borderRadius: '25px' }}>
                                <div className='col-3 text-center' style={{ padding: '10px' }}>
                                    <img src={connection2} style={{ width: '110px', marginTop: '16px', marginLeft: '10px' }}></img>
                                </div>
                                <div className='col-4 text-left mt-2' style={{ padding: '60px' }}>
                                    <h5 style={{ color: 'white' }}>Adriane,24</h5>
                                </div>
                                <div className='col-5 text-center' style={{ paddingTop: '38px' }}>
                                    <img src={messageIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                    <img src={deleteIcon} style={{ width: '50px', marginTop: '16px', marginLeft: '25px' }}></img>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <FooterOne bgColor={"black"} />
        </>
    )
}

export default Connection