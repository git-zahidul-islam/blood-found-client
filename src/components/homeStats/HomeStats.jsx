import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const HomeStats = () => {
    const axiosPublic = useAxiosPublic()

    const {data: total =[]} = useQuery({
        queryKey: ['total'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/public-stats')
            return res.data;
        }
    })

    console.log(total);

    return (
        <div>
            <section className="px-6 py-12 my-6 bg-gradient-to-r from-stone-200 to-red-400 text-gray-800">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-gradient-to-bl from-red-500 via-red-300 to-red-50 h-20 w-20">
				<img className="w-full h-full" src='https://img.icons8.com/?size=100&id=81139&format=png&color=000000' alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{total.user}</p>
				<p className="capitalize">User</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-gradient-to-bl from-red-500 via-red-300 to-red-50 h-20 w-20">
				<img className="w-full h-full" src='https://img.icons8.com/?size=100&id=52505&format=png&color=000000' alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{total.blog}</p>
				<p className="capitalize">Blog</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-gradient-to-bl from-red-500 via-red-300 to-red-50 h-20 w-20">
				<img className="w-full h-full" src='https://img.icons8.com/?size=100&id=64519&format=png&color=000000' alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{total.upazile}</p>
				<p className="capitalize">Upazile</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-gradient-to-bl from-red-500 via-red-300 to-red-50 h-20 w-20">
				<img className="w-full h-full" src='https://img.icons8.com/?size=100&id=116710&format=png&color=000000' alt="" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{total.district}</p>
				<p className="capitalize">District</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default HomeStats;