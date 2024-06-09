import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import sign_up_photo from '../../assets/Images/home-page/sign-up-page.jpg'
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import useOuterData from "../../hooks/useOuterData";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { userCreate, userUpdateProfile, user, setUser } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const [district,upazila] = useOuterData()
    
    const handleSignUp = async (data) => {
        const name = data?.name
        const email = data?.email
        const password = data?.password
        const ConfirmPassword = data?.ConfirmPassword
        if (password !== ConfirmPassword) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Confirm password is not match!",
            });
        }
        const bloodGroup = data?.bloodGroup
        const district = data?.district
        const upazila = data?.upazila
        const imagePost = { image: data?.photo[0] }

        try {
            const res = await axiosPublic.post(image_hosting_api, imagePost, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            // console.log("imag", res.data?.data.display_url);
            const photo = res.data?.data.display_url
            console.log(name, email, password, photo, ConfirmPassword, bloodGroup, district, upazila);

            // TODO: enable this
            userCreate(email, password)
                .then(result => {
                    console.log(result.user);
                    userUpdateProfile(name, photo)
                        .then(() => {
                            console.log("photo update");
                            setUser({ ...user, photoURL: photo, displayName: name })
                            const userInfo = {
                                name: name,
                                email: email,
                                bloodGroup,
                                upazila,
                                district,
                                role: 'donor',
                                status: 'active',
                                photo
                            }    
                            axiosSecure.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        Swal.fire({
                                            title: "Good job!",
                                            text: "login successfully!",
                                            icon: "success"
                                        });
                                    }
                                })
                            // reset
                            reset()
                        })
                        .catch(error => console.error(error))
                    navigate('/')
                })
                .catch(error => {
                    console.error("the error message is", error);
                    if (error) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "this email Already taken",
                        });
                    }
                })
        }
        catch (error) {
            console.log("the err.. is:", error);
            if (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Have issue try again or change Photo",
                });
            }
        }
    }

    return (
        <div className="flex justify-center items-center container mx-auto h-[100vh]">
            <div className="lg:w-6/12 md:w-6/12 w-full">
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Registration Now</h2>

                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Name</label>
                                <input id="name" type="text" {...register("name", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                {errors.name && <span className="text-red-400">This field is required</span>}
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Email</label>
                                <input type="email" {...register("email", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                {errors.email && <span className="text-red-400">This field is required</span>}
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Password</label>
                                <input id="password" type="password"
                                    {...register("password", { required: true, maxLength: 16, minLength: 6, pattern: /(?=.*\d)(?=.*[a-zA-Z])/ })}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                {errors.password?.type === 'required' && <span className="text-red-400">This field is required</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-400">use password maximum 16 character</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-400">use password minimum 6 character</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-400">one uppercase , one lowercase and one digite</span>}
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Password Confirmation</label>
                                <input id="passwordConfirmation" type="password"
                                    {...register("ConfirmPassword", { required: true, maxLength: 16, minLength: 6, pattern: /(?=.*\d)(?=.*[a-zA-Z])/ })}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                {errors.ConfirmPassword?.type === 'required' && <span className="text-red-400">This field is required</span>}
                                {errors.ConfirmPassword?.type === 'maxLength' && <span className="text-red-400">use password maximum 16 character</span>}
                                {errors.ConfirmPassword?.type === 'minLength' && <span className="text-red-400">use password minimum 6 character</span>}
                                {errors.ConfirmPassword?.type === 'pattern' && <span className="text-red-400">one uppercase , one lowercase and one digite</span>}
                            </div>

                            <div>
                                <label className="block text-sm text-gray-500 dark:text-gray-300">Image</label>
                                <input type="file" {...register("photo", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                {errors.photo && <span className="text-red-400">must select images</span>}
                            </div>

                            <div>
                                <label htmlFor="select">Blood Select</label>
                                <select {...register("bloodGroup", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                                {errors.bloodGroup && <span className="text-red-400"> bloodGroup field is required</span>}
                            </div>

                            <div>
                                <label htmlFor="select">District</label>
                                <select {...register("district", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    {
                                        district.map(dis => <option key={dis._id} value={dis.name}>{dis.name}</option>)
                                    }

                                </select>
                                {errors.district && <span className="text-red-400">District field is required</span>}
                            </div>

                            <div>
                                <label htmlFor="select">Upazila</label>
                                <select {...register("upazila", { required: true })} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    {
                                        upazila.map(upa => <option key={upa._id} value={upa.name}>{upa.name}</option>)
                                    }
                                </select>
                                {errors.upazila && <span className="text-red-400">Upazila field is required</span>}
                            </div>

                        </div>
                        <div className="flex justify-center mt-6">
                            <button className="w-1/2 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Sign Up</button>
                        </div>
                    </form>
                    <div className="divider"></div>
                    <div className="">
                        <SocialLogin></SocialLogin>
                    </div>
                </section>
            </div>
            <div className="lg:w-6/12 md:w-6/12 w-full lg:block md:block hidden">
                <div className="h-[100vh]">
                    <img className="h-full w-full" src={sign_up_photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;