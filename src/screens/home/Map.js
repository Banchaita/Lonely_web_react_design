import React from 'react'
import FooterOne from '../../components/footerOne/index'
import marker from '../../images/marker.png'
import { Switch, Slider } from 'antd';


const Map = () => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    function onChange(value) {
        console.log('onChange: ', value);
    }
    function onAfterChange(value) {
        console.log('onAfterChange: ', value);
    }

    return (
        <>  <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
            <div className='d-flex flex-column justify-content-center align-items-center '>
                <div className='col-md-12 offset-2 my-5 d-flex flex-column justify-content-center  map-area  ' >
                    <div className='d-flex flex-column justify-content-center align-items-center' >
                        <div className="container">
                            <div className="row">
                                <div class="col-6">
                                    <div className="location-warp my-5">
                                        <div className="location-area">
                                            <img src={marker} alt="" className='locationmarker' />
                                        </div>
                                    </div>

                                </div>
                                <div class="col-6">
                                    <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                                        <div className='d-flex flex-column justify-content-center align-items-center' >
                                            <div className=" d-flex flex-column distance-area"  >
                                                <div className="row">
                                                    <div className="col-md-6 text-white">
                                                        <Switch defaultChecked onChange={onChange} /> Hide My Profole
                                                    </div>
                                                    <div className="col-md-6 text-white">Show Profile</div>
                                                    <div className="col-md-6 text-white my-4">
                                                        Distance
                                                    </div>
                                                    <div className="col-md-6 text-white my-4">
                                                        <small>40 Mins</small>
                                                    </div>

                                                    <div className="col-md-12 text-white my-4">
                                                        <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />

                                                    </div>
                                                    <div className="col-md-6 text-white ">
                                                        <input type="checkbox" id="horns" name="global" />
                                                        <label for="global">  &nbsp; Global</label>
                                                    </div>
                                                    <div className="col-md-12 text-white my-4">
                                                        <span className='location-icon'>
                                                            <i class="fa-solid fa-location-dot"></i>
                                                        </span>
                                                        <input type="text" class="form-control" id="location" aria-describedby="emailHelp" placeholder="      Enter Location" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

            <FooterOne bgColor={"black"} />
        </>
    )
}

export default Map
