import React from 'react'

export const CategoriesItem = ({title, img}) => {
  return (
    <div className='w-[200px] h-[164px] rounded-xl overflow-hidden relative flex items-end pb-4 pl-4 pr-4'>
        <img className=' absolute top-0 bottom-0 left-0 right-0 -z-10 ' src={img} alt={title} />
        <h3 className=' z-10 font-semibold text-white text-l '>{title}</h3>
    </div>
  )
}
