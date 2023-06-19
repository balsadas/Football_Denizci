import React from 'react'


function AboutUs() {

    return (
        <div className='bg-[#f5f7f7e8]' id='AboutUs'>
            <div className='flex justify-center '>
                <div className='py-[2rem] w-[85%]'>
                    <h2 className='text-[6vw] md:text-[3vw] select-none xl:text-[2vw] font-[600]'>Biz barada</h2>
                    <div className='md:w-[10%] w-[20%] xl:w-[7%] h-[2px] bg-green-200'></div>
                </div>
            </div>
            <div className='flex justify-center md:py-[2rem] group'>
                <div className='w-[80%] md:grid md:grid-cols-2 flex flex-col-reverse'>
                    <img src='./img/img1.jpg'
                        className='md:w-[85%] md:h-[26vw] h-[60vw] md:mt-0 mt-5 xl:h-[23vw] object-contain ' />
                    <div
                        className='items-center flex justify-end'>
                        <div>
                            <h2 className='md:text-[2.5vw]  group-hover:text-green-600 text-[5.5vw]  xl:text-[2vw] font-[500] flex justify-end select-none w-[95%]'>
                                Biz kim
                            </h2>
                            <p className='md:text-[1.1vw] md:mt-6  mt-3 select-none text-[3.2vw] group-hover:text-green-600 xl:text-[1vw] text-justify'>
                               Deňizçi futzal topary Türkmenistanyň Naýbaşy futzal ligasyna gatnaşýar. Biziň toparymyz Türkmenistanyň futbol Federasiýasynyň çleni bolup durýar.Denizçi futzal toparynyň ýetginjekler topary hem bardyr.Toparymyz Balkan welaýatynyň hem çempionatyna gatnaşyp öňdäki orunlary eýeleýändir.Denizçi futzal toparynyň baş tälimçisi 
                               Türkmenistanyň milli ýygyndysynyň hem baş tälimçisidir we kömekçi tälimçileri hem milli ýygyndyda işleýändir. 
                               Toparymyz her ýylda 4 gezek taýýarlyk okuw türgenleşiklerine girýändir we çempionata gatnaşýar.Hepdäniň 6 güni toparymyz türgenleşik geçýändir. Toparymyzda jemi 13 sany türgen bolup olar Türkmenistanyň milli ýygyndysynyň türgenleri bolup durýar. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
