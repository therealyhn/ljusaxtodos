export default function PerformanceCard({
    icon: Icon,
    title,
    description,
    buttonText,
    buttonColor,
    image,
}) {
    return (
        <div className="bg-background2 rounded-xl shadow-[0px_10px_30px_rgba(0,0,0,0.25)] border-2 border-gray-800 p-6 flex flex-col justify-between
         items-center text-center gap-4 hover:shadow-primary-indigo/30 
        hover:-translate-y-1 hover:scale-105 transition duration-500">
            {/* Gornji deo */}
            <div className="flex flex-col items-center gap-4 w-full">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="rounded-md w-full object-cover"
                    />
                )}

                <div className="flex items-center justify-center gap-2">
                    {Icon && <Icon className="text-primary-blue" size={20} />}
                    <h3 className="text-xl font-heading text-white">{title}</h3>
                </div>

                <p className="text-text-secondary font-body">{description}</p>
            </div>

            {/* Dugme dole */}
            <div className="mt-4 w-full flex justify-center">
                <button
                    className={`px-4 py-2 rounded-lg font-medium text-white transition ${buttonColor}`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}
