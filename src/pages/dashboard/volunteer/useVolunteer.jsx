import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const useVolunteer = () => {
    const axiosSecure = useAxiosSecure()
    const {user,loading} = useAuth()

    const {data: isVolunteer = [],isPending: isLoadingVolunteer} = useQuery({
        queryKey: ['isVolunteer',user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const {data }= await axiosSecure.get(`/users/volunteer/${user?.email}`)
            return data?.volunteer;
        }
    })

    return [isVolunteer,isLoadingVolunteer]
};

export default useVolunteer;