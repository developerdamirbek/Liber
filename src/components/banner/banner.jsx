import React from 'react'
import bgImg from '../../assets/images/banner-ng.svg'
import cardImg1 from '../../assets/images/book1.png'
import cardImg2 from '../../assets/images/book2.png'
import cardImg3 from '../../assets/images/book3.png'
import adsBg from '../../assets/images/ads-bg.png'

import { PrevIcon } from '../../assets/icons/prev-icon'
import { NextIcon } from '../../assets/icons/next-icon'
import { HeartIcon } from '../../assets/icons/heart-icon'

export const Banner = () => {
  return (
    <div className='container'>
      <div className=' w-[100%] flex justify-between mb-[56px]'>
        <div className=' relative bg-primary-soft pt-8 pl-8 pr-16 pb-4 rounded-xl w-[1005px] h-[351px] overflow-hidden flex justify-between '>
          
          <div>
            <h3 className=' font-bold mb-5 '>Кўп ўқилаётганлар</h3>
            <img className='absolute bottom-[-350px] left-[-10px]' src={bgImg} alt="" />
          </div>
          <div className='flex items-center gap-4 relative '>
          <button className='absolute left-[-50px] top-[50%] translate-y-[-120%] cursor-pointer'>
            <PrevIcon />
          </button>
          <button className='absolute top-[50%] translate-y-[-120%] right-[-50px] '>
            <NextIcon />
          </button>
            <div className=' text-center '>
              <img className='w-[190px] h-[267px] mb-4 ' src={cardImg1} alt="" />
              <p className='text-text-color'>1984</p>
            </div>
            <div className=' text-center '>
              <img className='w-[190px] h-[267px] mb-4 ' src={cardImg2} alt="" />
              <p className='text-text-color'>Rich dad poor dad</p>
            </div>
            <div className=' text-center '>
              <img className='w-[190px] h-[267px] mb-4 ' src={cardImg3} alt="" />
              <p className='text-text-color'>Code 8</p>
            </div>
          </div>
        </div>
        <div className='relative w-[261px] h-[351px] overflow-hidden py-8 px-6  '>
          <img className=' absolute top-0 left-0 right-0 bottom-0 z-[-1]' src={adsBg} alt="" />
          <h3 className=' z-10 font-bold text-white mb-5 text-2xl '>Китоб ўқишни ёқтирасизми?</h3>
          <p className='z-10 font-normal text-white mb-[77px] '>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
          <button className='flex items-center justify-center gap-2 w-[100%] bg-white rounded-2xl py-2 px-6 '>
            <HeartIcon/>Обуна бўлиш
          </button>
        </div>
      </div>
    </div>
  )
}
