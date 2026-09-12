import type { Technology } from "../types/Technology";
import TechnologyCard from "./TechnologyCard";

type TechnologyListProps = {
    technologies: Technology[];
    selectedTechnologies: Technology[];
    onAdd: (technology: Technology) => void;
    onRemove: (technologyId: string) => void;
    onRemoveAll: () => void;
};

function TechnologyList({ technologies, selectedTechnologies, onAdd, onRemove, onRemoveAll }: TechnologyListProps) {
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
                            onAdd={onAdd}
                            isSelected={selectedTechnologies.some(
                                (item) => item.id === technology.id
                            )}
                        />
                    ))}

                </div >


                <div className="col-span-1 flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                    <h1 className="text-3xl font-bold">
                        Your Stack
                    </h1>

                    <p className="text-gray-600">
                        {selectedTechnologies.length} Technology Selected
                    </p>

                    {selectedTechnologies.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                            <p className="text-gray-500">
                                No technology selected
                            </p>
                        </div>
                    )}

                    {selectedTechnologies.length > 0 && (
                        <div className="flex flex-col gap-3">
                            {selectedTechnologies.map((technology) => (
                                <div
                                    key={technology.id}
                                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={technology.icon}
                                            alt={`${technology.name} logo`}
                                            className="h-8 w-8 object-contain"
                                        />

                                        <div className="flex flex-col">
                                            <h4 className="font-semibold text-gray-900">
                                                {technology.name}
                                            </h4>
                                            <p className="text-[10px] text-gray-500">
                                                {technology.category}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => onRemove(technology.id)}
                                        className="rounded-full px-2 py-1 text-gray-400 transition hover:bg-red-100 hover:text-red-500"
                                    >
                                        ✕
                                    </button>
                                </div>

                            ))}

                            <button
                                type="button"
                                onClick={onRemoveAll}
                                className="mt-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                            >
                                Remove All
                            </button>

                        </div>
                    )}



                </div>
            </div>

        </div>
    );
}

export default TechnologyList;
