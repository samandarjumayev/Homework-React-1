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
                    <li>Home</li>
                    <li>Brends</li>
                    <li>Recent Products</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>

                <ul className='menu'>
                    <li>
                        <i className='fa-solid fa-search'></i>
                    </li>
                    <li>
                        <i className='fa-solid fa-user'></i>
                    </li>
                    <li>
                        <i className='fa-solid fa-cart-shopping'></i>
                    </li>
                </ul>

            </div>
        </div>
    </Fragment>
}