import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from "../../Hooks/UserAUth";

const Login = () => {
  const { loginUserNow,googleLogin } = useAuth();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUserNow(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
    .then(result => {
      console.log(result.user);  
    })
  };
  return (
    <div className=" min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
                Login
              </button>
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-full text-black border-[#e5e5e5]"
          >
            <FaGoogle />
            Login with Google
          </button>
          <p className="text-center">
            New to our website? Please{" "}
            <Link className="text-blue-500 hover:text-blue-800" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
