import React from 'react'
import Character4 from "../../assets/Character4.jpg";
import NeonButton from '../NeonButton/NeonButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
const BestGame = () => {

  AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <section className='grid mt-32 lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-6'>
      <div className='flex justify-center items-center'>
  <div data-aos="fade-right">
<h1 className='text-white font-neue text-3xl md:text-5xl text-start'>Buy your best game and collect rewards</h1>
<p className='text-slate-400 text-xl text-justify mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellat eius suscipit nesciunt.</p>
<div className='mt-5'>
<NeonButton text="BUY NOW"/>
</div>
  </div>
      </div>
      <div className='flex justify-center items-center'>
      <div data-aos="zoom-out-right" className='lg:mt-0 mt-16'>
      <img src={Character4} className='img-fluid '/>
      </div>
      </div>
    </section>
  )
}

export default BestGame
