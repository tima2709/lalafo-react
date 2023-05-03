import React from 'react';
import './HeroPage.scss'

const HeroPage = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className="col-6">
                    <div className="box">
                        <h1>
                            <span>An exciting place </span>
                            for the whole family to shop.
                        </h1>
                        <p>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                            interested.
                        </p>
                        <button>
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="box">
                        <img
                            src={require('../assets/qwerty.png')}
                            alt=""/>
                    </div>
                </div>
            </div>
            <div className={'sponsors-icon'}>
                <img src={require('../assets/cl_logo2.png')} alt=""/>
                <img src={require('../assets/cl_logo4.png')} alt=""/>
                <img src={require('../assets/cl_logo5.png')} alt=""/>
                <img src={require('../assets/cl_logo7.png')} alt=""/>
            </div>
        </div>
    );
};

export default HeroPage;