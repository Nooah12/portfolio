import { assets, workData } from '@/assets/assets'
import { motion } from "motion/react"

const Projects = ({isDarkMode}) => {
  return (
    <motion.section id='project' className='py-10 scroll-mt-20'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
        <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='text-center text-5xl font-Ovo'>
            Projects
        </motion.h2>

        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            A selected collection of my recent work

        </motion.p>

        {/* ------------ Cards -------------- */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className='grid md:grid-cols-2 justify-center my-10 gap-8 mx-auto dark:text-black'
        >
            {workData.map((project, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className='flex flex-col rounded-lg overflow-hidden border border-gray-300 dark:border-white/20 shadow-lg
                    hover:shadow-2xl transition duration-300 bg-white dark:bg-darkTheme'
                >
                    {/* Project Image */}
                    <motion.div 
                        transition={{ duration: 0.3 }}
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        className='aspect-video bg-center bg-no-repeat bg-cover'
                    />
                    
                    {/* Project Info */}
                    <div className=' border-gray-400 py-3 px-5 flex flex-col gap-2 shadow-md'>
                        <div className='flex justify-between'>
                            <h2 className='font-semibold text-gray-700 dark:text-white'>{project.title}</h2>
                            <div className='flex gap-4 mt-2 justify-end'>
                                <a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='text-blue-600 text-sm hover:underline'>Demo</a>
                                <a href={project.githubUrl} target='_blank' rel='noopener noreferrer' className='text-gray-600 text-sm dark:text-white/80 hover:underline'>GitHub</a>
                            </div>
                        </div>
                        
                        <p className='text-sm text-gray-600 dark:text-white/80'>{project.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>




            {/* ------------ Button -------------*/}

        {/* <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20
            hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
                Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4'/>
        </motion.a> */}
    </motion.section>
  )
}

export default Projects