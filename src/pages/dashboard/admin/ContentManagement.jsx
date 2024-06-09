import { useState } from "react";
import SectionHeading from "../../../shared/sectionHeading/SectionHeading";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const ContentManagement = () => {
  const { user } = useAuth();
  const [filter, setFilter] = useState(" ");
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: blog = [], refetch } = useQuery({
    queryKey: ["blog", filter, axiosPublic],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blog?filter=${filter}`);
      return res.data;
    },
  });
  console.log(blog);

  const handlePublish = async (id, current, after) => {
    if (current == "draft") {
      console.log("current", current);
      console.log("after- if", after);
      const res = await axiosSecure.patch(`/blog/${id}`, { status: after });
      console.log(res.data);
      refetch();
    } else {
      console.log("current", current);
      console.log("after else", after);
      const res = await axiosSecure.patch(`/blog/${id}`, { status: after });
      console.log(res.data);
      refetch();
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    console.log(user?.email);

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
        console.log(id);
        const res = await axiosSecure.delete(`/blog/${id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Donation Request has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div className="my-8 space-y-10">
      <SectionHeading heading={"Content Managements"}></SectionHeading>
      <div>
        <div>
          <div className="flex justify-between">
            <select
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              className="border-2 rounded-lg"
            >
              <option value="">select status</option>
              <option value="draft">Draft</option>
              <option value="published">Publish</option>
            </select>
            <Link to={"/dashboard/content-management/add-blog"}>
              <button className="bg-red-400 p-2 text-white rounded-md">
                Add Blog
              </button>
            </Link>
          </div>
        </div>
        <div className="my-10 space-y-6">
          {blog.map((data) => (
            <div key={data._id} className="flex gap-5 border-2">
              <div className="h-28 w-36 bg-gray-300 relative">
                <div className="h-28 w-36">
                  <img className="h-full w-full" src={data?.image} alt="" />
                </div>
                <span className="absolute -top-3 -left-3 bg-red-400 p-1 text-white rounded-3xl">
                  {data.status}
                </span>
              </div>
              <p className="flex-1">{data.description}</p>
              <div className="w-3/12 bg-orange-200 flex gap-5 items-center justify-center px-2">
                <button
                  onClick={() =>
                    handlePublish(
                      data._id,
                      data.status,
                      data.status == "published" ? "draft" : "published"
                    )
                  }
                  className="p-2 bg-slate-300 w-3/6 rounded-xl"
                >
                  {data.status !== "published" ? "Publish" : "Unpublish"}
                </button>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="p-2 bg-slate-300 w-3/6 rounded-xl"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
