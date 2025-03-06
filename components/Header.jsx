import { assets, linkIcons } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Header = ({isDarkMode}) => {
  return (
    <motion.section className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
            <Image src={"/profilbild-square.jpg"} alt='' className='rounded-full w-32' width={128} height={128} />
        </motion.div>

        <motion.h3 className='flex items-end text-xl md:text-2xl mb-3 gap-2 font-Ovo'
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            Hello, World! I'ts me, Noah <motion.div
                    animate={{ rotate: [0, 15, -15, 15, 0] }}
                    transition={{ 
                        duration: 0.5, 
                        repeat: Infinity, 
                        repeatDelay: 1.5,
                        ease: "easeInOut" 
                    }}
            ><Image src={assets.hand_icon} alt='' className='w-6' /></motion.div>
        </motion.h3>

        <motion.h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >frontend developer based in Stockholm</motion.h1>

        <motion.p className='max-w-2xl mx-auto font-Ovo'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}>
            I like making websites and apps that are both <span className='text-gray-700 dark:text-white'>functional</span> and <span className='text-gray-700 dark:text-white'>beautiful</span>.
            Hej! Jag heter Noah och är frontendutvecklare med fokus på React och Next.js. Just nu söker jag praktik (LIA) våren 2025. Kolla gärna in mina projekt!
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
{/*             <motion.a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}>
                contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /> 
            </motion.a> */}
            
            <motion.a href="/CV_LIA25.pdf" download className='px-10 py-3 border rounded-full text-gray-700 border-gray-500 flex items-center gap-2
            hover:bg-lightHover duration-500 dark:text-black dark:border-white dark:hover:bg-darkHover bg-white dark:hover:text-white group'
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}>
                my resume <Image src={assets.download_icon} alt='resume' className='w-4 dark:group-hover:filter dark:group-hover:brightness-0 dark:group-hover:invert' /> 
            </motion.a>
            <div className='flex flex-row gap-4'>
            {linkIcons.map((icon, iconDark, index) => (
                <motion.a href={icon.link} key={index}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className='group'>
                        <Image src={isDarkMode ? icon.iconDark : icon.icon} alt='link-icons' className='w-11'/>
                </motion.a>
            ))}
            </div>
        </div>
    </motion.section>
  )
}

export default Header