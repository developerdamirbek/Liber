import React from 'react'
import { GooglePlay } from '../../assets/icons/google-play'
import { AppStore } from '../../assets/icons/appStore'
import { FacebookIcon } from '../../assets/icons/facebook-icon'
import { YoutubeIcon } from '../../assets/icons/youtube-icon'
import { TiktokIcon } from '../../assets/icons/tiktok-icon'
import { TelegramIcon } from '../../assets/icons/telegram-icon'
import { InstagramIcon } from '../../assets/icons/instagram-icon'
import {UzcardIcon} from '../../assets/icons/uzcard-icon'
import {HumoIcon} from '../../assets/icons/humo-icon'
import {PaymeIcon} from '../../assets/icons/payme-icon'

export const Footer = () => {
  return (
    <footer>
      <div className='bg-primary-soft pb-[63px] pt-[31px]'>
        <div className='container'>
          <div className='flex items-start justify-between'>
            <div>
              <p className='text-dark-purple text-[20px] font-bold mb-4'>Платформа хақида</p>
              <ul className='flex flex-col gap-[18px]'>
                <li>Liber ўзи нима?</li>
                <li>Фойдаланиш шартлари</li>
                <li>Ёрдам</li>
              </ul>
            </div>
            <div>
              <p className='text-dark-purple text-[20px] font-bold mb-4'>Обуна хақида</p>
              <ul className='flex flex-col gap-[18px]'>
                <li>Liber ўзи нима?</li>
                <li>Фойдаланиш шартлари</li>
                <li>Ёрдам</li>
              </ul>
            </div>
            <div>
              <p className='text-dark-purple text-[20px] font-bold mb-4'>Китоблар</p>
              <ul className='flex flex-col gap-[18px]'>
                <li>Liber ўзи нима?</li>
                <li>Фойдаланиш шартлари</li>
                <li>Ёрдам</li>
              </ul>
            </div>
            <div>
              <p className='text-dark-purple text-[20px] font-bold mb-4'>Мобил илова</p>
              <div className='flex flex-col gap-4'>
                <div>
                  <GooglePlay />
                </div>
                <div>
                  <AppStore />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#10182C] pt-3 pb-8 '>
        <div className="container">
          <div className='flex items-start gap-[120px]'>
            <div>
              <p className='text-white mb-3'>Ижтимоий тармоқлар</p>
              <div className='flex items-center gap-6'>
                <div>
                  <FacebookIcon/>
                </div>
                <div>
                  <YoutubeIcon/>
                </div>
                <div>
                  <TiktokIcon/>
                </div>
                <div>
                  <TelegramIcon/>
                </div>
                <div>
                  <InstagramIcon/>
                </div>
              </div>
            </div>
            <div>
              <p className=' text-white mb-3 '>Боғланиш</p>
              <div className='flex items-center gap-6'>
                <a className='font-light text-white' href="">+998 90 253 77 53</a>
                <a className='font-light text-white' href="">support@liber.uz</a>
              </div>
            </div>
            <div>
            <p className=' text-white mb-3 '>Биз қабул қиламиз</p>
            <div className=' flex items-center gap-2 '>
              <div>
                <UzcardIcon/>
              </div>
              <div>
                <HumoIcon/>
              </div>
              <div>
                <PaymeIcon/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
