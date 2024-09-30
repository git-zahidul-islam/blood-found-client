import { FaCertificate } from "react-icons/fa";


const LastBloodDonar = () => {
    return (
        <div className="space-y-5 my-16">
            <h3 className="ps-20 md:text-3xl text-xl font-medium flex items-center gap-3"><FaCertificate className="text-[#991747]"/> Last Blood Donar</h3>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-y-0 gap-y-6 justify-items-center">
                {/* box 1 */}
                <div className="space-y-3 flex flex-col items-center">
                    <img className="h-24 w-24 rounded-full border p-[2px]" src="../assets/Images/home-page/logo.png" alt="blood donar photo" />
                    <div className="text-center">
                        <h5>Name: Nayem</h5>
                        <p>Group: A+</p>
                    </div>
                </div>
                {/* box 1 */}
                <div className="space-y-3 flex flex-col items-center">
                    <img className="h-24 w-24 rounded-full border p-[2px]" src="../assets/Images/home-page/logo.png" alt="blood donar photo" />
                    <div className="text-center">
                        <h5>Name: Nayem</h5>
                        <p>Group: A+</p>
                    </div>
                </div>
                {/* box 1 */}
                <div className="space-y-3 flex flex-col items-center">
                    <img className="h-24 w-24 rounded-full border p-[2px]" src="../assets/Images/home-page/logo.png" alt="blood donar photo" />
                    <div className="text-center">
                        <h5>Name: Nayem</h5>
                        <p>Group: A+</p>
                    </div>
                </div>
                {/* box 1 */}
                <div className="space-y-3 flex flex-col items-center">
                    <img className="h-24 w-24 rounded-full border p-[2px]" src="../assets/Images/home-page/logo.png" alt="blood donar photo" />
                    <div className="text-center">
                        <h5>Name: Nayem</h5>
                        <p>Group: A+</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default LastBloodDonar;