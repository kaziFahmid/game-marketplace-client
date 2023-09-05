import React from 'react'
import useMyGame from '../../hooks/useMyGame/useMyGame'
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyGames = () => {
    const [myGames, refetch]=useMyGame()
    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`/mygames/${id}`)
              .then((res) => {
                if (res.deletedCount > 0) {
                  Swal.fire(
                    "Deleted!",
                    "Your game has been deleted successfully.",
                    "success"
                  );
                  refetch();
                } else {
                  Swal.fire("Error!", "Failed to delete the game.", "error");
                }
              })
              .catch((error) => {
                console.error("Error deleting game:", error);
                Swal.fire("Error!", "Failed to delete the game.", "error");
              });
          }
        });
      };
  return (
    <>
    <div className='flex justify-between items-center mx-4 mb-5'>
    <h1 className='mb-5 text-white text-xl '>Total: ${myGames.reduce((h1,h2)=>h1 + h2.price, 0)}</h1>
    <div>
        
     <Link to='/dashboard/pay'>   <button className='bg-yellow-500 text-white btn '>Pay</button></Link>
    </div>
    </div>
      <div className="overflow-x-auto overflow-y-auto  h-96">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-green-500 text-white'>
        <th>Sl</th>
        <th>Picture</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='text-white'>
      {myGames.map((mygame,index)=><tr key={index}>
        <th>{index+1}</th>
        <td>
        <div className="avatar">
  <div className="w-14 rounded">
    <img src={mygame?.image} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
        </td>
        <td>{mygame?.name}</td>
        <td>{mygame?.category}</td>
        <td>{mygame?.price}</td>
        <td><button className='bg-red-500 text-white btn'onClick={()=>handleDelete(mygame._id)}>Delete</button></td>
      </tr>
    )}
      
    </tbody>
  </table>
</div>

    </>
  )
}

export default MyGames
