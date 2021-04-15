import React from 'react'
import {Link} from 'react-router-dom'
import '../css/account.css'

function Account() {
    return (
        <div className='create-account'>
            <div className="create-container">
                <h1 className="create-heading">
                Create Your Triumb Account
                </h1>
                <p className='create-account-text'>Create an account at Triumb  to save your orders. We promise not to spam. Stay updated on the latest on Triumb.</p>
             <Link to={"/login"}>
            <button className="join">Join Now</button>
            </Link>
            </div>
            
        </div>
    )
}

export default Account
