import { Link } from "react-router-dom";
import blood from '../../assets/Images/other/blood.png'


const ContactUs = () => {

    const handleUPdate = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <section className=" dark:bg-gray-900 mb-10">
                <div className="container py-12 mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-6">
                        <div className="lg:w-1/2 lg:mx-6 lg:px-0 md:px-0 px-5 relative">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl
                            bg-gradient-to-r from-red-600 via-red-300 to-red-700 bg-clip-text text-transparent
                            ">
                                Contact us for more info
                            </h1>

                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        Cecilia Chapman 711-2880 Nulla
                                        St. Mankato Mississippi 96522
                                    </span>
                                </p>
<div className="absolute -left-52">
    <img className="opacity-40" src={blood} alt="" />
</div>
                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(257) 563-7401</span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">acb@example.com</span>
                                </p>
                            </div>

                            <div className="mt-6 md:mt-8">
                                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                                <div className="flex mt-4 -mx-1.5 gap-2">
                                <Link to={'https://www.facebook.com/zahidul.islam.here/'}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>
                              </Link>
                                <Link to={'https://x.com/zahidulislampro'}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
</svg>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div
                                className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                                <h1 className="text-lg font-medium bg-gradient-to-r from-red-700 via-red-300 to-red-600 bg-clip-text text-transparent">What do you want to ask</h1>

                                <form onSubmit={handleUPdate} className="mt-6">
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="w-full mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                    </div>

                                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#EC4F47] rounded-md hover:bg-[#EC4F30] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        get in touch
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;