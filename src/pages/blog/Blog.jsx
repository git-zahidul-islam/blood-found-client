import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Blog = () => {
  const axiosPublic = useAxiosPublic();

  const { data: blog = [] } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogShow`);
      return res.data;
    },
  });

  console.log(blog);

  return (
    <div className="max-w-7xl mx-auto my-8 min-h-[60vh]">
      {blog.map((data) => (
        <div key={data._id} className="bg-red-300/50 flex gap-5 p-4">
          <div className="w-44 h-40">
            <img className="w-full h-full" src={data?.image} alt="" />
          </div>
          <div className="space-y-2">
            <h1>{data?.title}</h1>
            <p>{data?.description.slice(0, 150)}</p>
            <div>
              <Link to={`/blog-details/${data._id}`}>
                <button className="bg-red-600/50 rounded-xl p-2 text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
