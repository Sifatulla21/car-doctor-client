import React from 'react';

const BookingsTable = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, customerName, email, date, img, price, service_title, status
    } = booking;

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
                    <tr>
                        <th>
                            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="rounded w-24 h-24">
                                        {img && <img src={img} />}
                                    </div>
                                </div>
                                <div>
                                    {service_title}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex flex-col">
                                <div>

                                    {customerName}
                                </div>
                                <div>

                                    {email}
                                </div>
                            </div>
                        </td>
                        <td>
                            {price}
                        </td>
                        <td>{date}</td>
                        <th>
                            {status === 'confirm' ? <span className="font-bold text-orange-500">Confirmed</span> : <button onClick={()=> handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
                        </th>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default BookingsTable;