import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const HomeStats = () => {
  const axiosPublic = useAxiosPublic();

  const { data: total = [] } = useQuery({
    queryKey: ["total"],
    queryFn: async () => {
      const res = await axiosPublic.get("/public-stats");
      return res.data;
    },
  });

  return (
    <div className="relative bg-[#B32346] py-5">

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {/* Users Stat */}
          <div className="p-6">
            <h3 className="text-2xl font-bold">Users</h3>
            <p className="mt-2 text-xl">{total.user}</p>
          </div>

          {/* Blood Donated Stat */}
          <div className="p-6">
            <h3 className="text-2xl font-bold">Blood Donated</h3>
            <p className="mt-2 text-xl">{total.done}</p>
          </div>

          {/* Pending Stat */}
          <div className="p-6">
            <h3 className="text-2xl font-bold">Pending</h3>
            <p className="mt-2 text-xl">{total.pending}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
