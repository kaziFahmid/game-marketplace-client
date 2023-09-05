import React from 'react'
import teams from './team.json'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamMembers = () => {


  AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
  <>
  
  <section className='mt-32'>
  <h1 data-aos="fade-down" className='text-center font-neue text-5xl text-white mb-10 '>Our<span className='text-green-500'> Team Member</span></h1>
  
  <div className='grid max-w-6xl mx-auto  gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
  {teams.map(({id,
pic,
name,
position})=>{return <div  data-aos="fade-down-right" key={id} className='relative' >
     <img src={pic} className='w-full h-96 object-cover '/>
     <div className='absolute z-50 hover:bg-green-500/60 duration-500  w-full top-0 h-96'> 
        
     </div>
     <div className='text-white text-center'> 
        <h1 className='mt-5 font-neue text-white text-4xl'>{name}</h1>
        <p>{position}</p>
     </div>
     </div>})}
  </div>
  </section>
  
  
  
  
  
  
  
  
  </>
  )
}

export default TeamMembers
