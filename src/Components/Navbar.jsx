import { ImBoxAdd } from "react-icons/im";
import { IoLogoModelS } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { NavLink } from "react-router";

const Navbar = () => {
  const link = (
    <div className="flex gap-4 text-lg font-semibold">
      <NavLink className="items-center gap-1 flex" to="/">
        <TiHomeOutline /> Home
      </NavLink>
      <NavLink className="items-center gap-1 flex" to="/">
        <IoLogoModelS /> All Models
      </NavLink>
      <NavLink className="items-center gap-1 flex" to="/">
        <ImBoxAdd /> Add Models
      </NavLink>
    </div>
  );
  return (
    <>
      <div className="navbar glass-card">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
    //         <div>
    //             <div className="navbar py-0 min-h-0 z-1 shadow-sm rounded-full glass-card max-w-7xl">
    //       <div className="navbar-start">
    //         <div className="dropdown">
    //           <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               {" "}
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M4 6h16M4 12h8m-8 6h16"
    //               />{" "}
    //             </svg>
    //           </div>
    //           <ul
    //             tabIndex="-1"
    //             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    //           >
    //             <li>
    //               <NavLink to={"/"}>
    //                 <GoHomeFill />
    //                 Home
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink to={"/all-models"}>
    //                 <IoLogoModelS /> All Models
    //               </NavLink>
    //             </li>
    //           </ul>
    //         </div>
    //         <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
    //           <LuRotate3D /> 3D Models Hub
    //         </Link>
    //       </div>
    //       <div className="navbar-center hidden md:flex">
    //         <ul className="menu menu-horizontal px-1 gap-10">
    //           <li>
    //             <NavLink to={"/"}>
    //               <GoHomeFill />
    //               Home
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink to={"/all-models"}>
    //               <IoLogoModels /> All Models
    //             </NavLink>
    //           </li>
    //           <li>
    //             <NavLink to={"/add-model"}>
    //              <ImBoxAdd /> Add model
    //             </NavLink>
    //           </li>
    // {/*
    //           <li>
    //             <NavLink to={"/profile"}>
    //               <FaUser /> Profile
    //             </NavLink>
    //           </li> */}
    //         </ul>
    //       </div>
    //       <div className="navbar-end gap-3">
    //         {user ? (
    //           <div className="dropdown dropdown-end z-50">
    //             <div
    //               tabIndex={0}
    //               role="button"
    //               className="btn btn-ghost btn-circle avatar"
    //             >
    //               <div className="w-9 border-2 border-gray-300 rounded-full">
    //                 <img
    //                   alt="Tailwind CSS Navbar component"
    //                   referrerPolicy="no-referrer"
    //                   src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
    //                 />
    //               </div>
    //             </div>
    //             <ul
    //               tabIndex="-1"
    //               className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
    //             >
    //               <div className=" pb-3 border-b border-b-gray-200">
    //                 <li className="text-sm font-bold">{user.displayName}</li>
    //                 <li className="text-xs">{user.email}</li>
    //               </div>
    //               <li className="mt-3">
    //                 <Link to={"/profile"}>
    //                   <FaUser /> Profile
    //                 </Link>
    //               </li>
    //               <li>
    //                 <a>
    //                   {" "}
    //                   <FaGear /> Settings
    //                 </a>
    //               </li>
    //               <li>
    //                 <button
    //                   onClick={signOutUser}
    //                   className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
    //                 >
    //                   <IoLogOut /> Logout
    //                 </button>
    //               </li>
    //             </ul>
    //           </div>
    //         ) : (
    //           <Link
    //             to={"/auth/login"}
    //             className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
    //           >
    //             {" "}
    //             <IoLogIn /> Login
    //           </Link>
    //         )}
    //       </div>
    //     </div>
    //         </div>
  );
};

export default Navbar;
