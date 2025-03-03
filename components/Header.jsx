import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            {/* <Image src={"/profilbild.jpg"} alt='' className='rounded-full w-32' width={128} height={128} /> */}
        </div>
        <h3 className='flex items-end text-xl md:text-2xl mb-3 gap-2 font-Ovo'>
            Hi! I'm Noah <Image src={assets.hand_icon} alt='' className='w-6' /> 
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>frontend developer student</h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            I'm a frontend developer student with a passion for creating intuitive, and dynamic user interfaces. 
            I'm a quick learner and I'm always looking to expand my knowledge and skill set. 
            I'm a team player and I'm excited to work alongside other developers and designers to create amazing applications. 
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /> 
            </a>
            <a href="/CV_LIA25.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                my resume <Image src={assets.download_icon} alt='' className='w-4' /> 
            </a>
        </div>
    </div>
  )
}

export default Header