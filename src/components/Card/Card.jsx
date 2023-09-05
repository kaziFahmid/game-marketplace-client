import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import useAuth from "../hooks/useAuth/useAuth";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import useMyGame from "../hooks/useMyGame/useMyGame";
import { useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin/useAdmin";

const Card = ({ name, category, description, image, price }) => {
  const {user}=useAuth()
  const[isAdmin,isAdminLoading]=useAdmin()
const navigate=useNavigate()
const [myGames, refetch]=useMyGame()
  let handleAddToCart=(gameProduct)=>{
    if(!user?.email){
      navigate('/login')
      return ;
    }
 axios.post("/mygames",gameProduct)
 .then((res)=>{
  if(res.insertedId){
    toast.success(`${gameProduct?.name} Added`)
    refetch()
  }
 })
  }
  return (
  <>
  
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
  <div className="max-w-sm relative border-b-2 border-green-500 bg-gray-950 rounded overflow-hidden shadow-lg">
      <div className=" absolute top-0 right-0 text-white bg-green-500 w-20  py-1 text-center">
        <b>{category}</b>
      </div>
      <div>
        <img className=" w-full  h-72 object-cover" src={image} alt="game" />
      </div>
      <div>
        <div className="text-white bg-green-500 w-20 -skew-x-12 py-1 text-center">
          <b>Game</b>
        </div>
        <div className="px-5 mt-6">
          <h2 className="font-bold text-xl  text-white mb-2">{name}</h2>
          <p className="text-gray-400 text-start text-base ">{description}</p>
        </div>
        <div className="px-5 mt-8 ">
          <div className=" py-3 flex justify-between items-center border-t-2 border-green-500">
            <button disabled={isAdmin?.admin&&true} onClick={()=>handleAddToCart({ name, category, description, image, price,email:user?.email })} className="rounded-full btn border-none bg-green-500 text-white w-12 h-12">
              <BsFillCartFill className="text-5xl" />
            </button>
            <span className="bg-green-500 -skew-x-6 px-5 py-1 font-bold text-white">
              $ {price}
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  
  
  
  </>
  );
};

export default Card;
