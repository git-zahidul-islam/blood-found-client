import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../shared/sectionHeading/SectionHeading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import noDataImage from '../../../assets/Images/other/nodata.png'
import { Link } from "react-router-dom";
import useVolunteer from "../volunteer/useVolunteer";
import { toast } from "react-toastify";



const AllBloodDonationRequest = () => {
    const axiosSecure = useAxiosSecure()
    const [isVolunteer] = useVolunteer()


    const {data: allRequest = [],refetch} = useQuery({
        queryKey: ['allRequest'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/donation')
            return res.data;
        }
    })
    // console.log(allRequest);

    const handleStatus =async(id,current,after)=>{
      if(current == after) return toast.error('action not permit')
      // console.log(id);      
      // console.log(current);      
      // console.log(after);
      const res = await axiosSecure.patch(`volunteer-role/${id}`,{status: after})
      // console.log(res.data);
      if(res.data){
        toast.success('status Change')
      }
      refetch()
    }

    return (
        <div className="my-8 space-y-10">
            <SectionHeading heading={"All Blood Donation Request"}></SectionHeading>
            {
        allRequest.length !== 0 ?
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

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {allRequest.map((data) => (
                      <tr key={data._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          {data.name}
                        </td>

                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          {data.fullAddress}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                            {data.status}
                          </p>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {data.date}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {data.time}
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center justify-evenly gap-x-6">
                            {
                              isVolunteer !== true ?
                              <>
                              {data.status === "inprogress" && (
                              <>
                                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                  Cancel
                                </button>
                                <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                  Done
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
                            <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                delete
                                </button>
                              </>
                              :
                              <button 
                              onClick={() => handleStatus(data._id, data?.status, 'inprogress')}
                               className="bg-green-500/80 text-white p-1 rounded-md">Change Status
                               </button>
                            }
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

export default AllBloodDonationRequest;