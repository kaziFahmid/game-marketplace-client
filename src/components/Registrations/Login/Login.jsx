import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form";
import SocialButton from "../SocialButton/SocialButton";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useAuth();
  let navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        Swal.fire('Login Done')
    navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <section className="flex items-center justify-center mt-11">
      <div className="bg-gray-900 p-5 flex rounded-2xl shadow-lg max-w-3xl">
        <div className="md:w-1/2 px-5">
          <h2 className="text-2xl font-bold text-green-500">Login</h2>
          <p className="text-sm mt-4 text-white">
            If you have an account, please login
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div>
              <label className="block text-white">Email Address</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                name="email"
                type="email"
                placeholder="Enter Email Address"
                className={`w-full px-4 py-3 rounded-lg text-white bg-black mt-2 border ${
                  errors.email ? "border-red-500" : "focus:border-green-500"
                } focus:outline-none`}
                autoFocus
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-red-500 mt-1">Valid Email is required</p>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-white">Password</label>
              <input
                {...register("password", { required: true, minLength: 6 })}
                type="password"
                name="password"
                placeholder="Enter Password"
                className={`w-full px-4 py-3 rounded-lg text-white bg-black mt-2 border ${
                  errors.password ? "border-red-500" : "focus:border-green-500"
                } focus:outline-none`}
                autoComplete="current-password"
              />
              {errors.password && (
                <p className="text-red-500 mt-1">
                  Password should be at least 6 characters long
                </p>
              )}
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-white hover:text-green-700"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className={`w-full block bg-green-500 hover:bg-green-400 btn border-none focus:bg-green-400 text-white font-semibold rounded-lg px-4 py-3 mt-6`}
            >
              Log In
            </button>
          </form>

          <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-500" />
          </div>

          <SocialButton />

          <div className="text-sm flex justify-between items-center mt-3">
            <p className="text-white"> If you don't have an account...</p>
            <Link to="/signup">
              <button className="py-2 px-5 ml-3 bg-green-500 border rounded-xl hover:scale-110 duration-300 border-green-400 text-white btn">
                Register
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 md:block hidden">
          <img
            src="https://i.ibb.co/PGWr7dm/toppng-com-hd-skye-female-character-with-green-valorant-logo-png-2600x2600-min.png"
            className="rounded-2xl w-full h-full object-cover"
            alt="page img"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
