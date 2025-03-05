import React from 'react'
import { paddingScreen } from '../../styles'
import spoon from '../../assets/spoon.svg'
import Button from '../../components/Button'
const Footer = () => {
    return (
        <section className={`${paddingScreen} pt-[62px] md:pt-[100px] px-[1.5rem] bg-black`}>
            <div className='lg:flex justify-center'>
                <div className='sm:border-[1px] border-golden sm:p-[4rem] lg:basis-[75%]'>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-col gap-[0.3rem] items-center mb-[2rem]'>
                            <h2 className='font-cormorant text-[1.5rem] font-bold '>Newsletter</h2>
                            <img className='w-[max-content]' src={spoon} alt="spoon" />
                        </div>
                        <div className='text-center w-full'>
                            <h1 className='text-[3.5rem] font-cormorant font-bold text-golden sm:text-[4rem] sm:font-[900] lg:text-[5rem] '>Subscribe To<br className='xs:hidden sm:block md:hidden' />  Our Newsletter</h1>
                            <span className='font-light'>And Never Miss Latest Updates!</span>
                        </div>
                    </div>
                    <div className='mt-[4rem] flex flex-col gap-[2rem] pb-[2rem] md:flex-row'>
                        <input className='border-[1px] border-[var(--color-golden)] bg-transparent p-[1rem] rounded-[0.5rem] text-[1.2rem] outline-none md:flex-1' type="text" placeholder='Enter your Email Adress' />
                        <Button className='flex justify-center md:text-[1.2rem]' name='Subscribe' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
