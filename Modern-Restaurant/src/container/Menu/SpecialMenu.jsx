import React from 'react'
import spoon from '../../assets/spoon.png'
import { data } from '../../constants'
import Menu from '../../components/Menu'
import menu from '../../assets/menu.png'
import { paddingScreen } from '../../styles'
import Button from '../../components/Button'

const SpecialMenu = () => {
    return (
        <section id='menu' className={`${paddingScreen}  pt-[62px] px-[1.5rem] pb-[2rem]`}>
            <div className='main-div'>
                <div>
                    <div className='flex flex-col items-center gap-[0.5rem]'>
                        <p className='font-cormorant text-[1.5rem] font-[600] lg:text-[2rem]'>Menu that fits your palatte</p>
                        <img className='w-[max-content]' src={spoon} alt="" />
                    </div>
                    <h1 className='text-golden font-cormorant text-[4rem] text-center my-[2rem] md:font-bold md:text-[4.5rem]'> Today's Special</h1>
                </div>

                <div className='lg:flex items-center justify-center gap-[4rem]'>
                    <div className='wine-beer-container'>
                        <div className='text-center mb-[4rem]'>
                            <h2 className='font-[600] font-cormorant text-[2.5rem]'>Wine & Beer</h2>
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            {
                                data.wines.map((wine, index) => {
                                    return (
                                        <Menu key={index} title={wine.title} price={wine.price} tag={wine.tags} />
                                    )
                                })
                            }
                        </div>
                    </div>


                    <div className='my-[5rem] flex justify-center items-center'>
                        <img className='ss:w-[410px]' src={menu} alt="" />
                    </div>

                    <div>
                        <h3 className='font-[600] font-cormorant text-[2.5rem] text-center mb-[2rem]'>Cocktails</h3>
                        <div className='flex flex-col gap-[20px]'>
                            {
                                data.cocktails.map((cocktail, index) => {
                                    return (
                                        <Menu key={index} title={cocktail.title} price={cocktail.price} tag={cocktail.tags} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center mt-[4rem]'>
                    <Button name='No More' />
                </div>
            </div>
            
        </section>
    )
}

export default SpecialMenu
