import { useLoaderData, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AllDonationRequestDetails = () => {
  const loadingData = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  // modal
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  // handle function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const postData = {
      bloodDonar: {
        name,
        email,
      },
      status: "inprogress",
    };
    // console.log(postData);

    const res = await axiosPublic.patch(
      `/donated/${loadingData?._id}`,
      postData
    );
    // console.log(res.data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        title: "Thanks For help!",
        text: "Donation Admitted",
        icon: "success",
      });
      navigate('/donation-request')
    }

    setIsOpen(false);
  };

  // console.log(loadingData);
  return (
    <div className="max-w-7xl mx-auto my-8 space-y-5">
      {/* first section */}
      <div className="flex justify-between lg:flex-row md:flex-row flex-col bg-red-300/35 p-4">
        <div className="space-y-2">
          <label htmlFor="reqName">Requester Name:</label>
          <h2>{loadingData?.name}</h2>
        </div>
        <div className="divider lg:hidden md:hidden"></div>
        <div className="space-y-2">
          <label htmlFor="ReqEmail">Requester Email:</label>
          <h2>{loadingData?.email}</h2>
        </div>
      </div>
      {/* second section */}
      <div className="flex lg:flex-row md:flex-row flex-col justify-between w-full gap-5 border-2 p-4">
        <div className="lg:w-7/12 md:w-7/12 w-full space-y-3">
          <h4>
            <span className="text-lg font-bold">Symptom name:</span>{" "}
            <span className="font-medium text-base">{loadingData?.title}</span>
          </h4>
          <h5>
            <span className="text-lg font-bold">Description:</span> <br />{" "}
            {loadingData.details}
          </h5>
        </div>
        <div className="space-y-5 lg:w-5/12 md:w-5/12 w-full">
          <h3 className="underline font-semibold">
            Blood Needed Person Details:{" "}
          </h3>
          <div className="space-y-1">
            <h5>RecipientName: {loadingData?.recipientName}</h5>
            <h5>hospitalName: {loadingData?.hospitalName}</h5>
            <h5>Address: {loadingData?.fullAddress}</h5>
            <h5>Recipient Upazila: {loadingData?.recipientUpazila}</h5>
            <h5>recipientDistrict: {loadingData?.recipientDistrict}</h5>
            <h5>Date: {loadingData?.date}</h5>
            <h5>Time: {loadingData?.time}</h5>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="bg-red-600/45 py-2 w-1/12 rounded-lg text-white"
        >
          Donate
        </button>
      </div>
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
        // className='w-24 h-24'
      >
        <div className="space-y-5">
          <div className="w-72 min-h-44 space-y-5 relative">
            <div className="absolute right-0 -top-8">
              <button
                className="bg-red-700/50 p-2 rounded-full"
                onClick={closeModal}
              >
                close
              </button>
            </div>
            <h1 className="text-lg font-medium">Confirm The Donation</h1>
            <form onSubmit={handleSubmit}>
              <div className="space-y-3">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    defaultValue={loadingData?.name}
                    disabled
                    className="block p-1 w-full border-2 rounded-md"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    defaultValue={loadingData?.email}
                    disabled
                    className="block p-1 w-full border-2 rounded-md"
                    type="text"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="bg-red-700/50 p-2 h-12">Confirm</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AllDonationRequestDetails;
