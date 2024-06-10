import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionHeading from "../../shared/sectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const DonationRequest = () => {
  const axiosPublic = useAxiosPublic();

  const { data: pendingData = [] } = useQuery({
    queryKey: ["pendingData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/donationStatus`);
      return res.data;
    },
  });
  console.log(pendingData);

  return (
    <div className="my-8 space-y-10 min-h-[50vh]">
      <SectionHeading heading={"All Donation Request"}></SectionHeading>
      <div>
        <div className="max-w-7xl mx-auto"> 
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Recipient name</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>
                    view
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                    pendingData.map(data => <tr key={data._id}>
                        <th>{data.recipientName}</th>
                        <td>{data?.fullAddress}</td>
                        <td>{data.date}</td>
                        <td>{data.time}</td>
                        <th>
                            <Link to={`/donationDetails/${data._id}`}>
                            <button  className="bg-green-600/35 p-2 rounded-xl">details</button>
                            </Link>
                        </th>
                      </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationRequest;
