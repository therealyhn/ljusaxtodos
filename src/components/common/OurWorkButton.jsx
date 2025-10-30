export default function OurWorkButton({
    text = "Our Work",
    onClick,
    className = "",
    override = false,
}) {
    const defaultClasses =
        "flex items-center gap-2 px-8 py-3 rounded-full font-medium text-white " +
        "bg-gradient-to-r from-primary-cyan to-primary-indigo " +
        "shadow-lg hover:opacity-90 hover:shadow-primary-indigo transition-all duration-300";

    return (
        <a href="/our-work"
            onClick={onClick}
            className={override ? className : `${defaultClasses} ${className}`}
        >
            {text}
        </a>
    );
}
