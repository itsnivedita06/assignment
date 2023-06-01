import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='main'>
        <div className='left-div'>
        <img src={require('../assets/pic2.jpg')} className='picture' />
        <img src={require('../assets/pic3.png')} className='logo' />
        <img src={require('../assets/pic1.png')} className='text' />
        <img src={require('../assets/pass2.png')} className='globe' />
        <p className='text3'>aesthisia.com</p>
        </div>

        <div className='right-div'>
        <img src={require('../assets/petals.png')} className='petal' />
        <p className='heading'>Welcome <span className='head-name'>Back!</span></p>
        <p className='text1'>Glad to see you, Again!</p>
        <input type="email" className="field" placeholder="Enter your email" />
        <input type="password" className="field" placeholder="Enter your password" />
        
        <p className='pass'>Forgot Password?</p>
        <button type='submit' className='button'>Log In</button>
        <p className='Sign'>Don’t have an account yet? <span className='head-name'>Sign Up</span></p>
        </div>
    </div>
  )
}

export default Login