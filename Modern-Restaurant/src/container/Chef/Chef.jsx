import React from 'react'
import { paddingScreen } from '../../styles'
import chef from '../../assets/chef.png'
import quote from '../../assets/quote.png'
import spoon from '../../assets/spoon.png'
import permanship from '../../assets/sign.png'
const Chef = () => {
    return (
        <section className={`${paddingScreen}  pt-[62px] px-[1.5rem] pb-[2rem]`}>
            <div className='lg:flex lg:gap-[4rem] items-center justify-center'>
                <div className='my-[4rem]'>
                    <img className='w-[max-content]' src={chef} alt="chef" />
                </div>
                <div>
                    <div className='my-[2rem]'>
                        <h4 className='font-cormorant text-[1.2rem] font-bold ss:text-[1.5rem]'>Chef’s Word</h4>
                        <img src={spoon} alt="spoon" />
                    </div>
                    <div>
                        <h1 className='text-golden font-cormorant text-[3rem] leading-[70px] font-bold my-[3rem] ss:text-[4rem]'>What we believe in</h1>
                    </div>

                    <div className='my-[2.5rem]'>
                        <div className='flex gap-[10px]'>
                            <img className='w-[35px] h-[35px]' src={quote} alt="quote" />
                            <p className='font-alt leading-[28px] text-[1.2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                        </div>
                        <div>
                            <p className='font-alt leading-[28px] ss:text-[1.2rem]'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                        </div>
                    </div>

                    <div className='my-[4rem]'>
                        <h2 className='font-cormorant text-[2.2rem] text-golden leading-[41px]'>Kevin Lou</h2>
                        <span className='font-alt sm:text-[1.1rem]'>Chef & Founder</span>
                    </div>
                    <div>
                        <img className='w-[250px]' src={permanship} alt="permanship" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Chef
