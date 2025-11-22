import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from "../../Hooks/UserAUth";

const Rigester = () => {
  const { creatUser, updeatProfile, googleLogin } = useAuth();

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const updet = { displayName, photoURL };
    creatUser(email, password)
      .then((result) => {
        updeatProfile(updet).then(() => {});
      })
      .catch((err) => {});
  };

  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {});
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Register</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Name</label>
              <input
                type="text"
                name="displayName"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Name"
              />

              <label className="label">PhotoURL</label>
              <input
                type="text"
                name="photoURL"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Photo URL"
              />
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />
              {/* password field */}
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
                Register
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
            Already have an account? Please{" "}
            <Link className="text-blue-500 hover:text-blue-800" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rigester;
