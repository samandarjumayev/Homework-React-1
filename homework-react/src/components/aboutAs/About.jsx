import { Fragment } from 'react';
import './about.css';
// Rasmlar
import hamza from '../../images/hamza.jpg';
import hafiz from '../../images/hafiz.jpg';

export default function About(){
    return <Fragment>
        <section className="about">
            <div className="about-info container">

                {/* Products qismidagi subtitle va title dizaynini o'zlashtirdi */}
                <p className='pro-subtitle'>Here are our some of the best clients.</p>
                <h3 className='pro-title'>What People Say About Us</h3>

                <div className="slides">

                    <div className="slide">
                        <div className="img">
                            <img src={hamza} alt="" />
                        </div>
                        <div className="slide-info">
                            <h3>Hamza Faizi</h3>
                            <p>Don't waste time, just order! This is the best website to puschase smart watches</p>
                            <div className="rating">
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <div className="img">
                            <img src={hafiz} alt="" />
                        </div>
                        <div className="slide-info">
                            <h3>Hafiz Huzaifa</h3>
                            <p>Don't waste time, just order! This is the best website to puschase smart watches</p>
                            <div className="rating">
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="slide-page">
                    <input type="radio" name='slide' checked />
                    <input type="radio" name='slide' />
                    <input type="radio" name='slide' />
                    <input type="radio" name='slide' />
                    <input type="radio" name='slide' />
                </div>

            </div>
        </section>
    </Fragment>
}