import { Fragment } from 'react';
import './footer.css';
import clock from '../../images/clock1.png';

export default function Footer(){
    return <Fragment>
        <section className="subscribe">
            <div className="sub-info container">
                <div className="sub-card">
                    <div className="sub-left">
                        <h2>Subscribe To Newsletter</h2>
                        <p>Get free guide about smart watches daily</p>
                        <label htmlFor="subscribe">
                            <input type="text" name="" id="subscribe" placeholder='Enter Email Address' />
                            <button className='sub-btn'>Subscribe</button>
                        </label>
                    </div>
                    <div className="sub-img">
                        <img src={clock} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer">
            <p>Copyright &copy; 2022 | Samandar</p>
        </footer>
    </Fragment>
}