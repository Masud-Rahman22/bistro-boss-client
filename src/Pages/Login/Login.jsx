import { useContext, useEffect, useState } from 'react';
import loginPicture from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SocailLogin from '../../Components/SocailLogin';
import useAxiosPublic from '../../Hookes/useAxiosPublic';
const Login = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()
    const location = useLocation();
    const { logIn, googleLogin } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err.message);
            })
    }
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosPublic.post('/users',userInfo)
            .then((res)=>{
                if(res.data){
                    navigate('/')
                }
            })
        })
        .catch(err =>{
            console.error(err.message);
            
        })
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const value = e.target.value;
        if (validateCaptcha(value) == true) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left md:w-1/2">
                        <img src={loginPicture} alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="captcha" name='captcha' placeholder="type the captcha above" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                {/* TODO: dsiabled in false */}
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div onClick={handleGoogleLogin} className='flex items-center justify-center py-5'>
                            <SocailLogin></SocailLogin>
                            </div>
                            <p>New Here ? <Link to='/signUp'>Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default Login;