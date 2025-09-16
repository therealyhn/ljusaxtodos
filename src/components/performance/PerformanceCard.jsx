export default function PerformanceCard({ icon, title, description, buttonText, buttonColor, image }) {
    return (
        <div className="bg-background rounded-xl shadow-lg p-6 flex flex-col items-start gap-4 hover:shadow-primary-blue/30 transition">
            {image && (
                <img src={image} alt={title} className="rounded-md w-full object-cover" />
            )}

            <div className="flex items-center gap-2">
                <span className="text-primary-blue text-xl">{icon}</span>
                <h3 className="text-xl font-heading text-white">{title}</h3>
            </div>

            <p className="text-text-secondary font-body">{description}</p>

            <button
                className={`px-4 py-2 rounded-lg font-medium text-white transition ${buttonColor}`}
            >
                {buttonText}
            </button>
        </div>
    );
}
