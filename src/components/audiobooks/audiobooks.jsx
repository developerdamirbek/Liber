import React from 'react'
import { audioBooks } from '../../data/audioBooks'
import { LeftArrow } from '../../assets/icons/left-arrow'
import { RightArrow } from '../../assets/icons/right-arrow'
import { Card } from '../card'
export const Audiobooks = () => {
  return (
    <div className=' mb-[93px]'>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <h2 className=' font-semibold text-text-color text-[32px] mb-[32px] '>Аудио китоблар</h2>
                    <div className=' max-w-[196px] w-[100%] flex justify-between items-center '>
                        <div className='cursor-pointer'>
                            <LeftArrow/>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='w-[9px] h-[9px] rounded-[50%] inline-block bg-primary'></span>
                            <span className='w-[9px] h-[9px] rounded-[50%] inline-block bg-primary-soft'></span>
                            <span className='w-[9px] h-[9px] rounded-[50%] inline-block bg-primary-soft'></span>
                            <span className='w-[9px] h-[9px] rounded-[50%] inline-block bg-primary-soft'></span>
                        </div>
                        <div className='cursor-pointer'>
                            <RightArrow/>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-between '>
                    {audioBooks.map((item) => <Card key={item.id} img={item.img} rating={item.rating} text={item.text} title={item.title} />)}
                </div>
            </div>
        </div>
  )
}
