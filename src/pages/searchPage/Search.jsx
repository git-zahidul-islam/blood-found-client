import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import districts from '../../../public/districts.json';
// import upazilas from '../../../public/upazilas.json';
import useOuterData from "../../hooks/useOuterData";


const Search = () => {
    const [district, upazila,] = useOuterData()

    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [upazilasForDistrict, setUpazilasForDistrict] = useState([]);
    const [donors, setDonors] = useState([]);


    const { register, handleSubmit, formState: { errors } } = useForm();

    // console.log(upazila);

    useEffect(() => {
        if (selectedDistrict) {
            const filteredUpazilas = upazila.filter(upa => upa.district_id === selectedDistrict);
            setUpazilasForDistrict(filteredUpazilas);
        } else {
            setUpazilasForDistrict([]);
        }
    }, [selectedDistrict, upazila]);


    const onSubmit = (data) => {
        const selectedDistrictName = district.find(dis => dis.id === selectedDistrict)?.name || "";
        const searchData = {
            ...data,
            district: selectedDistrictName,
        };
        console.log("Search Form Data:", searchData);
        fetch(`${import.meta.env.VITE_API_URL}/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(searchData)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Search Response Data:", data);
            setDonors(data);
        })
        .catch(error => console.log(error));
    };


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Search Donors</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Blood Group</span>
                    </label>
                    <select
                        {...register("bloodGroup", { required: true })}
                        className="select select-bordered"
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    {errors.bloodGroup && <span className="text-red-600">Blood group is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">District</span>
                    </label>
                    <select
                        {...register("district", { required: true })}
                        className="select select-bordered"
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                    >
                        <option value="">Select District</option>
                        {district.map((district) => (
                            <option key={district.id} value={district.id}>{district.name}</option>
                        ))}
                    </select>
                    {errors.district && <span className="text-red-600">District is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Upazila</span>
                    </label>
                    <select
                        {...register("upazila", { required: true })}
                        className="select select-bordered"
                        disabled={!selectedDistrict}
                    >
                        <option value="">Select Upazila</option>
                        {upazilasForDistrict.map((upazila) => (
                            <option key={upazila.id} value={upazila.name}>{upazila.name}</option>
                        ))}
                    </select>
                    {errors.upazila && <span className="text-red-600">Upazila is required</span>}
                </div>
                <div className="form-control mt-6 col-span-1 md:col-span-3">
                    <input
                        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        type="submit"
                        value="Search"
                    />
                </div>
            </form>
            <div>
                {donors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {donors.map((donor) => (
                            <div key={donor._id} className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{donor.name}</h2>
                                    <p>Email: {donor.email}</p>
                                    <p>Blood Group: {donor.bloodGroup}</p>
                                    <p>District: {donor.district}</p>
                                    <p>Upazila: {donor.upazila}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No donors found</p>
                )}
            </div>
        </div>
    );
};


export default Search;



