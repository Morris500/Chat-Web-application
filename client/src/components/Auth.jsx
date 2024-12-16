import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from "axios";
import signinImage from '../assets/signup.jpg';

const cookies = new Cookies();
 
const initialState = {
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    phoneNumber:"",
    avatarURL:"",
}
const Auth = () => {
    const [form, setform] = useState(initialState);
    const [isSignup, setisSignup] = useState(true);

    const handelChange = (e) =>{
        const {name, value} = e.target
        setform((prev) => { 
            return {...prev, [name]: value } 
        })
    }
    const handelSubmit  =  async (e) =>{
        try {
            e.preventDefault();
            const { username, password, phoneNumber, avatarURL} = form;
    
            const URL ='http://localhost:4000'

            const {data} = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {fullName: form.fullName, username, password, phoneNumber, avatarURL});
            
            console.log(data);
            
            const {token, userId, hashedPassword, fullName} = data;

            cookies.set('token', token);
            cookies.set('username', username);
            cookies.set('fullName', fullName);
            cookies.set('userId', userId);

            if(isSignup){
                cookies.set('phoneNumber', phoneNumber);
                cookies.set('avatarURL', avatarURL);
                cookies.set('hashedPassword', hashedPassword);
            }
window.location.reload();
        } catch (error) {
            console.log('unable to login/signup');
            
        }
       
    }

    const switchMode = () => {
        setisSignup((previsSignup) => !previsSignup);    }

  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p>{isSignup ? 'Sign Up' : 'Sign In'} </p>
                <form onSubmit={handelSubmit} >
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

                    <div className='auth__form-container_fields-content_button'>
                        <button>{isSignup ? "Sign Up" : "Sign In"}</button>
                    </div>
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