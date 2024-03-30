import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import farmABI from '../../abis/farmABI.json';
const ethers = require("ethers")

const NavLinks = () => {
    const farmContract = "0x3ACd479d5e0A7BF2d11c84690277a9a92795f06d";

    const getReward = (e) => {
        e.preventDefault();
        // console.log(inputs);

        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            console.log("here")
            console.log(farmContract)
            const contract = new ethers.Contract(farmContract, farmABI, signer);
            // console.log(inputs.liquidity, account)
            // contract.newSignUp();
        }
    }

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

    return (
        <>
            <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" to="/contact#contact">
                ContactUs
            </HashLink>
            <div onClick={getReward} id="signupButton" className="text-white bg-green-600 ml-2 hover:bg-green-600 inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" >
                Get Rewards
            </div>
            {currentAccount ? (
                <span className="text-black-500">{currentAccount}</span>
            ) : (
                <div id="signupButton" className="text-white bg-green-600 ml-2 hover:bg-green-600 inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" onClick={connectWallet}>
                    Connect Wallet
                </div>
            )}

        </>
    )
}

export default NavLinks;
