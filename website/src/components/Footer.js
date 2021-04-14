import React from 'react'
import logo from '../images/footerlogo.png'
import '../css/footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <footer className='footer'>
            
           
            <p>© 2021 Triumb All rights reserved</p>
            <div className="social-logos">
                 <p className='social-logo'>
                    <InstagramIcon/>
                 </p>
                 <p className='social-logo'>
                    <FacebookIcon/>
                 </p>
                 <p className='social-logo'>
                    <LinkedInIcon/>
                 </p>
                 <p className='social-logo'>
                    <TwitterIcon/>
                 </p>
            </div>
            
           
        </footer>
    )
}

export default Footer
