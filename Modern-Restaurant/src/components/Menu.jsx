import React from 'react'

const Menu = ({ title, price, tag }) => {
    return (
        <div>
            <div className='flex justify-around items-center'>
                <div className='flex flex-col items-start flex-grow basis-[50%]'>
                    <h2 className='font-cormorant text-golden text-[1.2rem] sm:text-[1.5rem]'>{title}</h2>
                </div>
                <div className='border-b-2 border-dotted border-golden group-hover:border-golden flex-grow'></div>
                <span className='ml-[1.5rem] sm:text-[1.5rem] font-cormorant font-semibold'>{price}</span>
            </div>
            <div>
                <p className='font-[100] text-slate-300'>{tag}</p>
            </div>
        </div>
    )
}

export default Menu
