import { useLoaderData } from "react-router-dom";



const BlogDetails = () => {
    const loaderData = useLoaderData()
    // console.log(loaderData);
    return (
        <div className="max-w-7xl mx-auto my-8">
<div className="flex gap-5 lg:flex-row md:flex-row flex-col">
            <div className="lg:w-10/12 md:w-10/12 w-full space-y-2 px-2">
                <div className="h-4/6">
                    <img className="w-full h-full" src={loaderData?.image} alt="image" />
                </div>
                <h1 className="text-2xl">{loaderData?.title}</h1>
                <p>{loaderData?.description}</p>
            </div>
            <div className="space-y-3 lg:w-2/12 md:w-2/12 w-full bg-gray-400/30 p-4 px-2">
                <h1 className="text-base font-medium">Recent Blog Publish</h1>
                <div className="space-y-2">
                    <p>link number 1</p>
                    <p>link number 1</p>
                    <p>link number 1</p>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default BlogDetails;