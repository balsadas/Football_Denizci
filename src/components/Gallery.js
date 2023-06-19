import React from 'react'

function Gallery() {
    return (
        <div className='pb-[3rem] bg-[#f5f7f7e8]' id='Gallery'>
            <div className='flex justify-center pt-[3rem] md:pt-[5rem]'>
                <div className='w-[85%] md:w-[90%] ' >
                    <h2
                        className='text-[6vw] md:text-[2vw]  select-none  font-[600] flex justify-start md:justify-end'>Pursatlar</h2>

                    <div className='flex md:justify-end'>
                        <div className='md:w-[7%]   w-[20%] ml-1 md:ml-6 xl:ml-14   h-[2px] bg-green-200'></div>
                    </div>
                </div>
            </div>
            <div className='justify-center flex'>
                <div className='md:w-[80%] w-[80%]'>
                    <h2 className='md:text-[1.5vw] text-[5vw] mt-[2rem] font-[500] text-[#39546C]'>
                        Aýratyn topar suratlary
                    </h2>
                    <div className='md:mt-5 mt-3 md:flex '>
                        <img src='./img/img4.jpg' className='md:w-[30vw] md:h-[25vw] object-cover ' />

                        <img src='./img/img5.jpg' className='md:w-[46vw] md:ml-[4rem] md:h-[25vw] h-[90vw] object-cover mt-3 md:mt-0' />

                    </div>
                    <div className='md:mt-10 md:flex justify-center'>
                        <img src='./img/img6.jpg' className='md:w-[46vw] mt-3  md:h-[25vw] object-cover ' />

                        <img src='./img/img7.jpg' className='md:w-[30vw] mt-3 md:ml-[4rem] md:h-[25vw] h-[90vw] object-cover ' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery
