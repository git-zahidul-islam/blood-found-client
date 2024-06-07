import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../../shared/sectionHeading/SectionHeading";


const DonationRequestDetails = () => {
    const loaderData = useLoaderData()
    console.log(loaderData);
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
      } = loaderData;
    return (
        <div className="my-8 space-y-10">
            <SectionHeading heading={'Donation Request Details'}></SectionHeading>
            <div className="space-y-10">
                <div className="grid md:grid-cols-3 gap-3 bg-red-300 p-4">
                    <h3>Location: <span className="font-medium">{fullAddress}</span></h3>
                    <h3>Date: <span className="font-medium">{date}</span> </h3>
                    <h3>Time:  <span className="font-medium">{time}</span>  </h3>
                    <h3>Hospital Name:  <span className="font-medium">{hospitalName}</span>  </h3>
                    <h3>District Name:  <span className="font-medium">{recipientDistrict}</span></h3>
                    <h3>Upazila Name:  <span className="font-medium">{recipientUpazila}</span></h3>
                </div>
                <div className="space-y-4">
                    <h5>the patient, <span className="text-red-400">{recipientName}</span></h5>
                    <div className="flex md:gap-5">
                        <p>disease:</p>
                        <p className="font-bold">{title}</p>
                    </div>
                    <div className="space-y-2">
                        <p>Description</p>
                        <p className="min-h-28 border-2 p-4 rounded-md">
                            {details}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationRequestDetails;