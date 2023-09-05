import React from "react";
import useUsers from "../../hooks/useUsers/useUsers";
import axios from "axios";

const AllUsers = () => {
  const [users, refetch] = useUsers();

  let handleAdmin = (id) => {
    axios.patch(`/allusers/${id}`, { status: "admin" }).then((res) => {
      if (res.modifiedCount > 0) {
        refetch();
      }
    });
  };
  let handleUser = (id) => {
    axios.patch(`/allusers/${id}`, { status: "user" }).then((res) => {
      if (res.modifiedCount > 0) {
        refetch();
      }
    });
  };
  return (
    <>
      <div className="overflow-x-auto h-[500px] overflow-y-auto">
        <table className="table text-white">
          {/* head */}
          <thead>
            <tr className="bg-green-500 text-white">
              <th>Sl</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={user?.photo} />
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td className="flex justify-center gap-3 items-center">
                  <button
                    disabled={user?.role === "admin" && true}
                    className="bg-green-500 text-white btn"
                    onClick={() => handleAdmin(user?._id)}
                  >
                    Admin
                  </button>
                  <button
                    disabled={user?.role === "user" && true}
                    className="bg-slate-100 text-black btn"
                    onClick={() => handleUser(user?._id)}
                  >
                    User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
