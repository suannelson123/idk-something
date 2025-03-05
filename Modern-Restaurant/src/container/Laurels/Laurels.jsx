import React from 'react'
import { paddingScreen } from '../../styles'
import laurels from '../../assets/laurels.png'
import spoon from '../../assets/spoon.svg'
import { data } from '../../constants'
const Laurels = () => {
    return (
        <section id='awards' className={`${paddingScreen} pt-[62px] md:pt-[100px] px-[1.5rem] mb-[4rem]`}>
            <div className='md:flex'>
                <div className='flex flex-col gap-[2rem] pb-[4rem] flex-1 lg:pb-0'>
                    <div className='flex flex-col gap-[0.3rem]'>
                        <h4 className='font-[500] font-cormorant text-[1.2rem] md:text-[1.5rem]'>Awards & recognition</h4>
                        <img className='w-[45px]' src={spoon} alt="spoon" />
                    </div>

                    <div className='mb-[3rem] md:mb-0'>
                        <h1 className='max-w-[max-content] border-b-[1px] border-crimson font-[600] font-cormorant text-golden text-[2.8rem] md:text-[4rem]'>Our Laurels</h1>
                    </div>
                    <div className='flex flex-col gap-[2.5rem]'>
                        {
                            data.awards.map((award, index) => {
                                return (
                                    <div className='flex gap-[20px]' key={index}>
                                        <img className='w-[50px] h-[50px] self-center' src={award.imgUrl} alt="" />
                                        <div>
                                            <h3 className='text-golden font-cormorant text-[1.5rem]'>{award.title}</h3>
                                            <p className='leading-[2rem]'>{award.subtitle}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex-1 self-center'>
                    <img className='max-h-[600px]' src={laurels} alt="Laurels" />
                </div>

            </div>
        </section>
    )
}

export default Laurels
