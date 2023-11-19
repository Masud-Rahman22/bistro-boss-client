import axios from "axios";
import useAuth from "./useAuth";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const {Logout} = useAuth()
    // const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('Access-token')
        // console.log('request stopped by interceptor', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    // for response
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) =>{
        const status = error.response.status;
        // console.log('the error in the interceptor',status);
        if(status === 401 || status === 403){
            await Logout();
            // navigate('/login')
            <Navigate to='/login'></Navigate>
        }
        return Promise.reject(error);
    });
    return axiosSecure
};

export default useAxiosSecure;