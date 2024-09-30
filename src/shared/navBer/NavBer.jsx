import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { RiMenuAddFill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const TestNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // const axiosSecure = useAxiosSecure()
  // const [isVolunteer] = useVolunteer()
  const location = useLocation();

  const handleLogout = () => {
    logout()
      .then(() => toast.success("successfully logout"))
      .catch((error) => console.error(error));
    setIsOpen(false);
  };

  const { data: userRole = [] } = useQuery({
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/usersRole/${user?.email}`);
      return res.data;
    },
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black bg-white relative">
      <div className="mx-auto flex justify-between items-center">
        <div className="w-full">
          {/* first part */}
          <div className="flex justify-between items-center w-full py-5 md:px-10 px-3">
            <div>
              <img className="md:w-[55%] w-[45%]" src="/blood-found-logo.png" alt="logo" />
            </div>

            <div className="hidden md:flex items-center justify-center gap-5">
              <button className="px-3 py-2 border bg-[#991747] text-white">
                Donate
              </button>
              {/* karpa start */}

              {user && location.pathname !== '/sign-in' ?  (
                <div className="relative flex items-center">
                  <button onClick={toggleMenu}>
                    <img
                      className="h-[42px] w-[42px] rounded-full"
                      src={`${user?.photoURL}`}
                      alt="user photo"
                    />
                  </button>
                  {isOpen && (
                    <div className="bg-[#991747]/70 z-50 text-white px-4 py-5 w-44 space-y-5 absolute top-14 right-0">
                      <Link
                        className="block text-lg"
                        to={
                          userRole?.role == "admin" ||
                          userRole?.role == "volunteer"
                            ? "dashboard/admin-home"
                            : "dashboard/user-home"
                        }
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block text-lg p-2 bg-[#CE3D61] w-full border border-white/55"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link className="p-2 border" to={"/sign-in"}>
                  Sign In
                </Link>
              )}
            </div>
          </div>

          {/* second part */}
          <div className="hidden md:flex bg-[#ce3d61] text-white/95 py-5 pl-10 border-b border-[#6A0B37] shadow">
            <div className="hidden md:flex lg:gap-16 md:gap-5 text-center">
              <Link to={"/"}>Home</Link>
              <Link to={"/donation-request"}>Donation Request</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/"}>Funding</Link>
            </div>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden pr-3">
          <button id="btn" onClick={toggleMenu}>
            {
            isOpen
            ? <VscChromeClose size={30}/>
            : <RiMenuAddFill size={30}/>
            }
            
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`w-full md:hidden mt-4 absolute top-14 z-10 bg-white/90 py-7 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-20px] opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center flex-col space-y-2">
          <Link to={"/"}>Home</Link>
          <Link to={"/donation-request"}>Donation Request</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/"}>Funding</Link>
          {user ? (
            <div className="">
              <Link
              className="block"
              to={
                userRole?.role == "admin" || userRole?.role == "volunteer"
                  ? "dashboard/admin-home"
                  : "dashboard/user-home"
              }
            >
              Dashboard
            </Link>
            <button className="bg-blue-500 px-4 py-2 rounded mt-2" onClick={handleLogout}>Logout</button>
            </div>
            
          ) : (
            <Link to={"/sign-in"} className="bg-blue-500 px-4 py-2 rounded">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TestNav;
