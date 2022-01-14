import React from 'react'
import BookingCard from '../components/BookingCard'
import { BsListCheck } from 'react-icons/bs';
import { GrCurrency } from 'react-icons/gr';
import { MdOutlineCancelPresentation } from 'react-icons/md';

const BookingDetails = () => {
    return (
        <div className='flex h-full p-10'>
            <BookingCard title="Total Bookings" value="50" icon={<BsListCheck size={30}/>}/>
            <BookingCard title="Total Sales" value="12" icon={<GrCurrency size={30}/>}/>
            <BookingCard title="Total Cancellations" value="05" icon={<MdOutlineCancelPresentation size={30}/>}/>
        </div>
    )
}

export default BookingDetails
