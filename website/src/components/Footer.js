import React from 'react'
import logo from '../images/footerlogo.png'
import '../css/footer.css'

function Footer() {
    return (
        <footer className='footer'>
            
            <img className='infotech' src={logo} alt=""/>
            <p>© 2021 Triumb All rights reserved</p>
        </footer>
    )
}

export default Footer
