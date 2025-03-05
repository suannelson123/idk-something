import React, { useRef } from 'react'
import { paddingScreen } from '../../styles'
import spoon from '../../assets/spoon.svg'
import { gallery } from '../../constants/data'
import Button from '../../components/Button'
import { BsInstagram } from 'react-icons/bs'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

const Gallery = () => {

    const scrollRef = useRef()

    const scroll = (direction) => {
        direction === 'left' ? scrollRef.current.scrollLeft = scrollRef.current.scrollLeft -= 300 : scrollRef.current.scrollLeft = scrollRef.current.scrollLeft += 300

    }

    return (
        <section className={`${paddingScreen} pt-[62px] md:pt-[100px] px-[1.5rem] bg-[#0C0C0C] pb-[2rem]`}>
            <div className='lg:flex lg:items-center lg:gap-[2rem]'>
                <div className='lg:flex-1'>
                    <div className='flex flex-col gap-[0.3rem]'>
                        <h3 className='font-cormorant text-[1.2rem] sm:text-[1.7rem]'>Instagram </h3>
                        <span><img src={spoon} alt="spoon" /></span>
                    </div>
                    <div className='flex flex-col gap-[2rem]'>
                        <h1 className='text-[3rem] font-cormorant text-golden sm:text-[3.5rem] sm:font-[800]'>Photo Gallery</h1>
                        <p className='text-grey font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                        <Button className='mb-[4rem]' name='View More' />
                    </div>
                </div>

                <div className='lg:flex-1 hide-scroll relative w-[100%] overflow-scroll'>
                    <div className='flex overflow-scroll gap-[2rem] hide-scroll relative' ref={scrollRef}>

                        {
                            gallery.map((item, index) => {
                                return (
                                    <div key={index} className='relative'>
                                        <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:bg-zinc-900 hover:opacity-70 transition-all duration-300 flex items-center justify-center '><BsInstagram size={30} /></div>

                                        <img className='object-cover max-w-[100vw] h-[100%] last-of-type:max-w-[336px]' src={item.imgUrl} alt={`gallery${index}`} />

                                    </div>
                                )
                            })
                        }

                    </div>
                    <div onClick={() => scroll('left')} className='active:bg-[#242424] p-4 absolute bottom-10 left-5 z-20 bg-black rounded-2xl cursor-pointer'>
                        <BiLeftArrowAlt size={30} />
                    </div>
                    <div onClick={() => scroll('right')} className='active:bg-[#242424]  p-4 absolute bottom-10 right-5 bg-black rounded-2xl cursor-pointer'>
                        <BiRightArrowAlt size={30} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Gallery
