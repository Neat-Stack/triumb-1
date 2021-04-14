import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import '../css/login.css'
import {auth} from '../firebase'

function Login() {
    const history = useHistory()
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const login = (e) => {
        e.preventDefault();
        auth 
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }

    const register = (e) => {
            e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <Link className='login_header' to='/'>
            <h1 className='site_name loghead'>TRIUMB</h1>
            </Link>
           <div className="login_container">
               <h1>Sign-in</h1>
               <form >
                   <h5>E-mail</h5>
                   <input type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
                   <h5>Password</h5>
                   <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                   <button type='submit' className='login_button' onClick={login}>Sign In</button>
               </form>
               <p>
                   By signing in you agree to Triumb's Conditions of Use & Sale.
               </p>
               <button onClick={register} className='register_button'>Create Your Account</button>
           </div>
        </div>
    )
}

export default Login
