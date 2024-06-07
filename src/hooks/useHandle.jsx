import Swal from "sweetalert2";
import useAxiosPublic from "./useAxiosPublic";
import useDonationRequest from "./useDonationRequest";

const useHandle = () => {
  const axiosPublic = useAxiosPublic();
  const [, refetch] = useDonationRequest();

  const DonationRequestHandleDelete = (id) => {
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
        const res = await axiosPublic.delete(`/donationDelete/${id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Donation Request has been deleted.",
            icon: "success",
          });
        }
        refetch();
      }
    });
  };

  return [DonationRequestHandleDelete];
};

export default useHandle;
