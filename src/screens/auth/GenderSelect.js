import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import gender_bg from '../../images/gender_bg.png'
import one from '../../images/one.png'
import { Button } from 'antd'

const GenderSelect = () => {
    const history = useNavigate();

    return (
        <>
            <div className="container-fluid p-0">
                <div className='row' style={{ minHeight: '100vh' }}>
                    <div className='col-8 offset-2 my-5 d-flex flex-column justify-content-center align-items-center' >
                        <div>
                            <img src={logo} style={{ width: '200px', height: '50px' }} />
                        </div>
                        <div className='mt-5'>
                            <img src={one} style={{ width: '100%', height: '40px' }} />
                        </div>

                        <div className='mt-5'>
                            <h4 className='text'>Interested In?</h4>
                            <div className='d-flex flex-wrap gender_select_input mt-4'>
                                <div className='col-6 gender_input'>
                                    <Button className={"whiteInput d-flex justify-content-between align-items-center"} >
                                        <div style={{ display: 'flex' }}>
                                            <img src="plugins/images/Group 16367@2x.png" style={{ width: '12px', marginRight: '1rem' }} />
                                            Men
                                        </div>
                                        <img src="plugins/images/Icon feather-check@2x.png" style={{ width: '20px' }} />
                                    </Button>
                                </div>
                                <div className='col-6 gender_input'>
                                    <Button className={"whiteInput  d-flex justify-content-between align-items-center"} >
                                        <div style={{ display: 'flex' }}>
                                            <img src="plugins/images/Group 16370@2x.png" style={{ width: '12px', marginRight: '1rem' }} />
                                            Couples
                                        </div>
                                        <img src="plugins/images/Icon feather-check@2x.png" style={{ width: '20px' }} />
                                    </Button>
                                </div>
                            </div>

                            <div className='d-flex flex-wrap  gender_select_input mt-4'>
                                <div className='col-6 gender_input'>
                                    <Button className={"whiteInput d-flex justify-content-between align-items-center"} >
                                        <div style={{ display: 'flex' }}>
                                            <img src="plugins/images/Group 16369@2x.png" style={{ width: '16px', marginRight: '1rem' }} />
                                            Women
                                        </div>
                                        <img src="plugins/images/Icon feather-check@2x.png" style={{ width: '20px' }} />
                                    </Button>
                                </div>
                                <div className='col-6 gender_input'>
                                    <Button className={"whiteInput d-flex justify-content-between align-items-center"} >
                                        <div style={{ display: 'flex' }}>
                                            <img src="plugins/images/Path 10489@2x.png" style={{ width: '12px', marginRight: '1rem' }} />
                                            Others
                                        </div>
                                        <img src="plugins/images/Icon feather-check@2x.png" style={{ width: '20px' }} />
                                    </Button>
                                </div>
                            </div>
                            <div className='d-flex flex-wrap  gender_select_input mt-4'>
                                <div className='col-6 gender_input'>
                                    <Button className={"whiteInput d-flex justify-content-between align-items-center"} >
                                    <div style={{ display: 'flex' }}>
                                            Select All
                                        </div>
                                        <img src="plugins/images/Icon feather-check@2x.png" style={{ width: '20px' }} />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <div onClick={() => history('/types_of_connection')} className="gender_btn" style={{ width: '100%' }}><p style={{ padding: '12px 8rem', height: 'auto', margin: '0', background: '#282c34', borderRadius: '13px', color: 'white' }}>Continue</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenderSelect