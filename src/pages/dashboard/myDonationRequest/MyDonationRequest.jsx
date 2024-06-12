import { Link } from "react-router-dom";
import useDonationRequest from "../../../hooks/useDonationRequest";
import SectionHeading from "../../../shared/sectionHeading/SectionHeading";
import useHandle from "../../../hooks/useHandle";
import noDataImage from '../../../assets/Images/other/nodata.png'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyDonationRequest = () => {
  const [donationRequest,refetch,filter, setFilter] = useDonationRequest();
  const [DonationRequestHandleDelete] = useHandle()
  const axiosPublic = useAxiosPublic()
  



  // console.log(donationRequest);

  const handleDone = async(id,current,after)=>{
    if(current == after) return toast.error('Action not permit')
    // console.log(id,current,after);
    const res = await axiosPublic.patch(`/donationDone/${id}`,{status: after})
    // console.log(res.data);
    if(res.data.modifiedCount >0) {
      Swal.fire({
        title: "oh Great",
        text: "thanks for done this",
        icon: "success",
      });
      refetch()
    }
  }

  const handleCanceled = async(id,current,after) => {
    // console.log(id,current,after);
    const res = await axiosPublic.patch(`/donationCanceled/${id}`,{status: after})
    // console.log(res.data);
    if(res.data.modifiedCount >0) {
      Swal.fire({
        title: "Oh Miss!",
        text: "You Miss this Opportunity",
        icon: "success",
      });
      refetch()
    }

  }


  return (
    <div className="space-y-10 mt-8">
      <SectionHeading heading={"My Donation Requests"}></SectionHeading>
      <div className="flex items-center gap-3">
      <p>User filtering</p>
            <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
             className="border-2 rounded-lg p-1" name="select" id="select">
              <option value="">Reset</option>
              <option value="pending">Pending</option>
              <option value="inprogress">Inprogress</option>
              <option value="canceled">Canceled</option>
              <option value="done">Done</option>
            </select>
      </div>
      {
        donationRequest.length !== 0 ?
      <section className="container mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Location
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Donation Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Donation Time
                      </th>

                      {
                        donationRequest.map(data => data?.status == 'inprogress') &&
                        <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                       {/* here is status inprogress system */}
                       Donar Info
                      </th>
                      }

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {donationRequest.map((data) => (
                      <tr key={data._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          {data.name}
                        </td>

                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          {data.fullAddress}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <p  className="text-xs font-normal text-gray-600 dark:text-gray-400">
                            {data.status}
                          </p>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {data.date}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {data.time}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div>
                            <p>{data?.bloodDonar?.name}</p>
                            <p>{data?.bloodDonar?.email}</p>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center justify-evenly gap-x-6">
                            {data.status === "inprogress" && (
                              <>
                                <button onClick={()=>handleDone(data._id,data?.status,"done")} className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                  Done
                                </button>
                                <button onClick={()=>handleCanceled(data._id,data?.status,"canceled")} className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                Cancel
                                </button>
                              </>
                            )}
                            <Link
                              to={`/dashboard/donation-requests-update/${data._id}`}
                            >
                              <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                Edit
                              </button>
                            </Link>
                            <Link to={`/dashboard/donation-requests-details/${data._id}`}>
                              <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                View
                              </button>
                            </Link>
                            <button onClick={()=>DonationRequestHandleDelete(data._id)} className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
        :
        <div className="flex justify-center">
          <div className="w-8/12">
            <img
              className="h-full w-full"
              src={noDataImage}
              alt="no data image"
            />
          </div>
        </div>

      }
      
    </div>
  );
};

export default MyDonationRequest;
