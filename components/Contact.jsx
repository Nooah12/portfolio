import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

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
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 contact-bg'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'd love to hear from you! Whether you have a question, want to work together, or just want to say hello, feel free to reach out to me through the form below.
        </p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto' action="">
            <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                <input name='name' type="text" placeholder='Your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                <input name='email' type="text" placeholder='Your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
            </div>
            <textarea name="message" id="" rows='6' placeholder='Your message' className='w-full p-4 mb-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'></textarea>
            <button type='submit' className='px-8 py-3 border border-gray-400 rounded-full bg-black/80 text-white flex items-center gap-2 mx-auto hover:bg-black duration-500 cursor-pointer'>
                Send message <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </button>
            <p className='text-center mt-4 text-gray-700 font-Ovo'>I'll get back to you as soon as possible.</p>
            <p className='mt-4'>{result}</p>
        </form>
        
    </div>
  )
}

export default Contact