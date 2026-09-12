
import BannerImage from '../assets/banner-stack.png';

const Ban = () => {
    return (
        <div className="grid grid-cols-3 items-center justify-between px-10 py-20 gap-10">
            <div className="col-span-2 flex flex-col gap-6">
    
                <h1 className="text-5xl font-bold">
                    Build Your Ideal <br></br>
                    <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
                </h1>


                <p className="text-gray-600">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div className="flex items-center gap-4">
                    <button className="bg-linear-to-r from-orange-500 to-pink-600 text-white text-[15px] px-3 py-1.5 rounded-md">Explore Technologies</button>
                    <button className="bg-white text-black text-[15px] px-3 py-1.5 border border-gray-300 rounded-md ">Learn More</button>
                </div>


            </div>

            <div className="col-span-1.2 mx-auto">
                <img src={BannerImage} alt="Banner" />
            </div>
        </div>
    );
};

export default Ban;

