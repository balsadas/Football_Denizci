import React, { useEffect } from 'react'




function ContactUs() {
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, []);
    return (
        <div className='md:pb-[6rem] pb-[2rem] bg-[#f5f7f7e8]' id='Contacts'>
            <div className='flex justify-end w-[95%] pt-[5rem] '>
                <div>
                    <h2
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="800"
                        className='text-[6vw] md:text-[3vw] xl:text-[2vw]  font-[600] flex justify-end'>Contact Us</h2>
                    <div className='md:w-[75%] md:ml-14    h-[2px] bg-green-200'></div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-[90%]'>
                    <div className='md:grid md:grid-cols-2 flex flex-col '>
                        <div
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration='900'
                            className='flex justify-center md:mt-[3rem] mt-[1.5rem]'>
                            <div className='w-[80%]'>
                                <div>
                                    <h2 className='md:text-[1.2vw] text-[4vw] md:mb-4 mb-2 font-[500] xl:text-[1vw]'>Address</h2>
                                    <div className='bg-gray-200 h-[2px] w-full md:w-[90%]'></div>
                                    <div className='flex items-center'>
                                        <img src='./img/location.png' className='w-[4.5vw] h-[4.5vw] md:w-[2vw] md:h-[2vw] md:ml-2 ml-1 xl:w-[1vw] xl:h-[1vw]' />
                                        <p className='md:my-[2rem] md:text-[.9vw] text-[3.2vw] my-[1rem] md:ml-4 ml-2 xl:text-[.8vw]'>2130 Fulton Street, Chicago, IL
                                            94117-1080 USA</p>
                                    </div>
                                </div>


                                <div>
                                    <h2 className='md:text-[1.2vw] text-[4vw] md:mb-4 mb-2 font-[500] xl:text-[1vw]'>Phone</h2>
                                    <div className='bg-gray-200 h-[2px] md:w-[90%] w-full'></div>
                                    <div className='flex items-center'>
                                        <img src='./img/call.png' className='w-[4.5vw] h-[4.5vw] md:w-[2vw] md:h-[2vw] md:ml-2 ml-1 xl:w-[1vw] xl:h-[1vw]' />
                                        <p className='md:my-[2rem] my-[1rem] md:text-[.9vw] text-[3.2vw] md:ml-4 ml-2 xl:text-[.8vw]'>54898645845, 68748998</p>
                                    </div>
                                </div>


                                <div>
                                    <h2 className='md:text-[1.2vw] text-[4vw] mb-2 md:mb-4 font-[500] xl:text-[1vw]'>Email</h2>
                                    <div className='bg-gray-200 h-[2px] md:w-[90%] w-full'></div>
                                    <div className='flex items-center'>
                                        <img src='./img/email (2).png' className='w-[4.5vw] h-[4.5vw] md:w-[2vw] md:h-[2vw] md:ml-2 ml-1 xl:w-[1vw] xl:h-[1vw]' />
                                        <p className='md:my-[2rem] my-[1rem] md:text-[.9vw] text-[3.2vw] md:ml-4 ml-2 xl:text-[.8vw]'>gmail@gamil.com</p>
                                    </div>
                                </div>


                                <div>
                                    <h2 className='font-[500] md:text-[1.2vw] text-[4vw]  mb-2 md:mb-4  xl:text-[1vw]'>Opening hours</h2>
                                    <div className='bg-gray-200 h-[2px] md:w-[90%] w-full'></div>
                                    <div className='flex items-center'>
                                        <img src='./img/calendar.png' className='w-[4.5vw] h-[4.5vw] md:w-[2vw] md:h-[2vw] md:ml-2 ml-1 xl:w-[1vw] xl:h-[1vw]' /> F
                                        <p className='md:my-[2rem] my-[1rem] md:text-[.9vw] text-[3.2vw] md:ml-4 ml-2 xl:text-[.8vw]'>Mon–Fri: 9:00 am–6:00 pm <br />
                                            <span className='pt-3'> Sat–Sun: 11:00 am–4:00 pm</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-duration='900'
                            data-aos-easing="ease-in-sine">
                            <div

                                className='md:mt-[3rem] mt-[2rem] md:block flex justify-center'>
                                <p className='md:text-[1.1vw] md:w-[90%] w-[90%] text-[3.2vw] mb-6 xl:text-[1vw] font-[400]  text-justify'>
                                    You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our office personally.
                                </p>
                            </div>
                            <form method="post" action="sendemail.php" id="contact-form">
                                <div className=' flex justify-center'>
                                    <div className='w-[90%] md:w-full md:grid md:grid-cols-2'>
                                        <div>
                                            <div>
                                                <p className='md:text-[1.1vw] text-[3.5vw] mb-1 indent-2 mt-1 xl:text-[1vw] '>First Name</p>
                                                <input type='text' className='border w-full md:w-[90%] md:p-4 p-2  rounded-lg' required     name="username"/>
                                            </div>
                                            <div>
                                                <p className='md:text-[1.1vw] text-[3.5vw] indent-2 mb-1 mt-5 xl:text-[1vw]'>E-mail</p>
                                                <input type='email' className='border md:w-[90%] md:p-4 w-full p-2 rounded-lg' name="email" required />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <p className='md:text-[1.1vw] text-[3.5vw] mb-1 indent-2 mt-1 xl:text-[1vw]'>Last Name</p>
                                                <input type='text' className='border md:w-[90%] md:p-4 w-full p-2 rounded-lg' required name='subject'/>
                                            </div>
                                            <div>
                                                <p className='md:text-[1.1vw] mb-1 text-[3.5vw] indent-2 mt-5 xl:text-[1vw]'>Phone number</p>
                                                <input type='text' className='border md:w-[90%] md:p-4 w-full p-2  rounded-lg' required name='phone'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='w-[90%] md:w-full'>
                                        <p className='md:text-[1.1vw] text-[3.5vw] mb-1 indent-2 mt-5 xl:text-[1vw]'>
                                            Message
                                        </p>
                                        <textarea className='border w-full p-3 md:text-[1vw] text-[3.5vw]  h-[50vw] md:w-[95%] mt-3 rounded-lg md:h-[15vw] xl:h-[10vw] ' />
                                    </div>
                                </div>
                                <div className='flex justify-end mt-3 w-[95%]'>
                                    <button className='md:py-4 md:px-12 px-8 py-3 md:text-[1vw] rounded-lg border bg-[#fff] font-[700] theme-btn btn-style-eight clearfix' >Sent</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
