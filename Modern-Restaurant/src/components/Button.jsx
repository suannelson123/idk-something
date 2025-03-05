import React from 'react'

const Button = ({ name, className }) => {
    return (
        <div className={className}>
            <button type='button' className='bg-[var(--color-crimson)] font-cormorant text-[var(--color-black)] px-[1.5rem] py-[0.5rem] font-[700] leading-[1.8rem] outline-none rounded-sm border-none'>
                {name}
            </button>
        </div>
    )
}

export default Button
