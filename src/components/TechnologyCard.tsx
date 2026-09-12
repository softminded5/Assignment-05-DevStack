import type { Technology } from "../types/Technology";

type TechnologyCardProps = {
    technology: Technology;
};

function TechnologyCard({ technology }: TechnologyCardProps) {
    return (
        <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex items-center justify-between">
                <img
                    className="h-12 w-12 object-contain"
                    src={technology.icon}
                    alt={`${technology.name} logo`}
                />

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {technology.badge}
                </span>
            </div>

            <h2 className="text-xl font-bold text-gray-900">
                {technology.name}
            </h2>

            <span className="mt-1 inline-block text-sm font-medium text-indigo-600">
                {technology.category}
            </span>

            <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                {technology.description}
            </p>

            <div className="mt-5 flex items-center justify-between text-sm text-gray-600">
                <span>{technology.difficulty}</span>

                <span className="font-semibold text-gray-700">
                    ⭐ {technology.rating}
                </span>
            </div>

            <button
                type="button"
                className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
                Add to Stack
            </button>
        </div>
    );
}

export default TechnologyCard;
