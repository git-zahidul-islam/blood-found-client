// import paralex from '../../assets/Images/other/paralax.jpg'

const Feature = () => {
    return (
        // TODO: make this beautiful
        <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center w-full mt-16 relative bg-gradient-to-bl from-red-300 to-neutral-100"
        style={{
        // height: '500px',
    }}
        >
            {/* <div className="lg:w-5/12 md:w-5/12 w-full  h-96">
                <img className="h-full w-full" src={'https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_1.jpg'} alt="mage" />
            </div>
            <div className="bg-gradient-to-r from-red-50 to-red-200 h-96 lg:w-4/12 md:4/12 w-full p-10 flex justify-center items-center">
                <div>
                    <h1 
                    className="md:text-5xl font-semibold bg-gradient-to-r from-red-500 to-indigo-300 bg-clip-text text-transparent">I promise <br /> must give blood</h1>
                </div>
            </div> */}


<div className="max-w-6xl px-6 py-10 mx-auto">

        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-gradient-to-r from-red-500 to-red-200 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full p-6 bg-green-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_1.jpg" alt="client photo" />
                
                <div className="mt-2 md:mx-6">
                    <h1 className="md:text-5xl font-semibold bg-gradient-to-r from-stone-800 to-red-500 bg-clip-text text-transparent">I promise <br /> must give blood</h1>
                    
                </div>
            </div>
        </main>
    </div>
            
        </div>
    );
};

export default Feature;