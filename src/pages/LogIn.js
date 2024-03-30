import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { HashLink } from 'react-router-hash-link';
import InputControl from "../InputControl/InputControl";
import { auth } from "./firebase";
import heroImg from '../images/right-img3.jpeg';
import bg from './right-img3.jpg';
import styles from "./Login.module.css";
import NavBar from "../components/Navbar/NavBar";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/newhome");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    
      <div className={styles.container}>
      <div class="left">
        <div className={styles.innerBox}>
          <div className="logoimg">
            <HashLink smooth to="/#hero"><img src="logo.png" style={{width:'200px', padding:'10px'}}/></HashLink>
          </div>
          <h1 className='md:text-5xl text-3xl font-bold text-black mb-5 -mt-[0.5px]'>Log In</h1>

          <InputControl label="Email" onChange={(event) =>setValues((prev) => ({ ...prev, email: event.target.value }))} placeholder="Enter email address"/>
          <InputControl
            label="Password"
            type="password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            placeholder="Enter Password"
          />

            <div className={styles.footer}>
              <p style={{color:'green',fontSize:'12px',textAlign:'right',marginTop:'-15px',marginBottom:'20px',marginRight:'10px'}} className="hover:underline">
                Forgot Password?
              </p>
              <b className={styles.error} style={{marginTop:'-20px'}}>{errorMsg}</b>
              
              <button disabled={submitButtonDisabled} onClick={handleSubmission}>
                Login
              </button>
              <p>
                Don't have an account?{" "}
                <span>
                  <Link to="/signup">Sign up</Link>
                </span>
              </p>
              
            </div>
        </div>
      </div>
      <div className="right">
          <img alt="card img" style={{
  width: '530px',
  height: '654px',
  borderRadius: '0 20px 20px 0',
  float: 'right',
  transitionDuration: '1000ms',
  paddingTop: '1px'
}} src={heroImg} />
      </div>
    </div>
  );
}

export default Login;