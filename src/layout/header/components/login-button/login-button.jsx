import React from 'react'
import {UserIcon} from '../../../../assets/icons/user-icon'

export const LoginButton = () => {
  return (
    <button className=' text-white bg-primary rounded-lg flex items-center gap-[12px] px-[24px] py-[12px]'>
        <UserIcon/> Кириш
    </button>
  )
}
