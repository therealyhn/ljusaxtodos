export default function PerformanceCard({
    icon: Icon,
    title,
    description,
    buttonText,
    buttonColor,
    image,
}) {
    return (
        <div className="bg-background rounded-xl shadow-lg p-6 flex flex-col justify-between items-center text-center gap-4 hover:shadow-primary-blue/80 transition">
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
