import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <header className='bg-[url(https://i.ibb.co/58W2hTp/BgImage.png)] bg-no-repeat bg-cover bg-center bg-black pb-40 '>
      
   <div className='pt-20 '>
   <div className='grid lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto'>
    <div className='lg:relative'>
       <div className=' flex justify-center items-center  '>
        <div data-aos="fade-right" className='md:text-center lg:text-start' >
        <h1 className='text-white font-neue md:text-7xl text-4xl'>Get Ready to Play: Dive into Our Gaming Marketplace</h1>
        <p className='text-white mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eligendi harum blanditiis!</p>
        </div>
       </div>
<div data-aos="fade-down" className='lg:absolute  lg:top-0 lg:mt-0 mt-20  lg:right-0'>
    <img src='https://i.ibb.co/m4rGJqJ/valorant-agent-viper-by-nautox1x-ddyto6r.png' className='img-fluid  mx-auto lg:h-[410px] md:h-[670px]'/>
</div>
    </div>
    <div>
    <h1  data-aos="zoom-in-down" className='font-neue md:text-center text-start text-8xl md:text-9xl text-green-300 animate-pulse text-shadow-lg mt-16 lg:mt-0'>
  <span className=' shadow-green-40000'>40%</span><br/> DISCOUNT
</h1>
    </div>
      </div>
   </div>
    </header>
  )
}

export default Header
