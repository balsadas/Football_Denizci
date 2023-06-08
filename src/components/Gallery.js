import React from 'react'

function Gallery() {
    return (
        <div className='pb-[3rem] bg-[#f5f7f7e8]' id='Gallery'>
            <div className='flex justify-center'>
                <div className='my-[2rem] w-[85%]'>
                    <h2 className='text-[6vw] md:text-[3vw] xl:text-[2vw] font-[600]'>Gallery</h2>
                    <div className='md:w-[5%] w-[15%]  h-[2px] bg-green-200'></div>
                </div>
            </div>
            <div className='justify-center flex'>
                <div className='md:w-[80%] w-[80%]'>
                    <h2 className='md:text-[1.5vw] text-[5vw] font-[500] text-[#39546C]'>
                        Featured team photos
                    </h2>
                    <div className='md:mt-5 mt-3 md:flex '>
                        <img src='./img/play1.jpg' className='md:w-[30vw] md:h-[25vw] object-cover ' />
                       
                            <img src='./img/play2.jpg' className='md:w-[46vw] md:ml-[4rem] md:h-[25vw] h-[90vw] object-cover ' />
                        
                    </div>
                    <div className='md:mt-10 md:flex justify-center'>
                        <img src='./img/play1.jpg' className='md:w-[46vw] mt-3  md:h-[25vw] object-cover ' />

                        <img src='./img/play2.jpg' className='md:w-[30vw] mt-3 md:ml-[4rem] md:h-[25vw] h-[90vw] object-cover ' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery
