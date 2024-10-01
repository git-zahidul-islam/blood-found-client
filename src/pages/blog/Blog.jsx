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

  // console.log(blog);

  return (
    <section>
    <div className="w-full md:h-32 h-12 bg-[#991747] flex justify-center items-center">
        <h1 className="md:text-4xl text-2xl font-semibold text-white/80">The Blog Post</h1>
      </div>

    <div className="max-w-7xl mx-auto my-8 flex md:flex-row flex-col md:gap-5 gap-2 md:px-0 px-2">
      {blog.map((data) => (
        <div key={data._id} className="border-2 flex gap-5 p-4 md:my-4 my-0 md:w-[50%] w-full">
          <div className="w-44 h-40">
            <img className="w-full h-full" src={data?.image} alt="" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1>{data?.title}</h1>
              <p>{data?.description.slice(0, 150)}</p>
            </div>
            <div>
              <Link to={`/blog-details/${data._id}`}>
                <button className="bg-[#991747] rounded-md p-2 text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Blog;
