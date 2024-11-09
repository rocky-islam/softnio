import { NavLink } from "react-router-dom";

import logo from '../../assets/Logo.png'
import { IoIosMenu } from "react-icons/io";

const Nav = () => {
  const navLink = (
    <>
      <NavLink className="mx-2 my-2">
        <li>Home</li>
      </NavLink>
      <NavLink className="mx-2 my-2">
        <li>About</li>
      </NavLink>
      <NavLink className="mx-2 my-2">
        <li>Portfolio</li>
      </NavLink>
      <NavLink className="mx-2 my-2">
        <li>Clients</li>
      </NavLink>
      <NavLink className="mx-2 my-2">
        <li>Blog</li>
      </NavLink>
      <NavLink className="mx-2 my-2">
        <li>Contact</li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-[linear-gradient(123.4deg,_#BD1F17_40.8%,_#A61D13_76.4%,_#8E1B0F_120.69%)]  lg:w-full sticky top-0 z-50">
      <div className="navbar bg-transparent lg:justify-around justify-between">
        <div className=""> 

            {/*
             background: linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%); 
            bg-gradient-to-r from-[#BD1F17] from-40% via-[#A61D13] via-60% to-[#8E1B0F] to-[100%]

            */}
          <img src={logo} alt="logo" className="md:w-[200px] w-36"/>
          <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {navLink}
          </ul>
        </div>
        </div>
        
        <div className=""> {/* nav flex*/}
          <a className="btn hidden lg:flex bg-[#FEBF00]">BOOK A TABLE</a>
{/* dropdown menu */}
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoIosMenu size={25}/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 p-2 shadow bg-[linear-gradient(123.4deg,_#BD1F17_40.8%,_#A61D13_76.4%,_#8E1B0F_120.69%)] absolute right-3"
            >
              {navLink}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
