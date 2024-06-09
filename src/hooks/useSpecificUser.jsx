import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useSpecificUser = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: userInfo = {}, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data
        }
    })

    return [userInfo,refetch]
};

export default useSpecificUser;