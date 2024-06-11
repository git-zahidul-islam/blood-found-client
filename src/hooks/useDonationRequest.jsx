import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useState } from "react";

const useDonationRequest = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [filter, setFilter] = useState(" ");

  const { data: donationRequest = [], refetch } = useQuery({
    queryKey: ["donationRequest",user?.email,filter],
    queryFn: async () => {
      const res = await axiosPublic.get(`/donation/${user?.email}?filter=${filter}`);
      return res.data;
    },
  });

  return [donationRequest, refetch,filter, setFilter];
};

export default useDonationRequest;
