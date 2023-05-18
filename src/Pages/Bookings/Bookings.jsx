import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingsTable from './BookingsTable';

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url =`http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data => setBookings(data))
    },[url]);

    const handleDelete = id =>{
        const proceed = confirm('Are You Sure You Want To Delete?');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount>0){
                    alert('Deleted Successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }
    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking=> booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }
    return (
        <div>
            <h3 className="text-center text-3xl font-bold">Your Booking: {bookings.length}</h3>
            {
                bookings.map(booking =><BookingsTable
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                    handleBookingConfirm={handleBookingConfirm}
                ></BookingsTable>)
            }
        </div>
    );
};

export default Bookings;