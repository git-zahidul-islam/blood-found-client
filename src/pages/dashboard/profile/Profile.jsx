import useAuth from "../../../hooks/useAuth";
import SectionHeading from "../../../shared/sectionHeading/SectionHeading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useOuterData from "../../../hooks/useOuterData";
import useSpecificUser from "../../../hooks/useSpecificUser";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Profile = () => {
    const axiosPublic = useAxiosPublic()
    const [isEdit, setIsEdit] = useState(false)
    const { user, } = useAuth()
    // const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()
    const [district, upazila] = useOuterData()
    const [userInfo, refetch] = useSpecificUser()

    const handleToggle = () => {
        setIsEdit(!isEdit)
    }

    console.log(userInfo);

    const handleUpdate = async (data) => {
        const name = data?.name
        const bloodGroup = data?.bloodGroup
        const district = data?.district
        const upazila = data?.upazila
        let photo = []

        if (data?.photo && data?.photo.length > 0) {
            const formData = new FormData()
            formData.append('image', data.photo[0])

            // const imagePost = { image: data?.photo[0] || null }

            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            if (res.data.success) {
                photo = res.data?.data?.display_url;
            } else {
                Swal.fire('Error', 'Image upload failed', 'error');
                return;
            }
            // console.log("imag", res.data?.data.display_url);
            // console.log(res.data?.data.display_url) 
            // const profilePhoto = res.data?.data.display_url
            // photo.push(profilePhoto)
        }
        const updateData = {
            name,
            bloodGroup,
            district,
            upazila,
            photo
        }
        console.log(updateData);

        const res = await axiosPublic.patch(`/users/${user?.email}`, updateData)
        console.log("updated data", res.data);
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                title: "Good job!",
                text: "login successfully!",
                icon: "success"
            });
            refetch()
        }
        reset()
        setIsEdit(false)
    }


    return (
        <div className="mt-8 space-y-10">
            <SectionHeading heading={'Profile'}></SectionHeading>
            {/* this is profile div */}
            <div>
                <div className="relative">
                    <div className="w-full h-40 bg-red-400">
                    </div>
                    <div className="flex justify-center">
                        <img className="rounded-full absolute -bottom-10 border-2 p-1 h-28 w-28" src={userInfo?.photo} alt="" />
                    </div>
                </div>
                <div className="w-full mt-16 space-y-5">
                    <div className="flex justify-between items-center h-12">
                        <h1 className="text-lg">Profile Information</h1>
                        {isEdit === false &&
                            <button onClick={handleToggle} className="btn">Edit</button>
                        }
                    </div>
                    <form onSubmit={handleSubmit(handleUpdate)}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Name</label>
                                <input disabled={isEdit == false} {...register("name")} defaultValue={userInfo?.name} id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label htmlFor="select">Blood Select</label>
                                <select disabled={isEdit == false} {...register("bloodGroup")} defaultValue={userInfo?.bloodGroup} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    {isEdit === false &&
                                        <option>
                                            {userInfo?.bloodGroup ? userInfo?.bloodGroup : ' '}
                                        </option>
                                    }
                                    {
                                        isEdit === true &&
                                        <>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </>
                                    }
                                </select>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Email</label>
                                <input disabled defaultValue={userInfo?.email} id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label htmlFor="select">District</label>
                                <select disabled={isEdit == false} {...register("district")} defaultValue={userInfo?.district} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    {isEdit === false &&
                                        <option>
                                            {userInfo?.district ? userInfo?.district : ' '}
                                        </option>
                                    }
                                    {isEdit === true &&
                                        district.map(dis => <option key={dis._id} value={dis.name}>
                                            {dis.name}
                                        </option>)
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="select">Upazila</label>
                                <select {...register("upazila")} disabled={isEdit == false} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    {isEdit === false &&
                                        <option>
                                            {userInfo?.upazila ? userInfo?.upazila : ' '}
                                        </option>
                                    }
                                    {isEdit === true &&
                                        upazila.map(upa => <option key={upa._id} value={upa.name}>{upa.name}</option>)
                                    }
                                </select>
                            </div>
                            {
                                isEdit === true &&
                                <div>
                                    <label className="block text-sm text-gray-500 dark:text-gray-300">Image</label>
                                    <input type="file" disabled={isEdit == false} {...register("photo")} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            }
                        </div>

                        {
                            isEdit === true &&
                            <button className="btn" type="submit">Save</button>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;