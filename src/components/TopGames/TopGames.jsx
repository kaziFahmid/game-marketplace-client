import React from 'react'
import Card from '../Card/Card'
import useGames from '../hooks/useGames/useGames'
import AOS from "aos";
import "aos/dist/aos.css";

const TopGames = () => {
  const [games, refetch]=useGames()
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });
  return (
    <>
   <div className='mt-32'>
   <h1 className='text-white text-center text-6xl font-neue mb-7'>Top Games</h1>
    <section data-aos="fade-right" className='grid md:grid-cols-2 gap-8 grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto'>
    {games.slice(0,6).map((game)=><Card  key={game._id} {...game}/>)}
      </section>
    </div>   
    
    
    
    
    
    
    
    
    </>
  )
}

export default TopGames
