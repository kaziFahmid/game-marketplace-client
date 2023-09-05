import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ReleasedGames = () => {

  AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <>
    <div className='text-center mt-32'>
        <h1 className='text-white text-4xl lg:text-5xl font-neue'>ALL <span className='text-green-500'>RELEASED</span> GAMES</h1>
        <p className='mt-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur</p>
    </div>
    <section className='grid lg:grid-cols-4 mt-11  md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto '>
        <div data-aos="fade-right">
        <div className='absolute z-50 hover:bg-green-500/90 duration-500  w-full top-0 h-full flex justify-center ite'> 
       
        </div>
<img src='https://e0.pxfuel.com/wallpapers/941/295/desktop-wallpaper-hyper-scape-game-poster-ultra-mobile-mobile-warframe-music-art-print-gaming.jpg'className='w-full  ' />
        </div>
        <div data-aos="fade-up">
        <div className='absolute z-50 hover:bg-green-500/90 duration-500  w-full top-0 h-full'> 
        
        </div>
        <img src='https://e1.pxfuel.com/desktop-wallpaper/600/636/desktop-wallpaper-valorant-video-game-2020-ultra-mobile-in-2020-valorant-reyna-phone.jpg'className='w-full ' />
        </div>
        <div data-aos="fade-down">
        <div className='absolute z-50 hover:bg-green-500/90 duration-500  w-full top-0 h-full'> 
        
        </div>
        <img src='https://e1.pxfuel.com/desktop-wallpaper/952/1008/desktop-wallpaper-halo-master-chief-guardians-game-character-shooter-robot-1080x1920-for-your-mobile-tablet.jpg'className='w-full'/>
        </div>
        <div  data-aos="zoom-in-up">
        <div className='absolute z-50 hover:bg-green-500/90 duration-500  w-full top-0 h-full'> 
        
        </div>
        <img src='https://e0.pxfuel.com/wallpapers/994/359/desktop-wallpaper-sniper-mobile-games-3d-sniper-games-offline-in-2020-sniper-games-sniper-third-person-shooter.jpg'className='w-full'/>
        </div>
      
        </section>
    
    
    
    
    
    
    </>
  )
}

export default ReleasedGames
