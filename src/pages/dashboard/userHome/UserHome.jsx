import useAuth from "../../../hooks/useAuth";
import useDonationRequest from "../../../hooks/useDonationRequest";
import { Link } from "react-router-dom";
import useHandle from "../../../hooks/useHandle";

const UserHome = () => {
  const { user } = useAuth();
  const [donationRequest,] = useDonationRequest();
  const [DonationRequestHandleDelete] = useHandle()

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold">
        Welcome{" "}
        <span className="text-red-400">
          {user?.displayName ? user?.displayName : "User"}
        </span>
      </h1>
      <div className="space-y-5">
        <h3 className="text-xl font-semibold">Recent, 3 donation request</h3>
        <div>
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
                      {donationRequest.slice(0,3).map((data) => (
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

            <div className="flex justify-center mt-5">
              <Link to={"/dashboard/my-donation-requests"}>
                <button className="bg-red-400 px-3 py-2 rounded-md">
                  Show all Request
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
