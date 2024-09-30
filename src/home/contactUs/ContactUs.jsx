import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdOutlinePermContactCalendar, MdPhone } from "react-icons/md";

const ContactUs = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        <p className="md:text-3xl text-xl font-medium flex items-center gap-3"><MdOutlinePermContactCalendar className="text-[#991747]"/> Contact With Admin</p>
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="inline-block p-3 text-white rounded-full bg-[#991747] text-2xl">
             <MdEmail/>
            </span>

            <h2 className="mt-4 md:text-lg text-base font-normal text-gray-800">Email</h2>
            <p className="mt-2 text-gray-500">
              Our friendly team is here to help.
            </p>
            <p className="mt-2 text-blue-500">hello@merakiui.com</p>
          </div>

          <div>
            <span className="inline-block p-3 text-white rounded-full bg-[#991747] text-2xl">
            <FaWhatsapp/>
            </span>

            <h2 className="mt-4 md:text-lg text-base font-normal text-gray-800">WhatsApp</h2>
            <p className="mt-2 text-gray-500">
              You can call and messages me
            </p>
            <p className="mt-2">+8801915*****</p>
          </div>

          <div>
            <span className="inline-block p-3 text-white rounded-full bg-[#991747] text-2xl">
              <MdPhone/>
            </span>

            <h2 className="mt-4 md:text-lg text-base font-normal text-gray-800">Phone</h2>
            <p className="mt-2 text-gray-500">Mon-Fri from 8am to 5pm.</p>
            <p className="mt-2 text-blue-500">+1 (555) 000-0000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
