export default function BookButton({
    text = "Book a Set",
    onClick,
    className = "",
    override = false,
}) {
    const defaultClasses =
        "flex flex-col items-center gap-2 px-8 py-3 rounded-full font-medium text-white " +
        "bg-gradient-to-r from-primary-indigo to-primary-cyan " +
        "shadow-lg hover:opacity-90 hover:shadow-primary-cyan/50 transition-all duration-300";

    return (
        <a href="/booking"
            onClick={onClick}
            className={override ? className : `${defaultClasses} ${className}`}
        >
            {text}
        </a>
    );
}
