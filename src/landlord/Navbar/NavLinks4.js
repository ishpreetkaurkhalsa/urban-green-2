// import React, { useEffect, useState } from 'react';
// import { HashLink } from 'react-router-hash-link';

// const NavLinks = () => {
//     const [currentAccount, setCurrentAccount] = useState("");

//     const connectWallet = async () => {
//       try {
//         const { ethereum } = window;
  
//         if (!ethereum) {
//           alert("Get MetaMask!");
//           return;
//         }
//         const accounts = await ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         console.log("Connected", accounts[0]);
//         setCurrentAccount(accounts[0]);
    
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     const checkIfWalletIsConnected = async () => {
//       const { ethereum } = window;
  
//       if (!ethereum) {
//         console.log("Make sure you have metamask!");
//         return;
//       } else {
//         console.log("We have the ethereum object", ethereum);
//       }
  
//       const accounts = await ethereum.request({ method: "eth_accounts" });
//       const chain = await window.ethereum.request({ method: "eth_chainId" });
//       let chainId = chain;
//       console.log("chain ID:", chain);
//       console.log("global Chain Id:", chainId);
//       if (accounts.length !== 0) {
//         const account = accounts[0];
//         console.log("Found an authorized account:", account);
//         setCurrentAccount(account);
//       } else {
//         console.log("No authorized account found");
//       }
//     };
  
//     useEffect(() => {
//       checkIfWalletIsConnected();
//     }, []);
//     return (
//         <div>
//             <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" smooth to="/#about">
//                 About
//             </HashLink>
//             <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" smooth to="/#services">
//                 Services
//             </HashLink>
//             <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" to="/contact#contact">
//                 ContactUs
//             </HashLink>
//             <HashLink id="signupButton" className="text-white bg-green-600 hover:bg-green-600 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/signup2">
//                 Verify Your Identity
//             </HashLink>
//             <div id="signupButton" className="text-white bg-green-600 ml-2 hover:bg-green-600 inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" onClick={connectWallet}>
//                 Connect Wallet
//             </div>
//         </div>
//     )
// }

// export default NavLinks;
import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
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
        <div>
            <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" to="/contact#contact">
                ContactUs
            </HashLink>
            <HashLink id="signupButton" className="text-white mr-5 bg-green-600 hover:bg-green-600 inline-flex items-center justify-center w-auto px-4 py-2 shadow-xl rounded-xl" smooth to="/signup2">
                 Verify Your Identity
             </HashLink>
            {currentAccount ? (
                <span className="text-black-500">{currentAccount}</span>
            ) : (
                <div id="signupButton" className="text-white bg-green-600 ml-2 hover:bg-green-600 inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" onClick={connectWallet}>
                    Connect Wallet
                </div>
            )}
        </div>
    )
}

export default NavLinks;
