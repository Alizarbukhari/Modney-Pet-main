"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo3 from '@/public/logo3.png';
import Link from 'next/link';
import Loginicon from '@/public/Loginicon.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('top');
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setScrollDirection('top');
            } else if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
        <div
            className={`flex items-center border-b-[3px] border-[#000] fixed w-full p-8 transition-all z-50 duration-700 ease-in-out 
                ${scrollDirection === 'top' ? 'bg-transparent shadow-none' :
                    scrollDirection === 'down' ? 'translate-y-[-100%] shadow-none' : 'bg-white'
                }`}
        >

            
            <div className="flex items-center justify-center w-full">
            
                <Image src={logo3} alt="Logo" width={250} height={250} />
                
            </div>
        </div>
        
        </>
    );
}

export default Header;