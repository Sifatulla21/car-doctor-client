import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name="password"  placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p>New to Car Doctors? <Link className="text-orange-600 font-bold" to="/signup">Sign Up</Link></p>
                        <div className="divider">OR Sign In With</div>
                        <div>
                            <button className="btn btn-circle btn-outline">
                                G
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;