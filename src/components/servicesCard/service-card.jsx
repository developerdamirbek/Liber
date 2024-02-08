import React from 'react'

export const ServiceCard = ({title, text, icon: Icon}) => {
  return (
    <div className=' max-w-[322px] flex items-center justify-between py-6 px-3 gap-5 '>
      <div className=''>
        {Icon && <Icon/>}
      </div>
      <div className=' flex flex-col gap-2 '>
        <h3 className=' font-bold text-sm '>{title}</h3>
        <p className=' font-normal text-grey text-[12px] font-openSans '>{text}</p>
      </div>
    </div>
  )
}
