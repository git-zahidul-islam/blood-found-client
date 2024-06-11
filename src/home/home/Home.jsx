import HomeStats from "../../components/homeStats/HomeStats";
import Banner from "../banner/Banner";
import ContactUs from "../contactUs/ContactUs";
import Feature from "../feature/Feature";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <ContactUs></ContactUs>
            <HomeStats></HomeStats>
        </div>
    );
};

export default Home;