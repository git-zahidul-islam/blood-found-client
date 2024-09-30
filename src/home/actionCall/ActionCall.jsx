import { Link } from "react-router-dom";
import { FaBullhorn } from "react-icons/fa";
import { IoFootstepsOutline } from "react-icons/io5";

const ActionCall = () => {
  return (
    <section className="container mx-auto px-5">
      <h2 className="md:text-3xl text-xl font-medium md:pb-8 pb-4 flex gap-3 items-center"><FaBullhorn className="text-[#991747]" size={25}/> How To Donate?</h2>
      {/* main content */}
      <div className="flex justify-center">
      <div className="flex justify-center md:flex-row flex-col items-center gap-8 md:pt-12 space-y-10 md:space-y-0 md:py-0 py-10">

        {/* step 1 */}
        <div className="flex flex-col justify-center md:space-y-6 space-y-4 items-center">
          <p className="w-20 h-20 rounded-full bg-[#B32346] text-white/95 flex justify-center items-center"><IoFootstepsOutline size={30}/></p>
          <div>
          <h4 className="text-center md:text-3xl text-xl font-semibold">
            Login With Email
          </h4>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.
          </p>
          <div className="text-center pt-4">
            <Link to={"/sign-in"} className="p-3 bg-[#991747] text-white/95 rounded-md">
              Login
            </Link>
          </div>
          </div>
        </div>

        {/* step 2 */}
        <div className="flex flex-col justify-center items-center md:space-y-6 space-y-4 md:pb-32">
        <p className="w-20 h-20 rounded-full bg-[#B32346] text-white/95 flex justify-center items-center"><IoFootstepsOutline size={30}/></p>
        <div>
        <h4 className="text-center md:text-3xl text-xl font-semibold">
            Go Donation Request
          </h4>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.
          </p>
          <div className="text-center pt-4">
            <Link to={"/sign-in"} className="p-3 bg-[#991747] text-white/95 rounded-md">
              Donate
            </Link>
          </div>
        </div>
        </div>

        {/* step 3 */}
        <div className="flex flex-col justify-center items-center md:space-y-6 space-y-4">
        <p className="w-20 h-20 rounded-full bg-[#B32346] text-white/95 flex justify-center items-center"><IoFootstepsOutline size={30}/></p>
        <div>
        <h4 className="text-center md:text-4xl text-xl font-semibold">
            Next Process
          </h4>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.
          </p>
          <div className="flex justify-center md:pt-1 pt-1">
          <button className="p-3 bg-[#991747] text-white/95 rounded-md">Done</button>
          </div>
        </div>
        </div>

      </div>
      </div>
    </section>
  );
};

export default ActionCall;
