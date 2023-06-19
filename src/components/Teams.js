import React from 'react'
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";




const team_1 = [
    { img: './img/work_5.jpg', title: 'Şükürberdiýew Rahmanberdi', title1: 'Menejer' },
    { img: './img/work_1.jpeg', title: 'Krýukow Aleksandr', title1: 'Administrator' },
    { img: './img/work_2.jpeg', title: 'Annadurdyýew Amandurdy', title1: 'Tälimçi' },
    { img: './img/work_3.jpeg', title: 'Öwezow Ýakup', title1: 'Baş Tälimçi' },
    { img: './img/player_7.jpeg', title: 'Orazmämmedow Berdimyrat', title1: 'Administrator' },
    { img: './img/player5.jpeg', title: 'Iskandarow Rustam', title1: 'Derwezeban Tälimçi' },
    { img: './img/work_6.jpg', title: 'Baýseýidow Baýseýit', title1: 'Toparyň Başlygy' },
]

const team = [
    { img: './img/player_10.jpeg', num: '8', title: 'Baýramdurdyýew Şiri', title1: 'Goragçy' },
    { img: './img/player_11.jpeg', num: '6', title: 'Pançenko Daniil', title1: 'Hüjümçi' },
    { img: './img/player_12.jpeg', num: '1', title: 'Baýramow Meretgeldi', title1: 'Derwezeban' },
    { img: './img/player_16.jpeg', num: '15', title: 'Durdyýew Akmyrat', title1: 'Hüjümçi' },
    { img: './img/player_17.jpeg', num: '13', title: 'Tareyew Aleksandr', title1: 'Goragçy' },
    { img: './img/player_18.jpeg', num: '16', title: 'Halmämmedow Arzuw', title1: 'Derwezeban' },
    { img: './img/player_19.jpeg', num: '7', title: 'Berenow Kadir', title1: 'Hüjümçi' },
    { img: './img/player_20.jpeg', num: '10', title: 'Hudaýbergenow Alişer', title1: 'Hüjümçi' },    
    { img: './img/player15.jpeg', num: '2', title: 'Çariýew Keril', title1: 'Hüjümçi' },    
    { img: './img/player_8.jpeg', num: '20', title: 'Murjikow Maksatseýit', title1: 'Goragçy' },
    { img: './img/player_21.jpeg', num: '4', title: 'Soltanow Maksat', title1: 'Hüjümçi' },
    { img: './img/player_22.jpeg', num: '3', title: 'Gylyçmyradow Gylyçmyrat', title1: 'Goragçy' },
    { img: './img/player_23.jpg', num: '12', title: 'Durliýew Dawud', title1: 'Hüjümçi' },
    { img: './img/player_24.jpg', num: '22', title: 'Sofiýew Berdimyrat', title1: 'Derwezeban' },
    { img: './img/player_25.jpeg', num: '5', title: 'Garajaýew Daýanç', title1: 'Goragçy' },
    { img: './img/player_26.jpg', num: '11', title: 'Meňlibaýew Hamid', title1: 'Hüjümçi' },
    { img: './img/player_27.jpg', num: '17', title: 'Annamyradow Jasurbek', title1: 'Goragçy' },
    { img: './img/player_28.jpeg', num: '9', title: 'Nursähedow Abdyllah', title1: 'Hüjümçi' },
]





function Teams() {
    const swiper = useSwiper()
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const navigationPrevRef1 = React.useRef(null)
    const navigationNextRef1 = React.useRef(null)
    console.log(navigationPrevRef)
    return (
        <div className='pt-[2rem] pb-[1rem] bg-[#f5f7f7e8]' id='OurTeam'>
            <div className='flex justify-center  md:mt-[5rem] '>
                <div className='w-[85%] md:w-[90%] ' >
                    <h2
                        className='text-[6vw] md:text-[3vw] xl:text-[2vw] select-none  font-[600] flex justify-start md:justify-end'>Biziň toparymyz</h2>

                    <div className='flex md:justify-end'>
                        <div className='md:w-[12%]   w-[35%] ml-1 md:ml-6 xl:ml-14   h-[2px] bg-green-200'></div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center md:mb-[3rem] mb-[1.5rem]'>
                    <div className='flex justify-start w-[80%] md:mt-[5rem] mt-[2rem] '>
                        <h2 className='text-[6vw] md:text-[2vw] xl:text-[1.5vw] text-[#39546C] font-[700] flex justify-end'>Tälimçiler</h2>
                    </div>
                </div>
                <ul className='justify-center flex'>
                    <div className='flex items-center'>
                        <img src='./img/left-arrow.png' ref={navigationPrevRef} className='md:w-[2vw] md:h-[2vw] w-[7vw] ml-3 h-[7vw]' />
                    </div>
                    <div className='md:w-[80%] w-[85%]'>
                        <Swiper
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                1000: {
                                    slidesPerView: 3,
                                },
                                1400: {
                                    slidesPerView: 3,
                                },
                            }}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            loop={true}

                            spaceBetween={30}
                            className="mySwiper"

                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                            }}
                        >
                            {team_1.map((Team, i) => (
                                <SwiperSlide key={i}>
                                    <div className='justify-center flex'>
                                        <li className='md:w-[25vw] w-[90%]'>
                                            <img src={Team.img} className='md:w-full md:h-[30vw] h-[100vw] object-cover' />
                                            <div className='md:mt-[1.5rem] mt-[1rem] flex items-center justify-between mb-4'>
                                                <div className='ml-2'>
                                                    <p className='md:text-[1.5vw] font-[700] text-[#39546C] text-[6vw]'>{Team.title}</p>
                                                    <p className='md:mt-[1rem] md:text-[1.2vw] text-[4vw] font-[600] mt-[.5rem] '>{Team.title1}</p>
                                                </div>
                                                <h2 className='text-[#39546C] font-bold md:text-[4vw] text-[15vw]'>{Team.num}</h2>
                                            </div>
                                        </li>
                                    </div>
                                </SwiperSlide>
                            ))}





                        </Swiper>
                    </div>
                    <div className='flex items-center'>
                        <img src='./img/right.png' ref={navigationNextRef} className='md:w-[2vw] md:h-[2vw] mr-3 w-[7vw] h-[7vw]' />
                    </div>
                </ul>
            </div>


            <div>
                <div className='flex justify-center md:mb-[3rem] mb-[1.5rem]'>
                    <div className='flex justify-start w-[80%] md:mt-[5rem] mt-[2rem] '>
                        <h2 className='text-[6vw] md:text-[2vw] xl:text-[1.5vw] text-[#39546C] select-none font-[700] flex justify-end'>Biziň Oýunçylarmyz</h2>
                    </div>
                </div>
            </div>
            <div>
                <ul className='justify-center flex'>
                    <div className='flex items-center'>
                        <img ref={navigationPrevRef1} src='./img/left-arrow.png' className='md:w-[2vw] cursor-pointer md:h-[2vw] w-[7vw] h-[7vw]' />
                    </div>
                    <div className='md:w-[80%] w-[85%]'>
                        <Swiper
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                1000: {
                                    slidesPerView: 3,
                                },
                                1400: {
                                    slidesPerView: 3,
                                },
                            }}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: navigationPrevRef1.current,
                                nextEl: navigationNextRef1.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef1.current;
                                swiper.params.navigation.nextEl = navigationNextRef1.current;
                            }}

                            loop={true}
                            spaceBetween={30}
                            className="mySwiper"

                            modules={[Navigation, Autoplay]}
                        >
                            {team.map((Team, i) => (
                                <SwiperSlide key={i}>
                                    <div className='justify-center flex'>
                                        <li className='md:w-[25vw] w-[90%]'>
                                            <img src={Team.img} className='md:w-full md:h-[30vw] h-[100vw] object-cover' />
                                            <div className='md:mt-[1.5rem] mt-[1rem] flex items-center justify-between mb-4'>
                                                <div className='ml-2'>
                                                    <p className='md:text-[1.5vw] font-[700] text-[#39546C] text-[6vw]'>{Team.title}</p>
                                                    <p className='md:mt-[1rem] md:text-[1.2vw] text-[4vw] font-[600] mt-[.5rem] '>{Team.title1}</p>
                                                </div>
                                                <h2 className='text-[#39546C] font-bold md:text-[4vw] text-[15vw]'>{Team.num}</h2>
                                            </div>
                                        </li>
                                    </div>
                                </SwiperSlide>
                            ))}


                        </Swiper>

                    </div>
                    <div className='flex items-center'>
                        <img ref={navigationNextRef1} src='./img/right.png' className='md:w-[2vw] cursor-pointer md:h-[2vw] w-[7vw] h-[7vw] ' />
                    </div>
                </ul>



            </div>


        </div>
    )
}

export default Teams
