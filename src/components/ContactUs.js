import axios from 'axios'
import React, { useEffect, useState } from 'react'




function ContactUs() {



    const [data, setData] = useState({
        email: '',
        text: '',
        phone: '',
        name: '',
        surname: '',

    })
    const handleChange = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })
    }
    const reset = () => {
        setData('')
    }

    const fetch = async () => {
        const fet = {
            email: data.email,
            phone: data.phone,
            name: data.name,
            text: data.text,
            surname: data.surname,
        }
        try {
            if (data.text !== '' && data.phone !== '' && data.name !== '' && data.email !== '' && data.surname !== '') {
                await axios.post(`http://localhost:8001/sendmail`, fet)
                reset()
            }
        } catch (error) { console.log(error) }

    }


    return (
        <div className='md:pb-[6rem] pb-[2rem] bg-[#f5f7f7e8]' id='Contacts'>
            <div className='flex justify-center  md:pt-[5rem] '>
                <div className='py-[2rem] w-[85%]'>
                    <h2 className='text-[6vw] md:text-[3vw] select-none xl:text-[2vw] font-[600]'>Biz bilen habarlaşyň</h2>
                    <div className='md:w-[12%] w-[35%]  h-[2px] bg-green-200'></div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-[90%]'>
                    <div className='md:grid md:grid-cols-2 flex flex-col '>
                        <div

                            className='flex justify-center md:mt-[3rem] mt-[1.5rem]'>
                            <div className='w-[80%]'>
                                <div>
                                    <h2 className='md:text-[1.2vw] text-[4vw] md:mb-4 mb-2 font-[500] xl:text-[1vw] select-none'>Biziň Salgymyz</h2>
                                    <div className='bg-gray-200 h-[2px] w-full md:w-[90%]'></div>
                                    <div className='flex items-center'>
                                        <img src='./img/location.png' className='w-[4.5vw] h-[4.5vw] md:w-[2vw] md:h-[2vw] md:ml-2 ml-1 xl:w-[1vw] xl:h-[1vw]' />
                                        <p className='md:my-[2rem] md:text-[.9vw] text-[3.2vw] select-none my-[1rem] md:ml-4 ml-2 xl:text-[.8vw]'>Balkan welaýaty,Türkmenbaşy şäheri,Şagadam köçesi N8,Türkmenbaşy Halkara Deňiz Porty</p>
                                    </div>
                                </div>


                                <div>
                                    <h2 className='md:text-[1.2vw] text-[4vw] md:mb-4 mb-2 select-none font-[500] xl:text-[1vw]'>Telefon nomer</h2>
                                    <div className='bg-gray-200 h-[2px] md:w-[90%] w-full'></div>
                                    <div className='flex items-center'>
                                        <img src='./img/call.png' className='w-[4.5vw] h-[4.5vw] md:w-[2vw] md:h-[2vw] md:ml-2 ml-1 xl:w-[1vw] xl:h-[1vw]' />
                                        <p className='md:my-[2rem] my-[1rem] md:text-[.9vw] text-[3.2vw] select-none md:ml-4 ml-2 xl:text-[.8vw]'>+99363761717</p>
                                    </div>
                                </div>


                                <div>
                                    <h2 className='md:text-[1.2vw] text-[4vw] mb-2 md:mb-4 select-none font-[500] xl:text-[1vw]'>Elektron poçta</h2>
                                    <div className='bg-gray-200 h-[2px] md:w-[90%] w-full'></div>
                                    <div className='flex items-center'>
                                        <img src='./img/email (2).png' className='w-[4.5vw] h-[4.5vw] md:w-[2vw] md:h-[2vw] md:ml-2 ml-1 xl:w-[1vw] xl:h-[1vw]' />
                                        <p className='md:my-[2rem] my-[1rem] md:text-[.9vw] text-[3.2vw] select-none md:ml-4 ml-2 xl:text-[.8vw]'>f.k.denizci@gamil.com</p>
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div>
                            <div

                                className='md:mt-[3rem] mt-[2rem] md:block flex justify-center'>
                                <p className='md:text-[1.1vw] md:w-[90%] w-[90%] text-[3.2vw] select-none mb-6 xl:text-[1vw] font-[400]  text-justify'>
                                    Size amatly bolan islendik görnüşde biziň bilen habarlaşyp bilersiňiz. 24 sagat jaň etmek ýa-da e-poçta arkaly elýeterli. Şeýle hem aşakda çalt aragatnaşyk formuny ulanyp ýa-da ofisimize şahsy baryp bilersiňiz.
                                </p>
                            </div>

                            <div className=' flex justify-center'>
                                <div className='w-[90%] md:w-full md:grid md:grid-cols-2'>
                                    <div>
                                        <div>
                                            <p className='md:text-[1.1vw] text-[3.5vw] mb-1 select-none indent-2 mt-1 xl:text-[1vw] '>Adyň</p>
                                            <input name='name' value={data ? data.name : ''} onChange={handleChange} type='text' className='border w-full md:w-[90%] md:p-4 p-2  rounded-lg' />
                                        </div>
                                        <div>
                                            <p className='md:text-[1.1vw] text-[3.5vw] indent-2 mb-1 select-none mt-5 xl:text-[1vw]'>Elektron poçta</p>
                                            <input value={data ? data.email : ''} onChange={handleChange} id='email' type='email' className='border md:w-[90%] md:p-4 w-full p-2 rounded-lg' name="email" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p className='md:text-[1.1vw] text-[3.5vw] mb-1 indent-2 mt-1 select-none xl:text-[1vw]'>Familýa</p>
                                            <input type='text' name='surname' value={data ? data.surname : ''} onChange={handleChange} className='border md:w-[90%] md:p-4 w-full p-2 rounded-lg' />
                                        </div>
                                        <div>
                                            <p className='md:text-[1.1vw] mb-1 text-[3.5vw] indent-2 select-none mt-5 xl:text-[1vw]'>Telefon nomer</p>
                                            <input id='phone' type='text' name='phone' onChange={handleChange} value={data ? data.phone : ''} className='border md:w-[90%] md:p-4 w-full p-2  rounded-lg' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='w-[90%] md:w-full'>
                                    <p className='md:text-[1.1vw] text-[3.5vw] mb-1 indent-2 mt-5 xl:text-[1vw] select-none'>
                                        Teswir
                                    </p>
                                    <textarea id='text' name='text' onChange={handleChange} value={data ? data.text : ''} className='border w-full p-3 md:text-[1vw] text-[3.5vw]  h-[50vw] md:w-[95%] mt-3 rounded-lg md:h-[15vw] xl:h-[10vw] ' />
                                </div>
                            </div>
                            <div className='flex justify-end mt-3 w-[95%]'>
                                <button onClick={() => fetch()} className='md:py-4 md:px-12 px-8 py-3 md:text-[1vw] rounded-lg border bg-[#fff] font-[700] theme-btn btn-style-eight clearfix' >Ugrat</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
