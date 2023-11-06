import { Link, NavLink } from "react-router-dom";
import { FaUserCheck } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }

  const navLinks = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/allServices'>All Services</NavLink></li>
      
     
    </>
  );

  return (
    <div className="navbar my-4 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
      <li tabIndex={0}>
        <details>
          <summary>DashBoard</summary>
          <ul className="p-2">
          <li><NavLink to='/addProducts'>Add Service</NavLink></li>
          <li><NavLink to='/mySchedule'>My Schedule</NavLink></li>
          <li><NavLink to='/addProducts'>My Services</NavLink></li>
          </ul>
        </details>
      </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-20" src="https://i.ibb.co/dbpMn9L/maintenance.png" alt="" />
        <a className="btn btn-ghost normal-case text-3xl font-bold">HomeSwap Hub</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navLinks}
      <li tabIndex={0}>
        <details>
          <summary>DashBoard</summary>
          <ul className="p-2">
          <li><NavLink to='/addProducts'>Add Service</NavLink></li>
          <li><NavLink to='/mySchedule'>My Schedule</NavLink></li>
          <li><NavLink to='/addProducts'>My Services</NavLink></li>
          </ul>
        </details>
      </li>
       
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? 
          <>
          <span className="pr-4"><img className="rounded-full w-11 h-11" src={user.photoURL} alt="" /></span>
            <span className="pr-4">{user.displayName}</span>
          <button onClick={handleSignOut} className="btn btn-outline"><FaUserCheck></FaUserCheck>Sign Out</button>
          </>
          
          :
          <Link to='/signIn'>
        <button className="btn btn-outline"><FaUserCheck></FaUserCheck>Sign In</button>
        </Link>
        }
        
        
      </div>
    </div>
  );
};

export default Navbar;