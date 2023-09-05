import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdGames } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import useAdmin from "../hooks/useAdmin/useAdmin";
import useIsUser from "../hooks/useIsUser/useIsUser";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isUser, isUserLoading] = useIsUser();

  return (
    <section className="min-h-screen">
      <div className="lg:grid-cols-12 grid grid-cols-1">
        <div className="lg:col-span-2">
          <div className="min-h-screen hidden  bg-gray-900 lg:flex justify-center items-center">
            {/* admin */}
            {isAdmin.admin && (
              <div>
                <h1 className="text-white font-neue text-3xl text-center mb-8">
                  Admin
                </h1>
                <div className="flex justify-center items-center">
                  <ul className="text-white text  ">
                    <Link to="/">
                      <li className="flex place-items-center items-center  duration-300 hover:text-green-500 cursor-pointer hover:bg-gray-800 px-6 py-1 rounded-md gap-2">
                        <FaHome />
                        Home
                      </li>
                    </Link>
                    <Link to="/dashboard/manageusers">
                      <li className="flex place-items-center items-center duration-300 hover:text-green-500 cursor-pointer hover:bg-gray-800 px-6 py-1 rounded-md gap-2 mt-6">
                        <FaUserAlt />
                        Manage Users
                      </li>
                    </Link>

                    <Link to="/dashboard/managegames">
                      <li className="flex place-items-center items-center duration-300 hover:text-green-500 cursor-pointer hover:bg-gray-800 px-6 py-1 rounded-md gap-2 mt-6">
                        <MdGames />
                        Manage Games
                      </li>
                    </Link>

                    <Link to="/dashboard/addgame">
                      <li className="flex place-items-center items-center duration-300 hover:text-green-500 cursor-pointer hover:bg-gray-800 px-6 py-1 rounded-md gap-2 mt-6">
                        <FaGamepad />
                        Add Game
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            )}

            {/* user */}

            {isUser.user && (
              <div>
                <h1 className="text-white font-neue text-3xl text-center mb-8">
                  USER
                </h1>
                <div className="flex justify-center items-center">
                  <ul className="text-white text  ">
                    <Link to="/">
                      <li className="flex place-items-center items-center  duration-300 hover:text-green-500 cursor-pointer hover:bg-gray-800 px-6 py-1 rounded-md gap-2">
                        <FaHome />
                        Home
                      </li>
                    </Link>

                    <Link to="/dashboard/mygames">
                      <li className="flex place-items-center items-center duration-300 hover:text-green-500 cursor-pointer hover:bg-gray-800 px-6 py-1 rounded-md gap-2 mt-6">
                        <MdGames />
                        My Games
                      </li>
                    </Link>

                    <Link to="/dashboard/paymenthistory">
                      <li className="flex place-items-center items-center duration-300 hover:text-green-500 cursor-pointer hover:bg-gray-800 px-6 py-1 rounded-md gap-2 mt-6">
                        <FaDollarSign />
                        Payment History
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-10 lg:bg-gray-950">
          <div className="navbar text-end ">
            <div className="drawer lg:hidden block">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn bg-black drawer-button"
                >
                  <CiMenuFries className="text-xl text-green-500" />
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer"
                  className="drawer-overlay text-white"
                ></label>

                <ul className="menu p-4 w-80 text-white  min-h-full bg-gray-800 ">
                  <li>
                    <div className="drawer-content  w-fit ms-auto ">
                      <label
                        htmlFor="my-drawer"
                        className="btn bg-black drawer-button"
                      >
                        <h1 className="text-green-500 text-2xl">X</h1>
                      </label>
                    </div>{" "}
                  </li>
                  <li className="text-center text-white font-neue text-4xl mt-10 ">
                    {(isAdmin.admin && "ADMIN") || (isUser.user && "USER")}
                  </li>{" "}
                  <li>
                    <Link to="/">
                      <FaHome />
                      Home
                    </Link>
                  </li>
                  {isAdmin.admin && (
                    <li>
                      <Link to="/dashboard/manageusers">
                        <FaUserAlt />
                        Manage Users
                      </Link>
                    </li>
                  )}
                  {isAdmin.admin && (
                    <li>
                      <Link to="/dashboard/managegames">
                        <MdGames />
                        Manage Games
                      </Link>
                    </li>
                  )}
                  {isAdmin.admin && (
                    <li>
                      <Link to="/dashboard/addgame">
                        <FaGamepad />
                        Add Game
                      </Link>
                    </li>
                  )}{" "}
                  {isUser.user && (
                    <li>
                      <Link to="/dashboard/mygames">
                        {" "}
                        <MdGames />
                        My Games
                      </Link>
                    </li>
                  )}{" "}
                  {isUser.user && (
                    <li>
                      <Link to="/dashboard/paymenthistory">
                        {" "}
                        <FaDollarSign />
                        Payment History
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
