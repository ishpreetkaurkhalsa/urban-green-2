import React, { useState, useEffect } from 'react';
import NavLinks4 from './NavLinks4.js';
import { HashLink } from 'react-router-hash-link';

import { PiPottedPlantFill } from "react-icons/pi";

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }


    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        // <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
        
        <nav style={{position:"fixed",width:'100vw',justifyContent:'start',backgroundColor:'white'}}>
            <div className="bg-white flex flex-row justify-start items-center ">
                <div className="flex flex-row justify-center md:px-5 items-center text-center font-semibold" >
                    {/* <HashLink smooth to="/#hero"><PiPottedPlantFill style={{ fontSize: '2rem' }}/></HashLink> */}
                    <HashLink smooth to="/newhome"><img src="/logo.svg" style={{width:'170px'}}/></HashLink>
                    
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-green-700 bg-green-700 bg-opacity-25" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div  className='hidden space-x-6 lg:inline-block p-5 pl-14'>
                        <NavLinks4 />
                    </div>

                    <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${  isOpen ? "block" : "hidden" } `}>
                        <div className='flex flex-col space-y-6'>
                            <NavLinks4 />
                        </div>                                                
                    </div>

                </div>
            </div>
        </nav>
    )
    
}


export default NavBar;
