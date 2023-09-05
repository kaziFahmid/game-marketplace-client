import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAuth from "../hooks/useAuth/useAuth";
import useMyGame from "../hooks/useMyGame/useMyGame";
import useAdmin from "../hooks/useAdmin/useAdmin";
   AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });

const Navbar = () => {
  const {user,logOut}=useAuth()
  const [myGames, refetch]=useMyGame()
  const location=useLocation()
  const[isAdmin,isAdminLoading]=useAdmin()
  return (
    <div className="navbar z-50 bg-black top-0 sticky  flex justify-between  lg:justify-around items-center text-white pt-5"  data-aos="fade-down">
      <div>
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
      </div>
      <ul className=" lg:flex hidden justify-center gap-10 items-center">
        <li className={`hover:text-green-500 duration-200 ${location.pathname==='/'&&'text-green-500'}`}>
          <Link to='/'>Home</Link>
        </li>
        <li className={`hover:text-green-500 duration-200 ${location.pathname==='/shop'&&'text-green-500'}`}>
          <Link to='/shop'>Shop</Link>
        </li>
        <li className={`hover:text-green-500 duration-200 ${location.pathname==='/contactus'&&'text-green-500'}`}>
          <Link to='/contactus'>Contactus</Link>
        </li>
        <li className={`hover:text-green-500 duration-200 ${location.pathname==='/aboutus'&&'text-green-500'}`}>
          <Link to='/aboutus'>About Us</Link>
        </li>
      {user?.email&&<li className={`hover:text-green-500 duration-200 ${location.pathname==='/dashboard'&&'text-green-500'}`}>
          <Link to="/dashboard">Dashboard</Link>
        </li>}  
      </ul>

      <div className="lg:flex hidden justify-center items-center gap-6 ">
{isAdmin.admin?' ': <> {user?.email&& <Link to='/dashboard/mygames'><button className="btn relative text-white bg-green-500 w-12 h-12 rounded-full">
       <div className="badge bg-red-500 badge-sm absolute top-0 left-0"> {myGames.length}</div>
          <FaShoppingCart className="text-white " />
        </button></Link>
}</>}
      
       {user?.email?<button onClick={()=>logOut()} className="btn bg-green-500 text-white border-none px-4">
  
          Logout
        </button>:<Link to='/login'>
      <button className="btn bg-green-500 text-white border-none px-4">
          <BiLogInCircle />
          Login
        </button>
      </Link>} 
      
    {user?.email&&<div className="avatar">
  <div className="w-12 rounded-full">
    <img  title={user?.displayName} src={user?.photoURL} className="w-full" />
  </div>
</div>}

      {!user?.email&& <Link to='/signup'>
       <button className="btn bg-green-500 text-white border-none px-4">
          Signup
        </button>
        </Link>}
      </div>
      <div className="lg:hidden block">

      <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn bg-black m-1"> <CiMenuFries className=" text-green-400 text-2xl" /></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black rounded-box w-64">
  <li >
          <Link to='/'>Home</Link>
        </li>
        <li >
          <Link to='/shop'>Shop</Link>
        </li>
        <li >
          <Link to='/contactus'>Contactus</Link>
        </li>
        <li >
          <Link to='/aboutus'>About Us</Link>
        </li>
      {user?.email&&<li >
          <Link to="/dashboard">Dashboard</Link>
        </li>}  

        <li>





          
       {user?.email&& <Link to='/dashboard/mygames'><button className="btn relative text-white bg-green-500 w-12 h-12 rounded-full">
       <div className="badge bg-red-500 badge-sm absolute top-0 left-0"> {myGames.length}</div>
          <FaShoppingCart className="text-white " />
        </button></Link>
}
       {user?.email?<button onClick={()=>logOut()} className=" text-xl underline ">
  
          Logout
        </button>:<Link to='/login'>
      <button className="btn bg-green-500 text-white border-none px-4">
          <BiLogInCircle />
          Login
        </button>
      </Link>} 
      
    {user?.email&&<div className="avatar mt-5">
  <div className="w-12 rounded-full">
    <img  title={user?.displayName}src={user?.photoURL} className="w-full" />
  </div>
</div>}

      {!user?.email&& <Link to='/signup'>
       <button className="btn bg-green-500 text-white border-none px-4">
          Signup
        </button>
        </Link>}
        </li>
  </ul>
</div>
      </div>
    </div>
  );
};

export default Navbar;
