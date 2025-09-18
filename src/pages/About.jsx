import AboutHeader from "../components/about/AboutHeader";
import AboutCards from "../components/about/AboutCards";
import AboutStory from "../components/about/AboutStory";
import AboutStats from "../components/about/AboutStats";
import Navbar from "../components/nav/Navbar";

export default function About() {
    return (
        <div className="bg-background text-white">
            <Navbar />
            <AboutHeader />
            <AboutCards />
            <AboutStory />
            <AboutStats />
        </div>
    );
}
