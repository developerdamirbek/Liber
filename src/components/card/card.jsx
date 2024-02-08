import React from 'react'
import { RateIcon } from '../../assets/icons/rate-icon'
import { HeadphoneIcon } from '../../assets/icons/headphone-icon'
import { BookIcon } from '../../assets/icons/book-icon'

export const Card = ({ img, title, text, rating }) => {
    return (
        <div className=' w-[239px]  '>
            <div className=' rounded-xl overflow-hidden mb-[18px] '>
                <img className=' object-cover ' src={img} alt={title} />
            </div>
            <h3 className=' font-bold text-[20px] text-dark-purple '>{title}</h3>
            <p className=' text-primary font-normal text-[14px] mb-[16px] '>{text}</p>
            <div className=' flex items-center justify-between '>
                <div className=' flex items-center gap-[12px] '>
                    <RateIcon /> <span className='text-secondary font-bold'>{rating}</span>
                </div>
                <div className=' flex items-center gap-[21px] '>
                    <HeadphoneIcon />
                    <BookIcon />
                </div>
            </div>
        </div>
    )
}
