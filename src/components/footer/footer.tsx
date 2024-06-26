import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => (
    <footer className="bg-[#193568] text-white divide-y">
        <div className="max-w-[1440px] m-auto py-[88px] px-4 md:px-10 lg:px-36 flex justify-between flex-wrap gap-8">
            <div>
                <span className="text-2xl font-bold">LOGO</span>
                <div className="flex gap-3">
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </div>
            <span>Privacy Policy</span>
            <span>Refund Policy</span>
            <span>Contact Us</span>
        </div>
        <div className="py-6 text-center">
            <p>Copyright © 2024 . DigiTiki Technology</p>
        </div>
    </footer>
);

export default Footer;
