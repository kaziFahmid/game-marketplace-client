import React from 'react'
import NeonButton from '../NeonButton/NeonButton'
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecentWinners = () => {

  AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <>
      <section className='grid md:grid-cols-2 gap-7 mt-32 grid-cols-1 '>
        <div data-aos="fade-right">
      <img src='https://i.ibb.co/j8jtL6X/Gamers.png' className='w-full'/>
        </div>
        <div className='flex justify-center items-center'>
    <div data-aos="fade-down" className='lg:mt-0 mt-8'>
        <h1   className='md:text-5xl text-4xl text-white font-neue'>Recent Winners</h1>
        <p   className='mt-4 text-gray-400  text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis quasi in numquam? Amet ab, in quod maxime aspernatur porro consectetur.</p>
        <div className='mt-4'>
            <NeonButton  text={'Explore'}/>
        </div>
    </div>
        </div>
        
      </section>
    </>
  )
}

export default RecentWinners
