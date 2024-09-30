import BenefitsBloodDonate from "../../components/BenefitsBloodDonate";
import HomeStats from "../../components/homeStats/HomeStats";
import LastBloodDonar from "../../components/LastBloodDonar";
import AboutProject from "../aboutProject/AboutProject";
import ActionCall from "../actionCall/ActionCall";
import Banner from "../banner/Banner";
import Test from "../banner/Test";
import ContactUs from "../contactUs/ContactUs";
import Faq from "../faq/Faq";

const Home = () => {
  return (
    <div className="md:space-y-24 space-y-12">
      {/* <Banner></Banner> */}
      <div>
        <Test />
      </div>

      {/* last blood donar */}
      <div>
        <LastBloodDonar />
      </div>

      <div>
        <AboutProject />
      </div>

      {/* blood donate benefits */}
      <div>
        <BenefitsBloodDonate />
      </div>

      <div>
        <ActionCall/>
      </div>

      <div>
        <Faq />
      </div>

      <div>
        <ContactUs></ContactUs>
      </div>
      <div className="md:pb-16 pb-8">
        <HomeStats></HomeStats>
      </div>
    </div>
  );
};

export default Home;
