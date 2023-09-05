import { Elements } from '@stripe/react-stripe-js';
import React from 'react'
import CheckoutForm from '../CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useMyGame from '../../hooks/useMyGame/useMyGame';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Pay = () => {
    const [myGames, refetch]=useMyGame()
    const totalPrice=myGames.reduce((h1,h2)=>h1 + h2.price, 0)
    let price= parseFloat(totalPrice.toFixed(2))
  return (
    <>
      <div className=' '>

<h1 className='text-center lg:text-3xl mt-16 text-xl font-neue text-white'>Payment</h1>
 <h2 className='text-xl mb-5 text-white'>Pay: ${totalPrice} </h2>
 <Elements stripe={stripePromise}>
   <CheckoutForm myGames={myGames} refetch={refetch} price={price} />
   </Elements>
</div>
    </>
  )
}

export default Pay
