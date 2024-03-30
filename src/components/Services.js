import React from 'react';
import img from '../images/service1.svg';
import img2 from '../images/service2.svg';
import img3 from '../images/service3.svg';
import img4 from '../images/service4.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">services</h2>

                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-green-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-900">We are deeply committed to the growth and success of our clients.</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-green-800 hover:bg-[#57d08e] hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-[0.8rem] tracking-widest text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Vacant Space Listing</h2>
                                <p className="text-md font-medium">
                                Easily rent rooftop and vacant spaces for farming using our user-friendly platform, connecting space owners with farmers hassle-free.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-green-800 hover:bg-[#57d08e] hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-[0.8rem] tracking-widest text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Immutable Data Vaults</h2>
                                <p className="text-md font-medium">
                                Experience secure transactions and data storage with blockchain's immutable ledger, ensuring transparency and trust in every interaction.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-green-800 hover:bg-[#57d08e] hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-[0.8rem] tracking-widest text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Setup Guidance</h2>
                                <p className="text-md font-medium">
                                Get personalized advice and assistance to start and manage your rooftop farm efficiently with special focus on hydroponics and aeroponics.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-green-800 hover:bg-[#57d08e] hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-[0.8rem] tracking-widest text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Rewards Initiative</h2>
                                <p className="text-md font-medium">
                                Earn rewards for contributing to Urban Greens by leasing rooftops, sharing knowledge, or participating in community activities, fostering engagement and empowerment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services;