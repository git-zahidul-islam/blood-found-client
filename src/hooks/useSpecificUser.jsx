import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useSpecificUser = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: userInfo = {}, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res.data
        }
    })

    return [userInfo,refetch]
};

export default useSpecificUser;