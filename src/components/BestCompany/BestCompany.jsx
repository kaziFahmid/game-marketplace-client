import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsCheckLg } from 'react-icons/bs';
const BestCompany = () => {

   
  AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <section className='grid lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto mt-32'>
      <div>
        



      <div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
  <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
    <div data-aos="fade-right" className="w-full row-span-2">
      <img
        src="https://img.freepik.com/free-photo/professional-esports-gamer-back-side-view-rejoices-victory-generative-ai_191095-2019.jpg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"/>
    </div>
    <div data-aos="fade-down" className="w-full col-span-2 row-span-2">
      <img
        src="https://d31nhj1t453igc.cloudfront.net/cloudinary/2022/Apr/08/FrxUe13cuzmaHvJ7PWMc.jpg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div  data-aos="fade-down" className="w-full ">
      <img
        src="https://m.media-amazon.com/images/I/81zk93c4ZoL._AC_UF1000,1000_QL80_.jpg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div  data-aos="fade-right" className="w-full">
      <img
        src="https://m.media-amazon.com/images/I/81f4z3CtwlL._AC_UF1000,1000_QL80_.jpg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div data-aos="fade-right"className="w-full col-span-2 row-span-2">
      <img
        src="https://i.pinimg.com/originals/ba/15/13/ba1513981d08c43c67f5c27053eda7cf.png"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
   
    <div   data-aos="fade-down"className="w-full col-span-2">
      <img
        src="https://cf.shopee.ph/file/ff4da6ac1fc5bd4ed12a45da9b28959e"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div  data-aos="fade-right" className="w-full">
      <img
        src="https://w0.peakpx.com/wallpaper/728/826/HD-wallpaper-days-gone-ps4-game.jpg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div data-aos="fade-up" className="w-full">
      <img
        src="https://e0.pxfuel.com/wallpapers/686/419/desktop-wallpaper-resident-evil-3-remake-phone-background-2020-ps4-game-art-poster-on-iphone-android-resident-evil-3-remake-resident-evil-resident-evil-game-resident-evil-3-phone.jpg"
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
  </div>
</div>




      </div>
      <div >

    <div  data-aos="fade-down" className='mt-12'>
        <h1 className='lg:text-8xl  text-4xl font-neue text-white'>WE’RE THE BEST<br/> <span className='text-green-500'>GAMING COMPANY</span></h1>
        <p className='italic mt-6 text-white'>LPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.</p>

        <p className=' text-white mt-6 text-justify'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

        <ul className='text-white mt-8'>
            <li className='mt-5 flex justify-start items-center gap-5'><BsCheckLg className='text-green-400'/>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
            <li className='mt-5 flex justify-start items-center gap-5'> <BsCheckLg  className='text-green-400'/>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
            <li className='mt-5 flex justify-start items-center gap-5'> <BsCheckLg className='text-green-400'/>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
        </ul>
    </div>
      </div>
    </section>
  )
}

export default BestCompany
