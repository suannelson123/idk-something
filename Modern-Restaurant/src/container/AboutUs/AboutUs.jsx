import React from 'react'
import { paddingScreen } from '../../styles'
import G from '../../assets/G.png'
import knife from '../../assets/knife.png'
import spoon from '../../assets/spoon.png'
import Button from '../../components/Button'

const AboutUs = () => {
    return (
        <section id='about' className={`${paddingScreen} pt-[62px] px-[1.5rem] mb-[4rem]`}>
            <div className='md:flex items-center relative justify-center gap-[2rem]'>
                <div className='bg-image hidden md:block'></div>
                <div className='flex flex-col items-end'>
                    <h1 className='font-cormorant text-[45px] leading-[70px] text-golden sm:text-[4rem]'>About Us</h1>
                    <img className='w-[45px]' src={spoon} alt="spoon" />

                    <p className='text-grey text-right my-[2rem] leading-[28px] max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <Button name='No More' />
                </div>

                <div className='grid grid-cols-1 my-[2rem] md:px-[20px]'>
                    <img className='col-span-full row-span-full justify-self-center self-center w-[100%] max-w-[500px] h-[auto] md:hidden' src={G} alt="G" />
                    <img className='h-[900px] col-span-full row-span-full justify-self-center self-center' src={knife} alt="knife" />
                </div>

                <div>
                    <h1 className='font-cormorant text-[45px] leading-[70px] text-golden sm:text-[4rem]'>Our History</h1>
                    <img src={spoon} alt="spoon" />
                    <p className='text-grey my-[2rem] leading-[28px] max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <Button name='No More' />
                </div>
            </div>
        </section>
    )
}

export default AboutUs
