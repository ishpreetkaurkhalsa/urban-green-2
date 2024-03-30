import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const NavLinks = () => {

    return (
        <>
            <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-2 font-normal text-black-500 hover:text-green-600" smooth to="/#services">
                Services
            </HashLink>
            <Link to="/signup2" className="text-white bg-green-600 hover:bg-green-600 inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl">
                Verify Your Identity
            </Link>
        </>
    )
}

export default NavLinks;
