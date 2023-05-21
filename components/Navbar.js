import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    }
    return(
        <div>
            <div className="bg-black hidden sm:flex sm:items-center p-[5vh] pl-[10vh] pr-[10vh] ">
                <div className="w-[10%]">
                    <img className="w-[100px]" src="/crypto_logo.png" alt="" />
                </div>
                <div className="text-[#ffffff] w-[80%] lg:text-3xl text-center font-sans  font-semibold" >
                    <Link className="m-[2vh]" href="/">Home</Link>
                    <Link className="m-[2vh]" href="#table">Market</Link>
                    <Link className="m-[2vh]" href="/blog">Blog</Link>
                    <Link className="m-[2vh]" href="#join">Join</Link>
                </div>
                <div className="w-[10%] ">
                <Link  href="#table"><FontAwesomeIcon  icon={faWallet} style={{color: "#ffffff"} }  size="2xl"/></Link>
                </div>
            </div>
            <div className="bg-black flex sm:hidden items-center p-[3vh] ">

                <div className="absolute md:hidden right-0 mr-[3vh]  text-white">
                    <button onClick={handleToggle}>
                    <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="fixed items-center justify-center inset-0 bg-gray-900 bg-opacity-50 z-50">
                    <div className="flex items-center bg-white shadow-lg transform -translate-x-full ease-in-out transition-all duration-300">
                        <div className="px-4 py-2 mt-20">
                        <Link  href="/">Home</Link>
                        <Link href="#table">Market</Link>
                        <Link  href="/">Home</Link>
                        <Link href="#table">Market</Link>
                        </div>
                    </div>
                    </div>
      )}
                <div className="w-[10%] ">
                    <Link  href="#table"><FontAwesomeIcon  icon={faWallet} style={{color: "#ffffff"} }  size="2xl"/></Link>
                </div>
            </div>
        </div>

    )
}