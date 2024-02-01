import React from 'react';
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import { SlMagnifier } from "react-icons/sl";

export default function Navbar() {
  return (
    <nav className='flex justify-between px-8 py-6 items-center lg:px-[12rem]'>
      <p>Logo</p>
      <ul className='hidden sm:inline-block sm:flex sm:gap-x-8'>
        <li className='border-b-2 border-primary'>Home</li>
        <li className='border-b-2 border-white'>Produtos</li>
        <li className='border-b-2 border-white'>Contato</li>
      </ul>
      <div className='flex gap-x-4 items-center'>
        <button>
          <HiMenu size={30} className='sm:hidden border border-black rounded' />
        </button>
        <SlMagnifier size={24} />
        <PiShoppingCartSimple size={28} />
      </div>
    </nav>
  );
}
