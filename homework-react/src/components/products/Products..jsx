import { Fragment } from 'react';
import './products.css';
// Rasmlar
import product1 from '../../images/clock1.png';
import product2 from '../../images/clock2.png';
import product3 from '../../images/clock3.png';
import product4 from '../../images/clock4.png';
import product5 from '../../images/clock5.png';
import product6 from '../../images/clock6.png';

export default function Products(){
    return <Fragment>
        <section className="products">
            <div className="products-info container">

                <p className='pro-subtitle'>Find your favourite</p>
                <h2 className='pro-title'>Our Latest Products </h2>

                <div className="cards">
                    
                    <div className="card">
                        <div className="card-top">
                            <div className='card-icon'>
                                <span><i className='fa-solid fa-cart-shopping'></i></span>
                                <span><i className='fa-solid fa-heart'></i></span>
                            </div>
                            <img src={product1} alt="Apple clock" />
                        </div>
                        <div className="card-bottom">
                            <h3>Apple Smart I</h3>
                            <div className="rating">
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </div>
                            <span><del>$300.00</del> <b>$255.00</b></span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-top">
                            <div className='card-icon'>
                                <span><i className='fa-solid fa-cart-shopping'></i></span>
                                <span><i className='fa-solid fa-heart'></i></span>
                            </div>
                            <img src={product2} alt="Apple clock" />
                        </div>
                        <div className="card-bottom">
                            <h3>Apple Smart II</h3>
                            <div className="rating">
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </div>
                            <span><del>$300.00</del> <b>$255.00</b></span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-top">
                            <div className='card-icon'>
                                <span><i className='fa-solid fa-cart-shopping'></i></span>
                                <span><i className='fa-solid fa-heart'></i></span>
                            </div>
                            <img src={product3} alt="Apple clock" />
                        </div>
                        <div className="card-bottom">
                            <h3>Apple Smart III</h3>
                            <div className="rating">
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </div>
                            <span><del>$300.00</del> <b>$255.00</b></span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-top">
                            <div className='card-icon'>
                                <span><i className='fa-solid fa-cart-shopping'></i></span>
                                <span><i className='fa-solid fa-heart'></i></span>
                            </div>
                            <img src={product4} alt="Apple clock" />
                        </div>
                        <div className="card-bottom">
                            <h3>Apple Smart IV</h3>
                            <div className="rating">
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </div>
                            <span><del>$450.00</del> <b>$399.00</b></span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-top">
                            <div className='card-icon'>
                                <span><i className='fa-solid fa-cart-shopping'></i></span>
                                <span><i className='fa-solid fa-heart'></i></span>
                            </div>
                            <img src={product5} alt="Samsung clock" />
                        </div>
                        <div className="card-bottom">
                            <h3>Samsung Watch Pro</h3>
                            <div className="rating">
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </div>
                            <span><del>$300.00</del> <b>$255.00</b></span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-top">
                            <div className='card-icon'>
                                <span><i className='fa-solid fa-cart-shopping'></i></span>
                                <span><i className='fa-solid fa-heart'></i></span>
                            </div>
                            <img src={product6} alt="FitBit clock" />
                        </div>
                        <div className="card-bottom">
                            <h3>FitBit Max I</h3>
                            <div className="rating">
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                            </div>
                            <span><b>$155.00</b></span>
                        </div>
                    </div>

                </div>

                <div className='view-more'>
                    <button>View More</button>
                </div>

            </div>
        </section>
    </Fragment>
}