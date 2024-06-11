
const Feature = () => {
    return (
        // TODO: make this beautiful
        <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center w-full mt-16">
            <div className="lg:w-5/12 md:w-5/12 w-full  h-96">
                <img className="h-full w-full" src={'https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_1.jpg'} alt="mage" />
            </div>
            <div className="bg-gradient-to-r from-red-50 to-red-200 h-96 lg:w-4/12 md:4/12 w-full p-10 flex justify-center items-center">
                <div>
                    <h1 
                    className="md:text-5xl font-semibold bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">I promise <br /> must give blood</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Feature;