import React from 'react'

const NeonButton = ({text}) => {
  return (
    <div>
      <button className='text-black neon bg-green-300 font-neue btn text-xl px-12  border-none'>{text}</button>
    </div>
  )
}

export default NeonButton
