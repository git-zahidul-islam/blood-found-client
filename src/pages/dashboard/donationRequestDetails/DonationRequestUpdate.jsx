import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useOuterData from "../../../hooks/useOuterData";
import useSpecificUser from "../../../hooks/useSpecificUser";
import SectionHeading from "../../../shared/sectionHeading/SectionHeading";
import { useForm } from "react-hook-form";
import { useState } from "react";

const DonationRequestUpdate = () => {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate()
  const loaderData = useLoaderData();
  console.log(loaderData);
  console.log(edit);
  const {
    recipientName,
    recipientUpazila,
    recipientDistrict,
    fullAddress,
    hospitalName,
    details,
    title,
    date,
    time,
    _id,
  } = loaderData;
  const { user } = useAuth();
  const [district, upazila] = useOuterData();
  const { register, handleSubmit } = useForm();
  const [userInfo] = useSpecificUser();
  const axiosPublic = useAxiosPublic();

  const handleUpdate = async (data) => {
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
    console.log(requestData);
    const res = await axiosPublic.patch(`/donationDetails/${_id}`, requestData);
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        title: "Oh Great!",
        text: "The Data Is Updated!",
        icon: "success",
      });
      navigate('/dashboard/my-donation-requests')
    }
    setEdit(false);
  };

  return (
    <div className="my-8 space-y-10">
      <SectionHeading heading={"Donation Update"}></SectionHeading>
      <div className="">
        <form
          onSubmit={handleSubmit(handleUpdate)}
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
                disabled={edit === false}
                type="text"
                name="recipientName"
                id="recipientName"
                placeholder="recipient name"
                defaultValue={recipientName}
                className="py-2 px-5 border-2 rounded-md block w-full"
                {...register("recipientName")}
              />
            </div>
            <div className="flex w-full gap-2">
              <div className="w-full">
                <label htmlFor="name">Recipient district</label>
                <select
                  disabled={edit === false}
                  name="recipientDistrict"
                  id="recipientDistrict"
                  defaultValue={recipientDistrict}
                  className="py-2 px-5 border-2 rounded-md block w-full"
                  {...register("recipientDistrict")}
                >
                  {edit === false && (
                    <>
                      <option>{recipientDistrict}</option>
                    </>
                  )}
                  {edit === true && (
                    <>
                      {district.map((dis) => (
                        <option key={dis._id} value={dis.name}>
                          {dis.name}
                        </option>
                      ))}
                    </>
                  )}
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="name">Recipient upazila</label>
                <select
                  disabled={edit === false}
                  name="recipientUpazila"
                  id="recipientUpazila"
                  defaultValue={recipientUpazila}
                  className="py-2 px-5 border-2 rounded-md block w-full"
                  {...register("recipientUpazila")}
                >
                  {edit === false && (
                    <>
                      <option>{recipientUpazila}</option>
                    </>
                  )}
                  {edit === true && (
                    <>
                      {upazila.map((dis) => (
                        <option key={dis._id} value={dis.name}>
                          {dis.name}
                        </option>
                      ))}
                    </>
                  )}
                </select>
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="name">Hospital name(full)</label>
              <input
                disabled={edit === false}
                type="text"
                name="hospitalName"
                id="hospitalName"
                defaultValue={hospitalName}
                placeholder="Hospital name(full)"
                className="py-2 px-5 border-2 rounded-md block w-full"
                {...register("hospitalName")}
              />
            </div>
            <div className="w-full">
              <label htmlFor="name">Full address</label>
              <input
                disabled={edit === false}
                type="text"
                name="fullAddress"
                id="fullAddress"
                defaultValue={fullAddress}
                placeholder="full address"
                className="py-2 px-5 border-2 rounded-md block w-full"
                {...register("fullAddress")}
              />
            </div>
            <div className="flex w-full gap-2">
              <div className="w-full">
                <label htmlFor="name">Date</label>
                <input
                  disabled={edit === false}
                  type="date"
                  name="date"
                  id="date"
                  defaultValue={date}
                  className="py-2 px-5 border-2 rounded-md block w-full"
                  {...register("date")}
                />
              </div>
              <div className="w-full">
                <label htmlFor="name">Time</label>
                <input
                  disabled={edit === false}
                  type="time"
                  name="time"
                  id="time"
                  defaultValue={time}
                  className="py-2 px-5 border-2 rounded-md block w-full"
                  {...register("time")}
                />
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <h1 className="text-lg font-medium">Why Blood Need Details:</h1>
          <div className="w-full space-y-2">
            <label htmlFor="name">Title</label>
            <input
              disabled={edit === false}
              type="text"
              name="title"
              id="title"
              placeholder="title type"
              defaultValue={title}
              className="py-2 px-5 border-2 rounded-md block w-full"
              {...register("title")}
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="name">Details</label>
            <textarea
              {...register("details")}
              className="px-5 py-5 border-2 rounded-md block w-full resize-none h-44"
              name="details"
              id="details"
              defaultValue={details}
              disabled={edit === false}
              placeholder="type details"
            ></textarea>
          </div>
          <div className="flex justify-center text-white">
            {/* <button  type="submit">Request</button> */}
            {edit === false && (
              <>
                <button
                  onClick={() => setEdit(!edit)}
                  className="px-3 py-2 cursor-pointer rounded-md bg-gray-400"
                >
                  Edit
                </button>
              </>
            )}
            {edit === true && (
              <>
                <input
                  // onClick={() => setEdit(!edit)}
                  className={`px-3 py-2 cursor-pointer rounded-md bg-red-400`}
                  type="submit"
                  value="Update"
                />
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationRequestUpdate;
