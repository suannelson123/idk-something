import React from 'react'
import spoon from '../../assets/spoon.png'
import welcome from '../../assets/welcome.png'
import Button from '../../components/Button'
import { paddingScreen } from '../../styles'
function Header() {
    return (
        <section id='home' className={`${paddingScreen} pt-[62px] md:pt-[100px] px-[1.5rem]`}>
            <div className='lg:flex justify-between'>
                <div className='my-[4rem] text-wrap lg:flex-1'>
                    <div className='py-[2rem] lg:py-0'>
                        <p className='font-cormorant my-[0.5rem] text-[1.2rem] sm:text-[1.5rem] '>Chase The New Flavour</p>
                        <img src={spoon} alt="" />
                    </div>
                    <h1 className='font-cormorant text-[4rem] my-[2rem] font-[900] sm:text-[6rem] text-golden'>The Key to <br className='hidden ss:block' /> Find Dining</h1>
                    <p className='font-base leading-[32px] my-[2.5rem] sm:text-[1.2rem] max-w-[700px]'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
                    <Button name='Explore Menu' />
                </div>

                <div className='flex items-center justify-center lg:flex-1'>
                    <img className='max-w-[500px] w-[100%] h-[auto]' src={welcome} alt="welcome" />
                </div>
            </div>
        </section>
    )
}

export default Header
