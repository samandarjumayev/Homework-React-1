import { Fragment } from "react";
import './banner.css';
import banner1 from '../../images/banner-1.png';
import banner2 from '../../images/banner-2.png';
import banner3 from '../../images/banner-3.png';

export default function Banner(){
    return <Fragment>
        <section className="banner">
            <div className="banner-info container">

                <div className="boxs">

                    <div className="box">
                        <div className="img">
                            <img src={banner1} alt="" />
                        </div>
                        <div>
                            <h3>Apple</h3>
                            <p>Apple is one of the most famous smart watches providing company.</p>
                        </div>
                    </div>
                    
                    <div className="box">
                        <div className="img">
                            <img src={banner2} alt="" />
                        </div>
                        <div>
                            <h3>Xiaomi</h3>
                            <p>Apple is one of the most famous smart watches providing company.</p>
                        </div>
                    </div>
                    
                    <div className="box">
                        <div className="img">
                            <img src={banner3} alt="" />
                        </div>
                        <div>
                            <h3>FitBit</h3>
                            <p>Apple is one of the most famous smart watches providing company.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    </Fragment>
}