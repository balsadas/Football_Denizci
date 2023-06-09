import React, { useEffect, useRef, useState } from 'react'




const Com = [
    {
        title: 'Baş sahypa', href: '#'
    },
    {
        title: 'Bizbarada', href: 'index.html#AboutUs'
    },
    {
        title: 'Biziň toparmyz', href: 'index.html#OurTeam'
    },
    {
        title: 'Pursatlar', href: 'index.html#Gallery'
    },
    {
        title: 'Biz bilen habarlaşyň', href: 'index.html#Contacts'
    }
]


function Navbar() {



    const [click, setClick] = useState(false);


    useEffect(() => {
        if (click)
            document.body.style.overflow = "hidden"
        else
            document.body.style.overflow = "auto"

    }, [click])


    return (
        <div style={{ backgroundImage: "url('./img/futsal_1.webp')", width: "100%", minheight: '45vw', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
            {
                click &&
                <div className='w-[100vw] h-[100vh] fixed z-[99] bg-[#00000059]' onClick={() => { setClick(false) }}></div>
            }
            {click ?
                <div className='flex justify-end'>
                    <div className='fixed     w-[70%] z-[15] translate-x-0  ease-out transition-[.5s] min-h-screen bg-[#312f2fce]'> </div>
                </div>
                :
                <div className='absolute w-[70%] z-[10] transition-[.5s] ease-in min-h-screen translate-x-[-120%] bg-[#312f2fce]'></div>}
            <div className=' flex justify-center '>
                <div className={click ? 'flex md:justify-start justify-end items-center md:w-[95%] w-[85%]' : 'flex md:justify-between  items-center md:w-[95%] w-[100%]'}>
                    {click ?
                        ''
                        :
                        <div className='flex md:items-center mt-[1rem] justify-start md:w-[20%] w-full  md:justify-start   '>
                            <img src='./img/Deňizçi_topar.png' className='md:w-[15vw] w-[30vw] h-[25vw] mt-[-1rem] object-fill md:h-[12vw]' />
                            <div className='md:ml-[-2.5rem] ml-[-1.5rem] text-[#fff]'>
                                <p className='md:text-[2.2vw]  text-[6.5vw] font-bold font-sans'>Deňizçi</p>
                                <p className='md:text-[1.3vw] text-[3.5vw] font-[500] text-center'>Futzal Topar</p>
                            </div>
                        </div>
                    }
                    <div className='flex items-center'>
                        <button onClick={() => {
                            setClick(!click);

                        }}>

                            <img className={click ?
                                'w-[6vw] z-[99] md:hidden block absolute top-3 right-[14.5rem] h-[6vw]  translate-x-0 '
                                : 'w-[8vw] z-[99] md:hidden block absolute top-3 left-3 h-[8vw] translate-x-[-200%] ease-out transition-[.5s] '} src='./img/close (1).png' />
                            <img className={click ?
                                'w-[8vw] z-[99] md:hidden block absolute top-3 left-3 h-[8vw]  translate-x-[-200%] '
                                :
                                'w-[10vw] z-[99] md:hidden block absolute top-5 right-6 h-[10vw] translate-x-0 ease-out transition-[.2s]'} src='./img/burger-bar.png' />

                        </button>
                        <ul className={click ? 'md:hidden   z-[99] w-full   mt-[5rem]' : 'md:flex z-[99]  hidden '}>

                            {Com.map((com, i) => (
                                <li key={i} onClick={() => setClick(false)} className={click ?
                                    'flex  items-center   z-[20] text-[#fff] font-[600] text-[4.5vw]  w-[55vw] py-3 border-t  delay-500 ease-in-out'
                                    : 'md:mx-4   md:hover:underline select-none cursor-pointer xl:text-[1.4vw] xl:mx-8 md:hover:scale-125 md:hover:translate-y-1 ease-in-out duration-300  text-[#fff] font-[600] md:text-[1.3vw] '}>
                                    <a href={com.href} style={{ scrollBehavior: 'smooth' }}>
                                        {com.title}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>

                </div>

            </div>
            {click ? ''
                :
                <div className='flex justify-end'>
                    <div className='md:w-[60%]  flex md:justify-start justify-end'>
                        <div className=' md:w-full w-[70%]'>
                            <div className='flex  justify-end '>
                                <h2 className='text-[#fff] font-bold md:text-[3vw] select-none w-[85%] xl:text-[2.5vw] text-[5vw]  mr-3 md:w-[80%] md:ml-[13rem]'>
                                    Hoşgeldiňiz Deňizçi- Futzal & Futbol topary
                                </h2>
                            </div>
                            <div className='flex justify-end'>
                                <p className='text-[#fff] md:w-[80%] select-none w-[90%] mr-1 md:mb-[8rem] mb-[3rem] xl:text-[1vw] xl:pb-[12rem] md:ml-[13rem] text-[3.5vw] md:text-[1.2vw] mt-4 font-[500]'>
                                    Klubumyz, Türkmenistanyň iň meşhur sport görnüşleriniň bir bilen meşgullanýar. Biz futbol medeniýetini ösdürmäge bagyşlanýarys
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar
