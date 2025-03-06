import React, { useState } from 'react'; //  Import useState
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [visible, setVisible] = useState(false); // Correct state initialization

    return (
        <div className='flex items-center justify-between py-5 font-medium relative'> 
            <img src={assets.logo} className='w-36' alt='' />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                {['/', '/collection', '/about', '/contact', '/login'].map((path, index) => (
                    <NavLink
                        key={index}
                        to={path}
                        className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? "font-bold" : ""}`}
                    >
                        <p>{path.toUpperCase().replace('/', '') || 'HOME'}</p>
                        {({ isActive }) => isActive && <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />}
                    </NavLink>
                ))}
            </ul>

            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                    <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>

                {/* Menu Icon for Small Screens */}
                <img 
                    onClick={() => setVisible(true)} 
                    src={assets.menu_icon} 
                    className='w-5 cursor-pointer sm:hidden' 
                    alt="" 
                />
            </div>

            {/* Sidebar menu for small screens (Hidden on larger screens) */}
            <div 
                className={`fixed top-0 right-0 bottom-0 bg-white transition-all z-50 sm:hidden ${
                    visible ? 'w-3/4 p-6 shadow-lg' : 'w-0 overflow-hidden'
                }`}
            >
                <button onClick={() => setVisible(false)} className="absolute top-5 right-5 text-lg">✖</button>
                <ul className="flex flex-col items-start mt-16 space-y-6">
                    <NavLink to="/" onClick={() => setVisible(false)}>HOME</NavLink>
                    <NavLink to="/collection" onClick={() => setVisible(false)}>COLLECTION</NavLink>
                    <NavLink to="/about" onClick={() => setVisible(false)}>ABOUT</NavLink>
                    <NavLink to="/contact" onClick={() => setVisible(false)}>CONTACT</NavLink>
                    <NavLink to="/login" onClick={() => setVisible(false)}>LOGIN</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
