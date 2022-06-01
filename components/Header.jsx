import React from 'react';
import Image from 'next/image';
import logo from "../public/middleman.png";
import { SearchIcon, MenuIcon, UserCircleIcon, UsersIcon, GlobeAltIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
 <header className="sticky top-0 z-50 grid 
      grid-cols-3 bg-white shadow-md p-5 md">

    {/* left div */}
    <div className="relative flex items-center h-10
     cursor-pointer my-auto ">
    <Image
       src = {logo}  alt="some text"
       layout="fill"
       objectFit='contain'
       objectPosition="left"
    />  

     </div>

    {/* middle div */}
    <div className='flex items-center md:border-2
     rounded-full py-2 md:shadow-sm '>
        <input className='flex-grow pl-5 bg-transparent 
        outline-none text-sm text-gray-600 placeholder-gray-400'
         type="text" name="" 
        id="" placeholder='Start Your Search' />

        <SearchIcon className="hidden md:inline-flex h-8 bg-blue-700
         text-white rounded-full p-2 cursor-pointer md:mx-2"/>

        </div>

    {/* right div */}
    <div className='flex items-center space-x-4 justify-end
     text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a 
        Host</p>
        <GlobeAltIcon className='h-12 cursor-pointer' />

        <div className='flex items-center space-x-2 border-2 
        p-2 rounded-full'>
            <MenuIcon className='h-6' />
            <UserCircleIcon className='h-6'/>
        </div>

    </div>

</header>


  )
}

export default Header