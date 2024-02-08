import React from 'react'
import { services } from '../../data/services'
import { ServiceCard } from '../servicesCard/service-card'

export const Services = () => {
  return (
    <div className='container'>
      <div className='flex items-center justify-between mb-10'>
        {services.map((item) => <ServiceCard icon={item.icon} key={item.id} title={item.title} text={item.text}/>)}
      </div>
    </div>
  )
}
