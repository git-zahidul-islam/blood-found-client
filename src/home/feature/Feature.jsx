import Marquee from "react-fast-marquee";

const Feature = () => {
    return (
        // TODO: make this beautiful
        <div className="bg-slate-200 md:mt-10 py-10 space-y-5">
            <h2 className="text-2xl font-medium text-center">New 10 Doner Helping People</h2>
            <Marquee>

            <div className="flex gap-5">
                <div className="h-24 w-32 bg-slate-400 border-2 border-slate-600"></div>
                <div className="h-24 w-32 bg-slate-400 border-2 border-slate-600"></div>
                <div className="h-24 w-32 bg-slate-400 border-2 border-slate-600"></div>
                <div className="h-24 w-32 bg-slate-400 border-2 border-slate-600"></div>
                <div className="h-24 w-32 bg-slate-400 border-2 border-slate-600"></div>
                <div className="h-24 w-32 bg-slate-400 border-2 border-slate-600"></div>
                <div className="h-24 w-32 bg-slate-400 border-2 border-slate-600"></div>
                <div className="h-24 w-32 bg-slate-400 border-2 border-slate-600"></div>
                <div className="h-24 w-32 bg-slate-400 border-2 border-slate-600"></div>
            </div>
            </Marquee>
        </div>
    );
};

export default Feature;