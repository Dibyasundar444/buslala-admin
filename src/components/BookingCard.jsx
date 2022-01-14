import React from 'react'

const BookingCard = ({ title, value, icon }) => {
    return (
        <div className='h-44 w-64 rounded-xl shadow-xl flex justify-around items-center flex-col m-5 p-8'>
            {icon}
            <h1 className='text-xl'>{title}</h1>
            <h3 className='text-lg'>{value}</h3>
        </div>
    )
}

export default BookingCard
