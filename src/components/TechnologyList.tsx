import type { Technology } from "../types/Technology";
import TechnologyCard from "./TechnologyCard";

type TechnologyListProps = {
    technologies: Technology[];
};

function TechnologyList({ technologies }: TechnologyListProps) {
    return (
        <div className="grid grid-cols- items-center justify-between px-10 py-20 gap-10">

            <h1 className="text-3xl font-bold">Explore the <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span></h1>

            <p className="text-gray-600">Pick one technology per category to build your ideal stack.</p>

            <div className="grid grid-cols-4 items-top justify-between  py-10 gap-10">

                <div className="col-span-3 grid grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                    {technologies.map((technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                        />
                    ))}

                </div >


                <div className="col-span-1 flex flex-col gap-6">

                    <h1 className="text-3xl font-bold">Your Stack</h1>
                    
                </div>
            </div>

        </div>
    );
}

export default TechnologyList;
