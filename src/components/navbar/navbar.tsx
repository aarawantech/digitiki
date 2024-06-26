import React from 'react';
import LoginButton from '../login-button/login-button';

const Navbar = () => (
    <nav className="py-[31px] bg-[#193568]">
        <div className="max-w-[1440px] flex justify-between items-center m-auto px-[144px]">
            <span className="text-white text-3xl font-normal">LOGO</span>
            <LoginButton />
        </div>
    </nav>
);

export default Navbar;
