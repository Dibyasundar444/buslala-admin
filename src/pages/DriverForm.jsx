import React from 'react'
import { BsArrowReturnLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const InputStyle = "border-[1px] my-4 h-14 p-2 rounded-md outline-none hover:shadow-bs1 transition-all duration-200"

const CustomerForm = () => {
    return (
        <div className='mt-12'>
            <div className='px-60 h-16 flex items-center justify-between'>
                <p className='text-3xl'>Add New Driver</p>
                <Link to="/manage-drivers">
                    <BsArrowReturnLeft size={35} className='cursor-pointer'/>
                </Link>
            </div>
    
            <form className='flex flex-col pl-60 py-8'>
                <input type="number" placeholder="Enter Driver ID" className={`${InputStyle} w-72`}/>
                <input type="text" placeholder='Enter Driver Name' className={`${InputStyle} w-96`}/>
                <input type="email" placeholder="Enter Driver Email" className={`${InputStyle} w-96`}/>
                <input type="number" placeholder='Enter Driver Phone Number' className={`${InputStyle} w-72`} />

                <button className='bg-amber-400 w-32 h-12 rounded-md text-white hover:shadow-bs1 transition-all duration-200'>Add Driver</button>
            </form>
        </div>
    )
}

export default CustomerForm
