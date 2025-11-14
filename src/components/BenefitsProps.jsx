import React from 'react'

function BenefitsProps({ text, title }) {
    return (
        <div>
            <h1 className='text-[#262626] text-[40px] font-bold'>{text}</h1>
            <p className='w-[1177px] text-[18px] text-[#59595A]'>{title}</p>

        </div>
    )
}

export default BenefitsProps
