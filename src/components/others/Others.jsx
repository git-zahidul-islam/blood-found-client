

const Others = () => {
   
    return (
        <div>
            <h1>others</h1>
            <p>other is secret messages</p>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Username</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Email Address</label>
                            <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>

            {/* const {data: profileInfo = { } } = useQuery({
                queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res.data
        }
    })
    console.log("edit", isEdit); */}

            {/* <div classNameName="flex justify-between gap-5 max-w-screen-2xl mx-auto">
                <div classNameName="bg-gray-300 w-2/12 h-screen"> gafuygwefg</div>
                <div classNameName="bg-stone-500 h-full flex-1"> gafuygwefg</div>
            </div> */}
        </div>
    );
};

export default Others;