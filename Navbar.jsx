import React, { useState } from "react";
import { Link } from "react-scroll";
import CoffeeIcon from "@mui/icons-material/Coffee";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

import Button from "../layouts/Button";

const Navbar = () => {

   const[menu,setMenu]=useState(false);

   function handleChange(){
    setMenu(!menu);
   }

   function closeMenu(){
    setMenu(false);
}
    
  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-secondary to-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex items-center cursor-pointer gap-2">
            <span>
              <CoffeeIcon
                fontSize="large"
                style={{ color: "rgb(214, 160, 67)" }}
              />
            </span>
            <h1 className="text-xl font-semibold ">
              <b>
                <i>Brewlogy</i>
              </b>
            </h1>
          </div>
          <nav className="hidden md:flex items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-secondary"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-secondary"
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-secondary"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform  duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-secondary"
            >
              Product
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-secondary"
            >
              Reviews
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <Button title="Login" />
          </div>
            <div className="md:hidden flex items-center"  onClick={handleChange} >
                {menu ? (
                    <ClearIcon style={{ fontSize: 25 }} />
                ): (
                    <MenuIcon style={{ fontSize: 25 }} />

                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" :"-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-secondary"
              onClick={closeMenu}
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-secondary"
              onClick={closeMenu}
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-secondary"
              onClick={closeMenu}
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform  duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-secondary"
              onClick={closeMenu}
            >
              Product
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-secondary hover:cursor-pointer"
              onClick={closeMenu}
            >
              Reviews
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link> 
            <Button title="Login" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
