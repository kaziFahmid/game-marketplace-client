import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import useGames from "../../hooks/useGames/useGames";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageGames = () => {
    const [games, refetch]=useGames()
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
              .delete(`/games/${id}`)
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
    <div className="overflow-x-auto h-96 mt-20 overflow-y-auto">
      <table className="table text-white">
        {/* head */}
        <thead>
          <tr className="bg-green-500 text-white">
            <th>Sl</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {games.map((game,index)=><tr key={game._id}>
            <td>{index+1}</td>
            <td>
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={game?.image} />
                </div>
              </div>
            </td>
            <td>{game?.name}</td>
            <td>{game?.email}</td>
            <td>{game?.price}</td>
            <td>{game?.category}</td>
            <td>{game?.description}</td>
            <td className="flex justify-center gap-3 items-center">
             <Link to={`/dashboard/edit/${game._id}`}>
             <button className="bg-green-500 text-white btn">
                <FiEdit />
              </button>
             </Link>
              <button onClick={()=> handleDelete(game._id)} className="bg-red-500 text-white btn">
                <BsFillTrashFill />
              </button>
            </td>
          </tr>)}  
        </tbody>
      </table>
    </div>
  );
};

export default ManageGames;
