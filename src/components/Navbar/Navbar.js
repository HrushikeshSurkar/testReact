import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-ul'>
                <li className='navbar-li'>
                    <Link className='navbar-link' to='/'>Home</Link>
                </li>
                <li className='navbar-li'>
                    <Link className='navbar-link' to='projects/hello-world'>Hello world</Link>
                </li>
                <li className='navbar-li'>
                    <Link className='navbar-link' to='projects/vertical-scroll'>Vertical Cards</Link>
                </li>
                <li className='navbar-li'>
                    <Link className='navbar-link' to='projects/carousel-scroll'>Carousel Cards</Link>
                </li>
                <li className='navbar-li'>
                    <Link className='navbar-link' to='projects/horizontal-scroll'>Horizontal Cards</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
