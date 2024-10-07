import img from "../assets/Images/other/paralax.jpg";
import { FaGripfire } from "react-icons/fa";
import { GiLifeBar } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { SiBoosty } from "react-icons/si";

const BenefitsBloodDonate = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <p className="uppercase text-sm font-medium text-center md:text-left mb-4">
        ------ it also help other person
      </p>
      <h3 className="md:text-3xl text-xl font-medium text-center md:text-left mb-8 flex items-center gap-3">
      <FaGripfire className="text-[#991747]"/> Benefits of Blood Donate
      </h3>

      <div className="flex flex-col md:flex-row md:gap-14 gap-3 items-center md:items-start">
        {/* left side - Image or placeholder */}
        <div className="md:h-[360px] h-auto w-full md:w-1/2 p-5 border bg-[#CE3D61]">
          <img className="h-full w-full object-cover" src={img} alt="blood donate benefits" />
        </div>

        {/* timeline right side */}
        <div className="lg:space-y-[58px] md:space-y-[48px] space-y-8 w-full md:w-1/2 flex flex-col">
          {/* content 1 */}
          <div className="flex items-start gap-5">
            <div className="bg-[#991747] rounded-full">
              <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                <GiLifeBar size={25}/>
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Save Lives Instantly</h5>
              <p className="text-gray-600">
              Your blood donation can help save up to three lives in critical need of transfusions.
              </p>
            </div>
          </div>

          {/* content 2 */}
          <div className="flex items-start gap-5">
            <div className="bg-[#991747] rounded-full">
              <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                <MdHealthAndSafety size={25}/>
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Promotes Heart Health</h5>
              <p className="text-gray-600">
              Regular blood donation reduces excess iron in your body, lowering the risk of heart disease.
              </p>
            </div>
          </div>

          {/* content 3 */}
          <div className="flex items-start gap-5">
            <div className="bg-[#991747] rounded-full">
              <p className="md:h-16 h-12 md:w-16 w-12 text-xl font-semibold flex items-center justify-center text-white">
                <SiBoosty size={25}/>
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Boosts Your Well-Being</h5>
              <p className="text-gray-600">
              Donating blood can improve your emotional and physical health by helping others in need.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BenefitsBloodDonate;
