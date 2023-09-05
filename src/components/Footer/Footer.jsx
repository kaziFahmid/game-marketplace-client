import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<footer className="footer p-10 bg-black border-t-2 border-green-500    text-neutral-content mt-32">
  <nav>
  <Link to='/'>
      <div className="flex justify-center items-center">
     <div>
     <img src="https://i.ibb.co/rwWT1QW/Seek-Png-com-gamer-logo-png-3428775.png" className="img-fluid h-8"/> 
     </div>
        <h1 className="btn btn-ghost normal-case text-3xl font-neue italic">
        Game <span className="text-green-400">Fusion</span>
        </h1>
        
      </div>
        
        </Link>
  </nav> 
  <nav>
    <Link to='/' className="footer-title">Home</Link> 
    <Link to='/aboutus'className="link link-hover">About us</Link>
    <Link to='/contactus'className="link link-hover">Contact</Link>
    <Link to='/login'className="link link-hover">Login</Link>
    <Link to='/signup'className="link link-hover">Signup</Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer
