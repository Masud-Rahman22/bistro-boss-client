// import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginPicture from '../../assets/others/authentication2.png';
import { useForm } from "react-hook-form"
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hookes/useAxiosPublic';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the db');
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "you have successfully signed up",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss || Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left md:w-1/2">
                        <img src={loginPicture} alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" required />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="name" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" required />
                                {errors.photoURL && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    maxLength: 20,
                                    minLength: 8,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className='text-red-600'>password is required</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className='text-red-600'>password can not exceed 20 characters</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-600'>password must be 8 characters long</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-600'>password must contains one upper case, one lower case, one digit and one special character</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p>ALready have an account !! <Link to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default SignUp;