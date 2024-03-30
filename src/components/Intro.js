import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar2';
import heroImg from '../images/plant.svg';
import { CiSearch } from "react-icons/ci";

const Intro = () => {
    return (
        <div id="about" className="container" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '20px',
            marginBottom: '50px'
        }}>
            <div className="hero-right relative" id="hero-right" style={{ gridColumn: '1 / 2' }}>
                <div className="w-full relative" data-aos-delay="700" data-aos="fade-up">
                    <img alt="card img" className="ml-[180px] mt-[45px] rounded-t float-left duration-1000 w-[470px] rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-3xl py-1 " src={heroImg} />
                </div>
            </div>

            <div className="hero" id="hero" style={{ gridColumn: '2 / 3' }}>
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6 flex justify-center items-center" data-aos="fade-up">
                    <div id="hero" className="flex flex-col lg:flex-row py-10 justify-between text-center lg:text-left">
                    <div className="rounded-3xl px-8 py-4 lg:w-2/2 flex flex-col justify-center mt-9 align-middle shadow-lg" style={{ borderRadius: '18px', background: 'rgba(0, 0, 0,0.0)', boxShadow: '10px 5px 30px rgba(166, 181, 150, 0.7)' }}>


                            <h1 className="md:text-[3.5rem] text-3xl font-bold text-black my-10">
                                <span style={{ color: '#09AD52' }}>About</span><span style={{ color: '#115631' }}>Us</span>
                            </h1>
                            <div className="text-[18px] tracking-wider font-light tracking-tight text-black-500 mb-10">At UrbanGreens, we're on a mission to transform urban spaces into thriving hubs of sustainable agriculture. We connect users with landlords who have unused rooftop space, turning overlooked areas into vibrant gardens. Our platform fosters community engagement, reduces food miles, and promotes environmental sustainability.
                                <br />
                                <br />
                                Founded by passionate advocates for urban farming, UrbanGreens is driven by core values of inclusivity, transparency, and innovation. Our team is dedicated to creating positive social impact through accessible, decentralized solutions.
                                <br />
                                Join us in reshaping the urban landscape, one rooftop garden at a time.</div>
                            <div className="space-x-0 md:space-x-2 md:mb-8 mb-10">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;
