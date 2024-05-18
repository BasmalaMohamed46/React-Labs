import React, { useEffect, useState } from 'react';

const Slider = () => {
    let [counter, setCounter] = useState(0);
    let [sliding, setSliding] = useState(null);
    const [images, setImages] = useState([
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg',
    ]);

    const nextImage = () => {
        setCounter((prevCounter) => (prevCounter + 1) % images.length);
    };

    const prevImage = () => {
        setCounter((prevCounter) => (prevCounter - 1 + images.length) % images.length);
    };

    const slide = () => {
        setSliding(setInterval(nextImage, 2000));
    };

    const stopSlide = () => {
        clearInterval(sliding);
        setSliding(null);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h5>Image Slider</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-center align-items-center mb-3">
                                <i className="fa-solid fa-chevron-left fs-3" onClick={prevImage}></i>
                                <img src={images[counter]} alt="slider" className="img-fluid" style={{ maxHeight: '300px' }} />
                                <i className="fa-solid fa-chevron-right fs-3" onClick={nextImage}></i>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-dark mx-2" onClick={prevImage}>Previous</button>
                                <button className="btn btn-dark mx-2" onClick={slide}>Slide</button>
                                <button className="btn btn-dark mx-2" onClick={stopSlide}>Stop</button>
                                <button className="btn btn-dark mx-2" onClick={nextImage}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
