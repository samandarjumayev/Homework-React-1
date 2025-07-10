import { Fragment } from 'react'
import './header.css'
import logo from '../../images/logo.png';

export default function Header(){
    return <Fragment>
        <div className='header'>
            <div className='header-info container'>

                <div className='logo'>
                    <img src={logo} alt="Web logo" />
                    <h3>Mohid</h3>
                </div>

                <ul className='nav'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Brends</a></li>
                    <li><a href="#">Recent Products</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>

                <ul className='menu'>
                    <li>
                        <a href="#"><i className='fa-solid fa-search'></i></a>
                    </li>
                    <li>
                        <a href="#"><i className='fa-solid fa-user'></i></a>
                    </li>
                    <li>
                        <a href="#"><i className='fa-solid fa-cart-shopping'></i></a>
                    </li>
                </ul>

            </div>
        </div>
    </Fragment>
}