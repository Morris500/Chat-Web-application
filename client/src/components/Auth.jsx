import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from "axios";
import signinImage from '../assets/signup.jpg';

const Auth = () => {
    const [isSignup, setisSignup] = useState(true);

    const handelChange = () =>{
    }
    const switchMode = () => {
        setisSignup(!isSignup);
    }
  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p>{isSignup ? 'Sign Up' : 'Sign In'} </p>
                <form onSubmit={() => {} } >
                    {isSignup ? (
                        <div className="auth__form-container_fields-content_input">
                       <label htmlFor="fullName">Full Name</label>
                       <input type="text" name="fullName" placeholder='Full Name' onChange={handelChange} required  />
                    </div>) : null }

                    <div className="auth__form-container_fields-content_input">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder='Username' onChange={handelChange} required  />
                    </div>

                    {isSignup ? (
                        <div className="auth__form-container_fields-content_input">
                       <label htmlFor="Phone Number">Phone Number</label>
                       <input type="text" name="Phone Number" placeholder='Full Name' onChange={handelChange} required  />
                    </div>) : null }

                  
                    {isSignup ? (
                        <div className="auth__form-container_fields-content_input">
                       <label htmlFor="AvatarURL">Avatar URL</label>
                       <input type="text" name="AvatarURL" placeholder='AvatarURL' onChange={handelChange} required  />
                    </div>) : null }

                    <div className="auth__form-container_fields-content_input">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" placeholder='Password' onChange={handelChange} required  />
                    </div>

                    {isSignup ? (
                        <div className="auth__form-container_fields-content_input">
                       <label htmlFor="Confirm Password">Confirm Password</label>
                       <input type="password" name="Password" placeholder='Confirm Password' onChange={handelChange} required  />
                    </div>) : null }

                </form>
                <div className='auth__form-container_fields-account'>
                    <p>{isSignup ? "Already have an account?" : "Don't have an account?" } 
                        <span onClick={switchMode}>
                            {isSignup ? "Sign In" : "Sign Up"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div className='auth__form-container_image'>
            <img src={signinImage} alt="sign in" />
        </div>
    </div>
  )
}

export default Auth