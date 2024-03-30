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
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);

      // Redirect to /newhome
      navigate('/buyerhome'); // Add this line to redirect
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have MetaMask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    const chain = await window.ethereum.request({ method: "eth_chainId" });
    let chainId = chain;
    console.log("chain ID:", chain);
    console.log("global Chain Id:", chainId);
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  
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
        navigate("/buyerhome");
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
            <h1 className='md:text-5xl text-3xl font-bold text-black mb-5 mt-5'>Verify Identity</h1>

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
            <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {val ? (
                navigate('/buyerhome')
              ) : (
                <button
                  onClick={handleClick}
                  style={{marginTop:'10px' }}
                >
                  {currentAccount ? (
                    <span className="text-black-500">{currentAccount}</span>
                  ) : (
                    <div>
                      <div id="signupButton" className="text-white bg-[#075F07] ml-2 hover:bg-green-600 inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" onClick={connectWallet}>
                        Connect Wallet <img style={{width:'40px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"/>
                      </div>
                      </div>
                  )}
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
          <img alt="card img" className="w-[530px] h-[660px] rounded-t float-right duration-1000 py-1 rounded-tr-[20px] rounded-br-[20px]" src={heroImg} />
        </div>
      </div>
    </>
  );
}

export default Signup;
