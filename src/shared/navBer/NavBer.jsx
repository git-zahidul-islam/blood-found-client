import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from '../../assets/Images/home-page/logo.png'
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import useVolunteer from "../../pages/dashboard/volunteer/useVolunteer";


const NavBer = () => {
    const { logout, user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    // const [isVolunteer] = useVolunteer()
    const location = useLocation()

    const handleLogout = () => {
        logout()
            .then(() => console.log("successfully logout"))
            .catch(error => console.error(error))
    }

    const {data: userRole = []} = useQuery({
        queryKey: ['userRole',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/usersRole/${user?.email}`)
            return res.data
        }
    })

    // console.log(userRole?.role);

    const navLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/donation-request'}>Donation Requests</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/'}>Funding</Link></li>
    </>

    return (
       <div className="flex justify-center w-full bg-red-400/60">
         <div className="navbar z-10 text-black container mx-auto px-0 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl font-bold">
                    <div className="w-14">
                        <img className="h-full w-full" src={logo} alt="" /> 
                    </div>
                    </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-lg">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && location.pathname !== '/sign-in' ?
                        // <details className="dropdown relative">
                        //     <summary className="">
                        //         <div className="avatar">
                        //             <div className="w-10 rounded-full">
                        //                 <img src={`${user?.photoURL}`} />
                        //             </div>
                        //         </div>
                        //     </summary>
                        //     <ul className="menu dropdown-content z-[1] bg-base-100 absolute -left-20 w-32">
                        //         <li><Link to={userRole?.role == 'admin' || userRole?.role == 'volunteer' ?
                        //              'dashboard/admin-home' : 'dashboard/user-home' }>dashboard</Link></li>
                        //         <li><button className="btn" onClick={handleLogout}>Logout</button></li>
                        //     </ul>
                        // </details>

                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={`${user?.photoURL}`} />
                          </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-2">
                            <li className="p-2 "><Link to={userRole?.role == 'admin' || userRole?.role == 'volunteer' ?
                                     'dashboard/admin-home' : 'dashboard/user-home' }>dashboard</Link></li>
                            <li><button className="p-2 bg-red-600/45" onClick={handleLogout}>Logout</button></li>
                        </ul>
                      </div>

                        :
                        <button className="p-2 bg-[#EC4F47] rounded-2xl text-base font-semibold"><Link to={'sign-in'}>Login</Link></button>
                }
            </div>
        </div>
       </div>
    );
};

export default NavBer;