import axios from 'axios'
import useAuth from './useAuth';
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://blood-found-server.vercel.app',
});

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    // request interceptor 
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        // don somethings
        return Promise.reject(error)
    })

    // response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status;
        console.log("the inter, err status code", status);
        if (status === 401 || status === 403) {
            await logout()
            navigate('/sign-in')
        }
        return Promise.reject(error)
    })


    return axiosSecure;
};

export default useAxiosSecure;