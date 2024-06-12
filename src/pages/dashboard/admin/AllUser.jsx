import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import dummyPhoto from "../../../assets/Images/other/dumyPhoto.png";
import Swal from "sweetalert2";
import SectionHeading from "../../../shared/sectionHeading/SectionHeading";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [filter, setFilter] = useState(" ");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", filter, itemsPerPage, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users?page=${currentPage}&size=${itemsPerPage}&filter=${filter}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    axiosPublic.get("/usersCount").then((res) => {
      setCount(res.data.result);
    });
  }, [axiosPublic]);

  console.log("hh", count);

  const handleBlock = async (id, currentStatus, afterStatus, role) => {
    if (role == "admin") return toast.error("You are admin");

    if (currentStatus === "active") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch(`/users/admin/${id}`, {
            status: afterStatus,
          });
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "oh Great!",
              text: "User Status Update!",
              icon: "success",
            });
            refetch();
          }
        }
      });
    } else {
      // console.log("else",id, currentStatus);
      // console.log("after",afterStatus);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch(`/users/admin/${id}`, {
            status: afterStatus,
          });
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "oh Great!",
              text: "User Status Update!",
              icon: "success",
            });
            refetch();
          }
        }
      });
    }
  };

  const handleVolunteer = async (id, currentRole, afterRole) => {
    if (currentRole == "admin") return toast.error("you can not switch");
    if (currentRole == afterRole) return toast.error("You already volunteer");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/users_role/admin/${id}`, {
          role: afterRole,
        });
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "oh Great!",
            text: "The User is volunteer!",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  const handleAdmin = async (id, currentRole, afterRole) => {
    if (currentRole == afterRole) return toast.error("you already admin");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // console.log(id);
        // console.log(currentRole);
        // console.log(afterRole);

        const res = await axiosSecure.patch(`/users_admin_role/admin/${id}`, {
          role: afterRole,
        });
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "the user is admin.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  const numberOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()].map((ele) => ele + 1);

  const handleButton = (value) => {
    console.log(value);
    setCurrentPage(parseInt(value));
    refetch();
  };

  return (
    <div className="my-8 space-y-10">
      <SectionHeading heading={"All User"}></SectionHeading>
      <section className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Team members
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {users.length < 10 ? 0 : " "}
              {users.length} users
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <p>User filtering</p>
            <select
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              className="border-2 rounded-lg p-1"
              name="select"
              id="select"
            >
              <option value="">Reset</option>
              <option value="active">Active</option>
              <option value="block">Block</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-6">
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
                        <div className="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>

                          <svg
                            className="h-3"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0.1"
                            />
                            <path
                              d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0.1"
                            />
                            <path
                              d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0.3"
                            />
                          </svg>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Role</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                            />
                          </svg>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email address
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {users.map((data) => (
                      <tr key={data._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={data?.photo ? data.photo : dummyPhoto}
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {data?.name}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2  dark:bg-gray-800
                          ${
                            data?.status !== "active"
                              ? "bg-red-100/60"
                              : "bg-emerald-100/60"
                          }
                            `}
                          >
                            <span
                              className={`
                              ${
                                data?.status !== "active"
                                  ? "h-1.5 w-1.5 bg-red-500 rounded-full"
                                  : "h-1.5 w-1.5 bg-emerald-500 rounded-full"
                              }
                              `}
                            ></span>

                            <h2
                              className={`
                                ${
                                  data.status !== "active"
                                    ? "text-red-400"
                                    : "text-emerald-500 "
                                }
                              text-sm font-normal 
                              `}
                            >
                              {data?.status}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {data?.role}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {data?.email}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button
                              onClick={() =>
                                handleBlock(
                                  data?._id,
                                  data.status,
                                  data.status !== "active" ? "active" : "block",
                                  data.role
                                )
                              }
                              className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60"
                            >
                              {data.status !== "active" ? "unblock" : "block"}
                            </button>
                            <button
                              onClick={() =>
                                handleVolunteer(
                                  data._id,
                                  data.role,
                                  "volunteer"
                                )
                              }
                              className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60"
                            >
                              Make Volunteer
                            </button>
                            <button
                              disabled={data.role == "admin"}
                              onClick={() =>
                                handleAdmin(data._id, data.role, "admin")
                              }
                              className="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60"
                            >
                              Admin
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

        <div className="flex items-center justify-between mt-6">
          {/* previous */}
          <button
            disabled={currentPage == 1}
            onClick={() => handleButton(currentPage - 1)}
            className="flex disabled:bg-red-700/25 items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <span>previous</span>
          </button>

          <div className="items-center hidden lg:flex gap-x-3">
            {pages.map((page) => (
              <button
                onClick={() => handleButton(page)}
                key={page}
                // href="#"
                className={` 
                  ${currentPage === page ? "bg-red-600/45" : ""}
                   px-2 py-1 text-sm text-black rounded-md dark:bg-gray-800 bg-blue-100/60`}
              >
                {page}
              </button>
            ))}
          </div>
          {/* after button */}
          <button
            disabled={currentPage == numberOfPage}
            onClick={() => handleButton(currentPage + 1)}
            className={`flex disabled:bg-red-700/25 items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800`}
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AllUser;
