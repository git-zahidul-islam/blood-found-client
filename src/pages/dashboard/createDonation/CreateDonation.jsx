import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useOuterData from "../../../hooks/useOuterData";
import useSpecificUser from "../../../hooks/useSpecificUser";
import SectionHeading from "../../../shared/sectionHeading/SectionHeading";
import { useForm } from "react-hook-form";

const CreateDonation = () => {
  const { user } = useAuth();
  const [district, upazila] = useOuterData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [userInfo] = useSpecificUser();
  const axiosPublic = useAxiosPublic();
  // console.log(userInfo?.status);

  const handleRequest = async (data) => {
    const name = user?.displayName;
    const email = user?.email;
    const recipientName = data.recipientName;
    const recipientDistrict = data.recipientDistrict;
    const recipientUpazila = data.recipientUpazila;
    const hospitalName = data.hospitalName;
    const fullAddress = data.fullAddress;
    const date = data.date;
    const time = data.time;
    const title = data.title;
    const details = data.details;
    const status = "pending";
    const requestData = {
      name,
      email,
      recipientName,
      recipientDistrict,
      recipientUpazila,
      hospitalName,
      date,
      time,
      title,
      details,
      fullAddress,
      status,
    };
    // console.log(requestData);
    const res = await axiosPublic.post("/donation", requestData);
    // console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        title: "Good job!",
        text: "Blood request successfully!",
        icon: "success",
      });
    }
    reset();
  };

  return (
    <div className="my-8 space-y-10">
      <SectionHeading heading={"Create donation request page"}></SectionHeading>
      <div className="">
        <form
          onSubmit={handleSubmit(handleRequest)}
          className="space-y-6 w-8/12 mx-auto"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <input
                defaultValue={user?.displayName}
                disabled
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="py-2 px-5 border-2 rounded-md block w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Email</label>
              <input
                defaultValue={user?.email}
                disabled
                type="text"
                name="email"
                id="email"
                placeholder="name"
                className="py-2 px-5 border-2 rounded-md block w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Recipient name</label>
              <input
                type="text"
                name="recipientName"
                id="recipientName"
                placeholder="recipient name"
                className="py-2 px-5 border-2 rounded-md block w-full"
                {...register("recipientName", { required: true })}
              />
              {errors.recipientName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex w-full gap-2">
              <div className="w-full">
                <label htmlFor="name">Recipient district</label>
                <select
                  name="recipientDistrict"
                  id="recipientDistrict"
                  className="py-2 px-5 border-2 rounded-md block w-full"
                  {...register("recipientDistrict", { required: true })}
                >
                  {district.map((dis) => (
                    <option key={dis._id} value={dis.name}>
                      {dis.name}
                    </option>
                  ))}
                </select>
                {errors.recipientDistrict && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="name">Recipient upazila</label>
                <select
                  name="recipientUpazila"
                  id="recipientUpazila"
                  className="py-2 px-5 border-2 rounded-md block w-full"
                  {...register("recipientUpazila", { required: true })}
                >
                  {upazila.map((dis) => (
                    <option key={dis._id} value={dis.name}>
                      {dis.name}
                    </option>
                  ))}
                </select>
                {errors.recipientUpazila && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="name">Hospital name(full)</label>
              <input
                type="text"
                name="hospitalName"
                id="hospitalName"
                placeholder="Hospital name(full)"
                className="py-2 px-5 border-2 rounded-md block w-full"
                {...register("hospitalName", { required: true })}
              />
              {errors.hospitalName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="name">Full address</label>
              <input
                type="text"
                name="fullAddress"
                id="fullAddress"
                placeholder="full address"
                className="py-2 px-5 border-2 rounded-md block w-full"
                {...register("fullAddress", { required: true })}
              />
              {errors.fullAddress && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex w-full gap-2">
              <div className="w-full">
                <label htmlFor="name">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="py-2 px-5 border-2 rounded-md block w-full"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="name">Time</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="py-2 px-5 border-2 rounded-md block w-full"
                  {...register("time", { required: true })}
                />
                {errors.time && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <h1 className="text-lg font-medium">Why Blood Need Details:</h1>
          <div className="w-full space-y-2">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title type"
              className="py-2 px-5 border-2 rounded-md block w-full"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="name">Details</label>
            <textarea
              {...register("details", { required: true })}
              className="px-5 py-5 border-2 rounded-md block w-full resize-none h-44"
              name="details"
              id="details"
              placeholder="type details"
            ></textarea>
            {errors.details && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex justify-center text-white">
            {/* <button  type="submit">Request</button> */}
            <input
              disabled={userInfo?.status !== "active"}
              className={`px-3 py-2 cursor-pointer rounded-md 
                            ${
                              userInfo?.status !== "block"
                                ? "bg-red-400"
                                : "btn-disabled bg-slate-400"
                            }
                            `}
              type="submit"
              value="Request"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDonation;
