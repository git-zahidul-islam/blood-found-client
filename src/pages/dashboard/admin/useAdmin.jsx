import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";



const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const {user,loading} = useAuth()

    const {data: isAdmin = [],isPending: isLoadingAdmin} = useQuery({
        queryKey: ['isAdmin',user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const {data }= await axiosSecure.get(`/users/admin/${user?.email}`)
            return data?.admin;
        }
    })

    return [isAdmin,isLoadingAdmin]
};

export default useAdmin;