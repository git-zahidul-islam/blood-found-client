import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";



const useOuterData = () => {
    const axiosPublic = useAxiosPublic()
    const [district, setDistrict] = useState([])
    const [upazila, setUpazila] = useState([])
    
    useEffect(() => {
        axiosPublic.get('/district')
            .then(res => {
                setDistrict(res.data)
            })
    }, [axiosPublic])

    useEffect(() => {
        axiosPublic.get('/upazila')
            .then(res => {
                setUpazila(res.data)
            })
    }, [axiosPublic])


    return [district, upazila]
};

export default useOuterData;