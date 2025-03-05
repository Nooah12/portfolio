import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <footer className='mt-4'>
{/*         <div className='text-center'>
            <Image src={isDarkMode ? '/noah-logo-darkk-removebg.png' : '/noah-logo-removebg.png'} alt='' className="w-36 mx-auto cursor-pointer mb-2 bg-transparent" width={500} height={200}/>
        </div>  */}
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>
                <span className='text-gray-400'>© 2025 Noah Gordon</span>
            </p>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                noah.gordon@edu.cmeducations.se
            </div>
            <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/Nooah12">Github</a></li>
                <li><a target='_blank' href="https://linkedin.com/in/noah-gordon12/">LinkedIn</a></li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer