import React from 'react'
import logo from '../images/footerlogo.png'
import '../css/footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>
            
           <div className="policy-div">
            
               <div className='rule-link-ul'>
                  <span className="rules-link">
                     <Link to='/privacy'>
                     <a target='blank'>Privacy Policy</a>
                     </Link>
                 </span>
                  <span className="rules-link">
                     <Link to='/tac'>
                     <a target='blank'>Terms and Conditions</a>
                     </Link>
                 </span>
                  <span className="rules-link">
                  <Link to='/refund'>
                  <a target='blank'>Cancellation/Refund Policy</a>
                     </Link>
                  </span>
               </div>
               <p>© 2021 Triumb All rights reserved</p>
               </div>
            <div className="social-logos">
               
                 <p className='social-logo'>
                   <a href="https://instagram.com/triumbinfotech?igshid=ysz2nr5uq1sa">
                   <InstagramIcon/>
                  </a> 
                  </p>
                 <p className='social-logo'>
                    <a target='blank' href="https://www.facebook.com/Triumb-104431035077047">
                    <FacebookIcon/>
                    </a>
                    
                 </p>
                 <p className='social-logo'>
                    <a target='blank' href="https://www.linkedin.com/company/triumb/">
                    <LinkedInIcon/>
                    </a>
                   
                 </p>
                 
            </div>
            
           
        </footer>
    )
}

export default Footer
