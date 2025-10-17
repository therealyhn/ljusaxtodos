import { Music4 } from "lucide-react";

export default function OurWorkButton({ text = "Our Work", onClick }) {
  return (
    <div className="flex justify-center my-12">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-8 py-3 rounded-full font-medium text-white 
        bg-gradient-to-r from-primary-indigo to-primary-cyan 
        shadow-lg hover:opacity-90 hover:shadow-primary-cyan/50 
        transition-all duration-500"
      >
        <Music4 size={20} />
        {text}
      </button>
    </div>
  );
}
