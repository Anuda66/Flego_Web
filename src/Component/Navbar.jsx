import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);

  return (
    <div className="bg-primary-200">
    <div className='px-5 md:px-14 sm:px-10'>
      <div className="flex items-center justify-between py-4 mb-5 text-sm ">
        {/* App Logo---------------------------------- */}
        <Link to="/">
        <h1 className="text-xl font-bold text-secondary">Flego Inovation</h1>
        </Link>
        
        <ul className="items-start hidden gap-5 font-medium md:flex">
          <NavLink to={"/"}>
            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110">Home</li>
            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary" />
          </NavLink>
          <NavLink to={"/about"}>
            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110">About</li>
            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary" />
          </NavLink>
          <NavLink to={"/projects"}>
            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110">Projects</li>
            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary" />
          </NavLink>
          
          <NavLink to={"/service"}>
            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110"> Service</li>
            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary " />
          </NavLink>
          
          <NavLink to={"/industries"}>
            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110">Industries</li>
            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary " />
          </NavLink>
          

          
          <NavLink to={"/futurePlans"}>
            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110">Future Plans</li>
            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary" />
          </NavLink>

          <NavLink to={"/contactUs"}>
            <li className="py-1 text-white transition duration-300 ease-in-out delay-150 hover:text-secondary hover:-translate-y-1 hover:scale-110"> Contact Us</li>
            <hr className="hidden w-3/5 h-1 m-auto border-none rounded-full outline-none bg-secondary" />
          </NavLink>
        </ul>
       
        <div className="flex items-center gap-4">
          
        {/*Search Icon----------------------------------------*/}
        <FaSearch className="w-10 text-xl text-white duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-secondary "/>
          
           {/*Menu Icon ----------------------------------------*/}
          <RiMenuUnfold4Fill onClick={()=>setShowMenu(true)} className="w-10 h-6 text-white md:hidden"/>
            {/* Mobile menu---------------------------------------------------- */}
            <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden  transition-all`} style={{ backgroundColor: '#360065'}}>
              <div className="flex items-center justify-between px-5 py-4">
                {/* App Logo-----------------------------------------------------*/}
              <Link to="/">
              <h1 className="text-xl font-bold text-secondary">Flego Inovation</h1>

              </Link>
              <RxCross2 onClick={()=>setShowMenu(false)} className="w-10 h-6 text-white md:hidden"/>
              </div>
              <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium text-white">
                <NavLink onClick={()=>setShowMenu(false)}  to={'/'}>Home</NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to={'/about'}>About</NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to={'/servicess'}>Services</NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to={'/benefits'}>Benefits</NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to={'/download'}>Download</NavLink>
                <NavLink onClick={()=>setShowMenu(false)} to={'/contact'}>Contact</NavLink>
              </ul>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;