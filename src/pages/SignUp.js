import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { HashLink } from 'react-router-hash-link';
import InputControl from "../InputControl/InputControl";
import { auth, provider } from "./firebase";
import styles from "./Signup.module.css";
import NavBar from "../components/Navbar/NavBar";
import heroImg from '../images/right-img3.jpeg';
import bg from './right-img3.jpg';
import Home from "./Home";
import { FcGoogle } from 'react-icons/fc';

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [val, setVal] = useState('')

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setVal(data.user.email)
    })
  }
  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/newhome");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>

      <div className={styles.container}>
        <div className="left">
          <div className={styles.innerBox}>
            <div className="logoimg">
              <HashLink smooth to="/#hero"><img src="logo.png" style={{ width: '200px', padding: '10px' }} /></HashLink>
            </div>
            <h1 className='md:text-5xl text-3xl font-bold text-black mb-5 mt-5'>Sign Up</h1>

            <InputControl
              label="Name"
              placeholder="Enter your name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <InputControl
              label="Email"
              placeholder="Enter email address"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            <InputControl
              label="Password"
              placeholder="Enter password"
              type="password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />
            <div style={{marginTop:'5px', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
              {val ? (
                navigate('/newhome')
              ) : (
                <button
                  onClick={handleClick}
                  style={{ backgroundColor: '#ffffffba', color: 'black', border: '2px solid #ffffff', padding: '5px 0 5px 10px', borderRadius: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', }}
                >
                  <FcGoogle style={{ marginRight: '10px' }} />
                 
                </button>
              )}
            </div>
            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button onClick={handleSubmission} disabled={submitButtonDisabled}>
                Signup
              </button>
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img alt="card img"  style={{
  width: '530px',
  height: '650px',
  borderRadius: '0 20px 20px 0',
  float: 'right',
  transitionDuration: '1000ms',
  paddingTop: '1px'
}} src={heroImg} />
        </div>
      </div>
    </>
  );
}

export default Signup;