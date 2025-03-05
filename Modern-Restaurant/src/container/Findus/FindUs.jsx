import React from 'react'
import spoon from '../../assets/spoon.svg'
import { paddingScreen } from '../../styles'
import Button from '../../components/Button'
import { images } from '../../constants'
const FindUs = () => {
    return (
        <section id='contact' className={`${paddingScreen} pt-[62px] md:pt-[100px]  px-[1.5rem] pb-[2rem]`}>
            <div>
                <div className='lg:flex lg:items-center'>


                    <div className='flex flex-col gap-10 mb-[5rem] flex-1 lg:flex-1'>
                        <div>
                            <h3 className='font-cormorant text-[1.2rem] font-bold sm:text-[2rem]'>Contact</h3>
                            <img className='w-[max-content]' src={spoon} alt="spoon" />
                        </div>
                        <h1 className='text-[3rem] font-cormorant font-bold text-golden sm:text-[4rem]'>Find Us</h1>
                        <p className='sm:text-[1.2rem]'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                        <h4 className='text-golden font-bold font-cormorant text-[1.5rem] sm:text-[1.6rem]'>Opening Hours</h4>
                        <span className='leading-[32px] sm:text-[1.2rem]'>Mon - Fri: 10:00 am - 02:00 am
                            <br />
                            Sat - Sun: 10:00 am - 03:00 am
                        </span>
                        <Button name='Visit Us' />
                    </div>

                    <div className='lg:flex-1'>
                        <img className='max-w-[500px] w-full' src={images.findus} alt="findUs" />
                    </div>


                </div>
            </div>
        </section>
    )
}

export default FindUs
