import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import imagesfill from '../../images/image-fill.png'
import takepicture from '../../images/takepicture.png'

const TakePicturetwo = () => {
    const [addimage, setAddImage] = useState('')
    const [file1, setFile1] = React.useState(``)


    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    useEffect(() => {
        if (typeof addimage !== "string") {
            (async function () {
                let x = await toBase64(addimage)
                setFile1(x)
                console.log(x)
            })()
        }
        setFile1(`${imagesfill}`)
    }, [addimage])
    return (
        <>
            <div className='' style={{ background: '#000000', color: 'white' }}>

                <div className='d-flex flex-row justify-content-around align-items-center pt-5 pb-5 my-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                    <div className='d-flex flex-column justify-content-center align-items-center' >
                        <div className=" d-flex flex-column picture-area-two">

                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6  text-dark">
                                        <div className="image-area">
                                            <label>
                                                <input type="file" accept="image/*" multiple style={{ display: 'none', visibility: 'hidden' }} onChange={(event) => setAddImage(event.target.files[0])} />
                                                <img style={{ width: '50px', height: '50px' }}
                                                    src={file1}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6  text-dark">
                                        <div className="image-area-two"></div>
                                    </div>
                                </div>
                                <div className="image-title my-3">
                                    <h4>Take Picture</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-around align-items-center pt-2 pb-5' style={{ width: '100%', textAlign: 'center', padding: '3rem 0' }} >
                    <div className='d-flex flex-column justify-content-center'>
                        <p>2/2</p>
                        <Button style={{ width: '200px', height: '50px', background: '#00DFDF', borderRadius: '10px', border: '2px solid transparent', color: 'white' }}>Confirm</Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TakePicturetwo
