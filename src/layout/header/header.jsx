import React from 'react'
import { Logo } from '../../assets/icons/logo'
import { SelectCategory } from './components/searchbar/searchbar'
import { SelectLang } from './components/selectLang'
import { LoginButton } from './components/login-button'
import { links } from '../../data/links'

export const Header = () => {
  return (
    <header>
      <div className='py-[21px]'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <a href="#">
              <Logo />
            </a>
            <SelectCategory />
            <div className='flex items-center gap-[44px]'>
              <SelectLang />
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
      <div className='py-[10px] border border-grey border-l-0 border-r-0 mb-4'>
        <div className="container">
          <ul className='flex items-center gap-[20px]'>
            {links.map((item, index) => <li key={index}>
              <a className=' font-semibold text-primary' href="#">{item.name}</a>
            </li>)}
          </ul>
        </div>
      </div>
    </header>
  )
}
