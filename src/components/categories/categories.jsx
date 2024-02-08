import React from 'react'
import { categories } from '../../data/categories'
import { CategoriesItem } from '../categories-item/categories-item'

export const Categories = () => {
  return (
    <div className='container'>
        <h2 className='text-text-color text-3xl font-semibold mb-[32px]'>Рукнлар</h2>
        <div className='flex justify-between items-center mb-[64px] '>
            {categories.map((item) => <CategoriesItem key={item.id} img={item.img} title={item.title}/>)}
        </div>
    </div>
  )
}
