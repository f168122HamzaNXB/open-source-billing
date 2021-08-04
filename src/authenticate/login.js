import React, { useState } from 'react';
import '../css/Login.css';
import Row from 'react-bootstrap/Row';
import {
    useHistory
  } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    let history = useHistory();
    let regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const loginInputHandler = async (e) => {
          e.preventDefault();
          if (email.trim() === '' || password.trim() === '' || !regEmail.test(email) ){
              console.log('email wali if ma agya');
              if(email.trim() === ''){
                setEmailError('This field is required');
              } else {
                if ( !regEmail.test(email) ){
                  setEmailError('Invalid Email');
                }
              }
              if(password.trim() === ''){
                setPasswordError('This field is required');
              }   
          } else {
            console.log(email+','+password);
            fetch('http://localhost:3000/token_authentication', { 
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.status === 200){
                        localStorage.setItem('token', data.authentication_token);
                        history.push("/dashboard");
                    } else {
                        console.log('Invalid credentials');
                    }
                })
                .catch((error) => {
                    console.error(error);
                });   
          }
        }

 return(
    <div id="background" className="fliud-container">
        <div className="login-container">
            <span className="side-nav"> 
            </span>
            <Row sm={4}>
                <p className="headingStyle"><span className="blueColor">Open</span>Source<span className="blueColor">Billing</span></p>
            </Row >
            <Row sm={4}>
                <p className="subHeadingStyle">SIGN IN</p>
            </Row>           
            <form onSubmit={loginInputHandler} noValidate autoComplete="off">
                <input 
                    className="inputEmailStyle" 
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={email => setEmail(email.target.value)}
                    required 
                />
                {emailError ? <strong className="errorStyle">{emailError}</strong> : <strong></strong>}
                <input 
                    className="inputPassStyle" 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={pass => setPassword(pass.target.value)}
                    required 
                />
                {passwordError ? <strong className="errorStyle">{passwordError}</strong> : <strong></strong>}
                <div className="rowStyle">
                    <div>
                        <input className="checkBoxStyle" type="checkbox"/><label className="checkBoxText">Keep me Signed in</label>
                    </div>
                    <a className="forgotPasswordStyle" href="http://localhost:3001/">Forgot password?</a>
                </div>
                <div className="rowStyle">
                    <input 
                        id="button"
                        className="loginButton"
                        type="submit"
                        value="Submit"
                    />
                    <a className="signInClientStyle" href="http://localhost:3001/">Sign In as a Client</a>
                </div>
                <p className="powerdBy"><a className="webLinkStyle" href="http://localhost:3001/">www.opensourcebilling.org.</a> powered by: <a className="webLinkStyle" href="http://localhost:3001/">presstigers.com</a></p>
            </form>
        </div>
    </div>
)}

export default Login;