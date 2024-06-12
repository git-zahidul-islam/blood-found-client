import { useForm } from "react-hook-form";
import SectionHeading from "../../../shared/sectionHeading/SectionHeading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const title = data.title;
    // const image = data?.image[0].name;
    const description = data.description;
    let image = [];

    if (data?.image && data?.image.length > 0) {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        image = res.data?.data?.display_url;
      } else {
        Swal.fire("Error", "Image upload failed", "error");
        return;
      }
    }
    const postData = {
      title,
      image,
      description,
      status: "draft",
    };
    const res = await axiosPublic.post("/blog", postData);
    // console.log(res.data);
    if (res.data) {
      toast.success('Article Post Successfully')
      reset();
    }
  };

  return (
    <div className="my-8 space-y-10">
      <SectionHeading heading={"Add Blog Post"}></SectionHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <div className="w-full space-y-5">
            <div>
              <label htmlFor="title">Title</label>
              <input
                className="block border-2 p-2 rounded-md w-full"
                type="text"
                name="title"
                id="title"
                {...register("title")}
              />
            </div>
            <div>
              <label htmlFor="image">image</label>
              <input
                className="block border-2 p-1 rounded-md"
                type="file"
                name="image"
                id="image"
                {...register("image")}
              />
            </div>
          </div>
          <div>
            <label htmlFor="title">Details</label>
            <textarea
              name="description"
              id="description"
              {...register("description")}
              className="block border-2 p-2 resize-none h-64 w-full"
              placeholder="write your text"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <input
            className="rounded-lg my-5 py-2 w-2/12 bg-red-400 cursor-pointer"
            type="submit"
            value="Post"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
