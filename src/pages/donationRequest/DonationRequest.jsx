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
  // console.log(pendingData);

  return (
    <section>
    <div className="w-full md:h-32 h-12 bg-[#991747] flex justify-center items-center">
    <SectionHeading heading={"All Donation Request"} color={'text-white'}></SectionHeading>
    </div>

    <div className="my-8 min-h-[50vh]">
      <div>
        <div className="max-w-7xl mx-auto"> 
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-base">Recipient name</th>
                  <th className="text-base">Location</th>
                  <th className="text-base">Date</th>
                  <th className="text-base">Time</th>
                  <th className="text-base">
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
                            <button  className="bg-[#991747] p-2 rounded text-white/95 text-sm">details</button>
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
    </section>
  );
};

export default DonationRequest;
