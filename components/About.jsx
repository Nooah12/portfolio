import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import {motion} from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.section id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{ opacity: 1, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        >About me</motion.h4>

        <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        >Introduction</motion.h2>

        <motion.div className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        >
{/*             <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6}}
            >
                <Image src={"/presentation-examens.JPG"} alt='user' className='rounded-3xl w-full' width={500} height={600} />
            </motion.div> */}

            {/* ------------Text--------------- */}

            <motion.div className='flex-1 flex flex-col items-center'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <p className='mb-10 max-w-2xl font-Ovo'>
                Fully committed to the philosophy of lifelong learning, I’m a frontend developer student with a deep passion for JavaScript, Next, and all things web development. 
                The unique combination of creativity, logic thinking, and technology — along with the fact that there’s always something new to learn, keeps me excited and motivated. 
                <br></br>When I’m not at my computer I like to stay active by playing football or going to the gym, sometimes playing video games and hanging out with friends.
                </p>

                {/* ------------------ Cards --------------------- */}

                <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                >
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <motion.li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover'
                        whileHover={{ scale: 1.05 }}
                        >
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* ------------------- SKILLS  ------------------ */}

                <motion.h4 className='my-6 text-gray-700 font-Ovo dark:text-white/90'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                >Skills</motion.h4>

                <motion.ul className='flex flex-wrap items-center gap-3 sm:gap-5'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                >
                    {toolsData.map((tool, index)=>(
                        <motion.li key={index} 
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                        whileHover={{ scale: 1.1 }}
                        >
                            <Image src={tool} alt="tool" className='w-5 sm:w-7' />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default About