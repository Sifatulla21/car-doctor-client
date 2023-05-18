import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const BookService = () => {
    const service = useLoaderData();
    const { title, _id, img, price } = service;
    const {user} = useContext(AuthContext);
    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const due = form.due.value;
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service_id: _id,
            service_title: title,
            price: due
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Service Book Successfully');
            }
        })
    }
    return (
        <div>
            <h2 className="text-center text-3xl">Book Service: <span className="text-orange-500">{title}</span></h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-2 gap-6">
                  
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" defaultValue={user?.name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="due" defaultValue={'$'+price} placeholder="Due Amount" className="input input-bordered" />
                        </div>
                    
                </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary btn-block" type="submit" value="Book Service" />
                        </div>
            </form>
        </div>
    );
};

export default BookService;