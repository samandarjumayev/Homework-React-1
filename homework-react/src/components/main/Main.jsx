import { Fragment } from 'react';
import './main.css';
import clockPhoto from '../../images/main-clock.png';

export default function Main(){
    return <Fragment>
        <section className='main'>
            <div className='main-info container'>

                <div className="main-left">
                    <h1>Discover <br />Most Suitable Watches</h1>
                    <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                    <label htmlFor="main-search">
                        <i className='fa-solid fa-search'></i>
                        <input type="text" id='main-search' placeholder='Find best brands' />
                        <button id='search-btn'>Search</button>
                    </label>
                </div>

                <div className="main-right">
                    <img src={clockPhoto} alt="" />
                </div>

            </div>
        </section>
    </Fragment>
}