import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useDonationRequest = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: donationRequest = [], refetch } = useQuery({
    queryKey: ["donationRequest",user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/donation/${user?.email}`);
      return res.data;
    },
  });

  return [donationRequest, refetch];
};

export default useDonationRequest;
