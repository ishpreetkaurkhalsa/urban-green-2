import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { getAuth,signOut } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom";

const NavLinks = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            // Sign out successful
            console.log("Signed out successfully!");
            navigate("/");
          })
          .catch((error) => {
            // An error happened.
            console.error("Error signing out:", error);
          });
      };
    return (
        <>
            <HashLink className="px-[5px] font-normal text-black-500 hover:text-green-600" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-[5px] font-normal text-black-500 hover:text-green-600" smooth to="/#services">
                Services
            </HashLink>
           <HashLink id="signupButton" className="text-white bg-green-600 hover:bg-green-600 inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" smooth to="/login">
                Log In
            </HashLink>
            <HashLink onClick={handleSignOut} id="signupButton" className="text-white bg-green-600 hover:bg-green-600 inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" smooth to="/login">
                Log Out
            </HashLink>
        </>
    )
}

export default NavLinks;
