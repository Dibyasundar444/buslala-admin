import React from 'react'
import { BsPerson } from 'react-icons/bs';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { BiBusSchool, BiLocationPlus, BiBook } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

const ItemsCenter = 'flex items-center h-8 cursor-pointer text-xl border-b-[1px]';

const Sidebar = () => {
    return (
        <div className="w-3/12 bg-[#969557] h-screen px-4 pb-16 pt-10 flex flex-col justify-between">
            <div className='text-2xl text-white flex items-center justify-center h-24'>
                <img src={Logo} alt="logo"/>
            </div>

            <div className='text-white h-60 p-6'>
                <ul className='flex flex-col justify-around h-full'>
                    <Link to='/'>
                        <li className={ItemsCenter}><BsPerson />Dashboard</li>
                    </Link>
                    <Link to='/bus-details'>
                        <li className={ItemsCenter}><BiBusSchool />Bus Details</li>
                    </Link>
                    <Link to='location-details'>
                        <li className={ItemsCenter}><BiLocationPlus />Location Details</li>
                    </Link>
                    <Link to='booking-details'>
                        <li className={ItemsCenter}><BiBook />Booking Details</li>
                    </Link>
                </ul>
            </div>

            <div className='h-36 p-4 text-white flex items-center justify-center'>
                <ul className='flex flex-col items-center justify-around w-full h-24'>
                    <li className={`${ItemsCenter} pb-6 w-full flex justify-center`}><CgProfile />Profile</li>
                    <li className={`${ItemsCenter} border-none`}><CgLogOut />Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
