import axios from "axios";
import { useEffect, useState } from "react";
import { FaCertificate } from "react-icons/fa";


const LastBloodDonar = () => {
    const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(donors);

  useEffect(() => {
    // Fetch donor details from backend
    const fetchDonorDetails = async () => {
      try {
        const response = await axios.get('https://blood-found-server.vercel.app/get-blood-donor-emails');
        setDonors(response.data.donors);
      } catch (err) {
        setError('Failed to load donor details');
      } finally {
        setLoading(false);
      }
    };

    fetchDonorDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Have a Problem</p>;


    return (
        <div className="space-y-5 my-16">
            <h3 className="ps-20 md:text-3xl text-xl font-medium flex items-center gap-3"><FaCertificate className="text-[#991747]"/> Last Blood Donar</h3>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-y-0 gap-y-6 justify-items-center">
                {/* box 1 */}
                {
                    donors.map((doner,index) => (<div key={index} className="space-y-3 flex flex-col items-center">
                        <img className="h-24 w-24 rounded-full border p-[2px] object-cover" src={doner.photo ? doner.photo : "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"} alt="blood donar photo" />
                        <div className="text-center">
                            <h5>Name: {doner?.name}</h5>
                            <p>Group: {doner?.bloodGroup}</p>
                        </div>
                    </div>))
                }
                
            </div>
        </div>
    );
};

export default LastBloodDonar;