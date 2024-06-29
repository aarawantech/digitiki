import React from 'react';
import Link from 'next/link';
import LoginButton from '../login-button/login-button';

const Navbar = () => (
    <nav className="py-[31px] bg-[#193568]">
        <div className="max-w-[1440px] flex justify-between items-center m-auto px-4 md:px-10 lg:px-[144px]">
            <Link href="/">
                <button className="text-white text-3xl font-normal">
                    LOGO
                </button>
            </Link>
            <LoginButton />
        </div>
    </nav>
);

export default Navbar;
