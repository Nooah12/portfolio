import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "58199eac-cdd1-4c07-8306-87aefad11d41");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 contact-bg dark:!bg-none'>
        <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'>Connect with me</motion.h4>

        <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>

        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            If you found me even slightly interesting, don't hesitate to reach out! :-) <br></br>I'll get back to you as soon as possible.
        </motion.p>

        <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                name='name' type="text" placeholder='Your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                dark:bg-darkHover/30 dark:border-white/90' />
                <motion.input 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                name='email' type="text" placeholder='Your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                dark:bg-darkHover/30 dark:border-white/90' />
            </div>

            <motion.textarea 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            name="message" id="" rows='6' placeholder='Your message' className='w-full p-4 mb-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
            dark:bg-darkHover/30 dark:border-white/90'></motion.textarea>

            <motion.button 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type='submit' className='px-8 py-3 border border-gray-400 rounded-full bg-black/80 text-white flex items-center gap-2 mx-auto 
            hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>
                Send message <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </motion.button>  

            <p className='mt-4'>{result}</p>
        </motion.form>
        
    </motion.section>
  )
}

export default Contact