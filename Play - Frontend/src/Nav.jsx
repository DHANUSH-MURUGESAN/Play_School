import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import logo from "./assets/playschoollogo2.png";
import { Link } from 'react-router';

const Nav = () => {
    return (
        <>
            <header className='bg-gradient-to-r from-[#9b0576] to-[#d05db3] h-10 inline-flex w-full justify-start items-center px-20 text-white gap-20'>
                <div className='inline-flex gap-3'>
                    <FaLocationDot className='mt-1'/>
                    <h1 className='font-bold'>96, Rajaji Salai, Egmore, Chennai, Tamilnadu 600 008</h1>
                </div>
                <div className='inline-flex gap-3'>
                    <FaMobileAlt className='mt-1'/>
                    <h1 className='font-bold'>+91 81225 95789 / +91 81225 95799</h1>
                </div>
                <div className='mx-[42px] inline-flex justify-center items-center'>
                    <div className='inline-flex gap-3'>
                        <FaLinkedin className='rounded-full text-white border-2 h-7 w-7 p-1 transition-transform hover:scale-120'/>
                        <FaInstagram className='rounded-full text-white border-2 h-7 w-7 p-1 transition-transform hover:scale-120'/>
                        <FaFacebook className='rounded-full text-white border-2 h-7 w-7 p-1 transition-transform hover:scale-120'/>
                        <TiSocialYoutube className='rounded-full text-white border-2 h-7 w-7 p-1 transition-transform hover:scale-120'/>
                    </div>
                </div>
            </header>
            <header className="h-15 bg-gradient-to-r from-[#471da3] to-[#805dd0] text-white p-4 inline-flex w-full justify-start items-center sticky top-0 shadow-2xl shadow-gray-400">
                <div className='flex items-center gap-3'>
                    <img src={logo} alt="logo" className='h-20 w-auto'/>
                </div>
                <div className='flex items-center ml-50 text-[18px] font-bold gap-20'>
                    <Link to="/" className='hover:text-[#FFD600]'>Home</Link>
                    <Link to="/time-table" className='hover:text-[#FFD600]'>Time-Table</Link>
                    <Link to="/aboutus" className='hover:text-[#FFD600]'>About Us</Link>
                    <Link to="/admissions" className='hover:text-[#FFD600]'>Admissions</Link>
                    <Link to="/shop" className='hover:text-[#FFD600]'>Shop</Link>
                    <Link to="/blog" className='hover:text-[#FFD600]'>Blog</Link>
                </div>
            </header>
        </>
    )
}

export default Nav
