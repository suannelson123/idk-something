import React from 'react'
import images from '../../constants/images'
import spoon from '../../assets/spoon.svg'
import { paddingScreen } from '../../styles'
import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs'
const FooterLinks = () => {
    return (
        <section className={`${paddingScreen} pt-[62px] md:pt-[100px] px-[1.5rem]`}>
            <div>
                <div className='flex flex-col gap-20 md:flex-row lg:flex-1 '>
                    <div className='MAIN DIV flex flex-col gap-5 items-center '>
                        <h2 className='text-golden font-cormorant text-[2rem] sm:text-[3rem]'>ContactUs</h2>
                        <p className='sm:text-[1.2rem]'>9 W 53rd St, New York, NY 10019, USA</p>
                        <span className='leading-[32px] text-[1.2rem]'>+1 212-344-1230 <br />+1 212-555-1230</span>
                    </div>


                    <div className='SECONDARY DIV lg:flex-1'>
                        <div className='flex flex-col items-center'>
                            <img className='w-[210px] sm:w-[250px]' src={images
                                .gericht
                            } alt="" />
                            <p className='text-center leading-[32px] mb-5 sm:text-[1.2rem]'>"The best way to find yourself is to lose yourself in the service of others."</p>
                            <div className='flex gap-5 flex-col items-center'>
                                <div><img className='sm:w-[50px]' src={spoon} alt="" /></div>
                                <div className='flex gap-5'>
                                    <BsFacebook className=' hover:fill-golden cursor-pointer transition-colors' size={30} />
                                    <BsTwitterX className=' hover:fill-golden cursor-pointer transition-colors' size={30} />
                                    <BsInstagram className=' hover:fill-golden cursor-pointer transition-colors' size={30} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='THIRD DIV flex flex-col items-center gap-5 mb-[2rem] lg:flex-1'>
                        <div>
                            <h3 className='text-golden font-cormorant text-[2rem] sm:text-[3rem]'>Working Hours</h3>
                        </div>
                        <p className='text-center leading-[2rem] sm:text-[1.2rem]'>Monday-Friday: <br />08:00 am - 12:00 am</p>
                        <span className='text-center leading-[2rem] sm:text-[1.2rem]'>Saturday-Sunday: <br />07:00 am - 11:00 pm</span>
                    </div>
                </div>
                <div className='p-[2rem]'>
                    <p className='text-center sm:text-[1.2rem]'>{new Date().getFullYear()} Gericht. All Rights reserved</p>
                </div>
            </div>
        </section>
    )
}

export default FooterLinks
