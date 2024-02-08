import React from 'react'
import { books } from '../../data/books'
import { Card } from '../card'
import { LeftArrow } from '../../assets/icons/left-arrow'
import { RightArrow } from '../../assets/icons/right-arrow'

export const Newbooks = () => {
    return (
        <div className=' mb-[64px]'>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <h2 className=' font-semibold text-text-color text-[32px] mb-[32px] '>Янги қўшилганлар</h2>
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
                    {books.map((item) => <Card key={item.id} img={item.img} rating={item.rating} text={item.text} title={item.title} />)}
                </div>
            </div>
        </div>
    )
}
