import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='bg-[#f5f7f7e8]' id='AboutUs'>
            <div className='flex justify-center '>
                <div className='py-[2rem] w-[85%]'>
                    <h2 className='text-[6vw] md:text-[3vw] xl:text-[2vw] font-[600]'>About Us</h2>
                    <div className='md:w-[10%] w-[20%] xl:w-[7%] h-[2px] bg-green-200'></div>
                </div>
            </div>
            <div className='flex justify-center md:py-[2rem] group'>
                <div className='w-[80%] md:grid md:grid-cols-2 flex flex-col-reverse'>
                    <img src='./img/football2.jpg'
                        className='md:w-[85%] md:h-[26vw] h-[60vw] md:mt-0 mt-5 xl:h-[23vw] object-cover ' />
                    <div 
                    className='items-center flex'>
                        <div>
                            <h2 className='md:text-[2.5vw] group-hover:text-green-600 text-[5.5vw]  xl:text-[2vw] font-[500] flex justify-end select-none w-[95%]'>
                                Who we are
                            </h2>
                            <p className='md:text-[1.1vw] md:mt-6  mt-3 select-none text-[3.2vw] group-hover:text-green-600 xl:text-[1vw] text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru.

                                Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
